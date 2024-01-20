import { Typography } from "@mui/material";
import React from "react";

const Text = (props: any) => {
  const { children, variant, color, component, sx, ...rest } = props;
  return (
    <Typography variant={variant} color={color} component={component} sx={sx}>
      {children}{" "}
    </Typography>
  );
};

export default Text;
