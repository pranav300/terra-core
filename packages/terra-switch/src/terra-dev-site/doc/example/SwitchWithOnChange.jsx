import React, { useState } from 'react';
import Switch from 'terra-switch';

const SwitchWithOnChange = () => {
  const [value, setValue] = useState(true); // makes switch on by default
  return (
    <Switch
      switchId="defaultSwitch1"
      isChecked={value}
      labelText="Label"
      onChange={setValue}
    />
  );
};

export default SwitchWithOnChange;