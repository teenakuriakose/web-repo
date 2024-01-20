import * as React from 'react';
import { default as CoreButton } from "@mui/material/Button";

const Button = (props: any) => {
  const { children, ...rest } = props;
  return (
    <CoreButton variant="contained" {...rest}>
      {children}
    </CoreButton>
  );
};

export default Button;