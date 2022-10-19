import React from 'react';
import { Button } from 'smart-builder-components';
import { getAfterFormSubmitScript, Script } from 'smart-builder-sdk';
import styled from 'styled-components';
import type { ComponentProps } from 'unbounce-smart-builder-sdk-types';

import manifest from '../../manifest';
import { Props } from '../types';

const Wrapper = styled.div<{ configured: boolean; customHeight: number }>`
  ${({ configured, customHeight }) =>
    configured
      ? `
  width: 100%;
  height: ${customHeight ? `${customHeight}px` : '580px'};`
      : 'height: 100%'}
`;

const EmptyState = styled.div`
  background: #ededed;
  display: grid;
  justify-content: center;
  padding: 30px;
  text-align: center;
  width: 100%;
  img {
    max-height: 100px;
    max-width: 70%;
    margin: auto;
  }
  .empty-actions {
    display: grid;
    justify-content: center;
    grid-gap: 5px;
    a {
      text-decoration: none;
    }
  }
`;

export const getCalendlyScript = (
  calendlyComponentId: string,
  username: string,
  trackConversion: boolean,
) => `(function () {
  var el = document.getElementById('${calendlyComponentId}');
  if (el && el?.innerHTML) {
    el.innerHTML = '';
  }
  Calendly.initInlineWidget({
    url: 'https://calendly.com/${username}',
    parentElement: document.getElementById('${calendlyComponentId}'),
    prefill: {},
    utm: {},
  });
  function isCalendlyEvent(e) {
    return e.origin === "https://calendly.com" && e.data.event && e.data.event.indexOf("calendly.") === 0;
  };
   
  window.addEventListener("message", function(e) {
    if(isCalendlyEvent(e) && ${trackConversion} && e.data.event === "calendly.event_scheduled") {
      ${getAfterFormSubmitScript(calendlyComponentId, trackConversion)}
    }
  });
})()`;

export const CalendlyViewer = (props: ComponentProps<Props>) => {
  const {
    data: { username, height, trackConversion },
    mode,
    openPanel,
  } = props;
  const calendlyComponentId = `${props.entityId}-calendly-calendar`;

  const handleSetupButtonClick = () => {
    openPanel?.('appSettings');
  };

  return (
    <>
      {mode.type === 'edit' && <div style={{ height: '100%', position: 'absolute', width: '100%' }} />}
      <Wrapper customHeight={height} configured={!!username} id={calendlyComponentId}>
        {!username && (
          <EmptyState>
            <img src={manifest.iconUrl} alt="logo" />
            <div className="empty-actions">
              <Button onClick={handleSetupButtonClick}>Set Up an Event</Button>
            </div>
          </EmptyState>
        )}
      </Wrapper>
      <Script
        mode={mode.type}
        externalScript={{
          scriptId: 'calendly-script',
          src: 'https://assets.calendly.com/assets/external/widget.js',
          onloadMethod: getCalendlyScript(calendlyComponentId, username, trackConversion.trackingEnabled),
          condition: !!username,
        }}
        dependencies={[username, height]}
      />
    </>
  );
};
