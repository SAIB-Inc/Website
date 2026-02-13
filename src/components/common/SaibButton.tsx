import { Button, ButtonProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

type SaibButtonVariant = "primary" | "outlined" | "dark" | "text";

interface SaibButtonProps extends Omit<ButtonProps, "variant"> {
    variant?: SaibButtonVariant;
}

const SaibButton: React.FC<SaibButtonProps> = ({ variant = "primary", sx, children, ...props }) => {
    const theme = useTheme();

    const variantStyles: Record<SaibButtonVariant, object> = {
        primary: {
            bgcolor: "primary.main",
            color: "primary.contrastText",
        },
        outlined: {
            bgcolor: "transparent",
            border: `1px solid ${theme.palette.primary.contrastText}`,
            color: "primary.contrastText",
        },
        dark: {
            bgcolor: "primary.dark",
            color: "primary.contrastText",
        },
        text: {
            bgcolor: "transparent",
            color: "primary.dark",
            p: 0,
        },
    };

    return (
        <Button
            sx={{
                borderRadius: "6px",
                fontWeight: 500,
                textTransform: "none",
                ...variantStyles[variant],
                ...sx,
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default SaibButton;
