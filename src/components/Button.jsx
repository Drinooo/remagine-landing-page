import { Button } from "@material-tailwind/react";
import React from "react";

export const AccessButton = (props) => {
  const {size="lg", variant="filled", children, className} = props;
  return (
    <Button size={size} variant={variant} className={className}>
      {children}
    </Button>
  );
};
