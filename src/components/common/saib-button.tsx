import React, { ReactNode } from "react";
import { Button, ButtonProps, useTheme } from "@mui/material";

type ButtonVariant = "outlined" | "contained" | "text";
type ButtonSize = "small" | "medium";

interface ButtonOnlyProps extends Omit<ButtonProps, 'href'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  href?: never;
  target?: never;
}

interface LinkButtonProps extends Omit<ButtonProps, 'href'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  href: string;
  target?: string;
}

type BaseButtonProps = ButtonOnlyProps | LinkButtonProps;

const SaibButton: React.FC<BaseButtonProps> = ({
  variant = "contained",
  size = "medium",
  children,
  href,
  target,
  ...props
}) => {
  const theme = useTheme();

  const commonStyles = {
    textTransform: "none" as const,
    borderRadius: "9999px",
    transition: "0.15s ease",
    boxShadow: theme.shadows[0]
  };

  const sizeStyles = {
    small: {
      width: 143,
      height: 39,
    },
    medium: {
      width: 163,
      height: 44,
      fontSize: theme.typography.h6.fontSize
    },
  };

  const variantStyles = {
    contained: {
      ...commonStyles,
      ...sizeStyles[size],
      backgroundColor: theme.palette.button.default,
      color: "white",
      "&:hover": {
        backgroundColor: theme.palette.button.hover,
        boxShadow: theme.shadows[0]
      },
    },
    outlined: {
      ...commonStyles,
      ...sizeStyles[size],
      borderColor: theme.palette.button.default,
      backgroundColor: "transparent",
      color: theme.palette.button.default,
      "&:hover": {
        borderColor: theme.palette.button.hover,
        color: theme.palette.button.hover,
      },
    },
    text: {
      ...commonStyles,
      ...sizeStyles[size],
    },
  };

  return (
    <Button
      component={href ? 'a' : 'button'}
      variant={variant}
      sx={variantStyles[variant]}
      href={href}
      target={target}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SaibButton;