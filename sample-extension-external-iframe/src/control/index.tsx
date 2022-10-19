import React, { useState } from 'react';
import { Button, HelpIcon, Toggle, Tooltip } from 'smart-builder-components';
import { colors, fontSize, spacing } from 'smart-builder-sdk';
import { Props } from 'src/types';
import styled from 'styled-components';
import { ComponentProps } from 'unbounce-smart-builder-sdk-types';

import { Input } from './input';

const CALENDLY_REGEX = /^[-a-zA-Z0-9()@:%_+~#?&/=]*$/;

const Container = styled.div`
  display: grid;
  grid-gap: 16px;
`;

const StyledInputContainer = styled.div`
  max-width: 60%;
  display: flex;
  align-items: end;
  color: #303030;
`;

const StyledLabelConversion = styled.label`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  font: 400 16px Source Sans Pro;
  color: #303030;
`;

const StyledToggle = styled(Toggle)`
  transform: scale(0.75);
`;

const StyledInputLabelWithTooltipWrapper = styled.div`
  display: flex;
  margin-bottom: -16px;
  font-size: 14px;
  color: #808080;
  span {
    z-index: 13;
    width: 16px;
  }
`;

export const Error = styled.p`
  margin-top: ${spacing.xs};
  color: ${colors.radicalRed};
  font-size: ${fontSize.iconText};
  margin-bottom: 0px;
  overflow-wrap: anywhere;
`;

const getCalendlyEvent = (newValue: string) => {
  try {
    const { hostname, pathname, search } = new URL(newValue);
    if (hostname !== 'calendly.com' || pathname === '') {
      return null;
    } else {
      return `${pathname.replace(/^\/+/g, '')}${search}`;
    }
  } catch {
    // It wasn't a URL
    return CALENDLY_REGEX.test(newValue) ? newValue : null;
  }
};

export const CalendlyControlComponent = ({
  data: { username, height, trackConversion },
  dispatch,
  closePanel,
}: ComponentProps<Props, { closePanel: () => void }>) => {
  const [localUsername, setLocalUsername] = useState<string>(username);
  const [localHeight, setLocalHeight] = useState<number>(height);
  const [validUsername, setValidUsername] = useState(true);
  const [validHeight, setValidHeight] = useState(true);

  const dirty = localUsername !== username || localHeight !== height;

  const allowApply = validUsername && validHeight && dirty;

  const updateCalendlySettings = () => {
    const eventName = getCalendlyEvent(localUsername);
    if (eventName) {
      setValidUsername(true);
      dispatch((api) => {
        api.get('username').set(eventName);
        api.get('height').set(localHeight);
      });
      closePanel();
    } else {
      setValidUsername(false);
    }
  };

  const toggleTracking = (newVal: boolean) => {
    dispatch((api: any) => api.get('trackConversion').toggleTrackingEnabled(newVal));
  };

  const handleLocalUsername = (newValue: string) => {
    setValidUsername(true);
    setLocalUsername(newValue);
  };

  const handleLocalHeight = (newValue: string | number) => {
    if (newValue && !isNaN(Number(newValue))) {
      setValidHeight(true);
    } else {
      setValidHeight(false);
    }
    setLocalHeight(newValue as number);
  };

  return (
    <Container>
      {!validHeight && <Error>Invalid Height.</Error>}
      <StyledInputLabelWithTooltipWrapper>
        Username / Event
        <span style={{ width: '8px' }} />
        <Tooltip trigger={<HelpIcon />} yAlign="bottom" xAlign="center" width={264}>
          Calendly username or URL <br />
          <code>https://calendly.com/username</code>
          <br />
          For specific event enter <br />
          <code>username/event-name</code>
        </Tooltip>
      </StyledInputLabelWithTooltipWrapper>
      <Input
        label={''}
        type="text"
        value={localUsername}
        placeholder="steve-jones/30min"
        setValue={(value) => handleLocalUsername(value.toString())}
      />
      {!validUsername && (
        <Error>
          <b>Invalid Username / Event URL.</b>
        </Error>
      )}
      <StyledInputContainer>
        <Input type="number" value={localHeight} label="Height" setValue={handleLocalHeight} /> px
      </StyledInputContainer>
      <StyledLabelConversion htmlFor="paypal-conversion-tracking">
        Conversion Tracking
        <StyledToggle
          value={trackConversion.trackingEnabled}
          onClick={() => toggleTracking(!trackConversion.trackingEnabled)}
          data-testid="paypal-conversion-tracking"
        />
      </StyledLabelConversion>
      <Button onClick={updateCalendlySettings} disabled={!allowApply}>
        Apply
      </Button>
    </Container>
  );
};
