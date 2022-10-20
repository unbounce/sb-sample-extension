import React from 'react';
import { Button } from 'smart-builder-components';
import { getAfterFormSubmitScript, Script } from 'smart-builder-sdk';
import type { ComponentProps } from 'unbounce-smart-builder-sdk-types';

import manifest from '../../manifest';
import { EmptyActions, EmptyState, StyledImage, Wrapper } from '../styled';
import { Props } from '../types';

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
            <StyledImage src={manifest.iconUrl} alt="logo" />
            <EmptyActions>
              <Button onClick={handleSetupButtonClick}>Set Up an Event</Button>
            </EmptyActions>
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
