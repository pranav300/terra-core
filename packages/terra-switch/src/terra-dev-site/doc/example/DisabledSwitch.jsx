import React from 'react';
import Switch from 'terra-switch';

const DisabledSwitch = () => (
  <Switch
    id="disabledSwitch"
    labelId="label2"
    checked
    label="Label"
    disabled
  />
);

export default DisabledSwitch;