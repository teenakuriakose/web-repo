import * as React from 'react';
import { default as CoreButton } from "@mui/material/Button";

const Button = (props: any) => {
  const { ...rest } = props;
  return (
    <CoreButton variant="contained" {...rest}>
      Hello world
    </CoreButton>
  );
};

export default Button;