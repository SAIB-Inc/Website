import { Box, SvgIconProps, Typography, useTheme, BoxProps } from "@mui/material";
import React from "react";

interface SaibChipProps extends BoxProps {
    content: string;
    fontSize?: string | number;
    fontWeight?: string | number;
    childClassName?: string;
    icon?: React.ComponentType<SvgIconProps>;
}

const SaibChip: React.FC<SaibChipProps> = ({ icon, content, sx, fontSize, fontWeight, childClassName, ...otherProps }) => {
    const theme = useTheme();

    return (
        <Box
            component="div"
            sx={{
                backgroundColor: theme.palette.primary.main,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 24px",
                border: "1px solid",
                borderColor: theme.palette.primary.dark,
                borderRadius: "9999px",
                width: "max-content",
                gap: 1,
                ...sx,
            }}
            {...otherProps}
        >
            {icon && (
                <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
                    {React.createElement(icon)}
                </Box>
            )}
            <Typography
                component="p"
                variant="subtitle2"
                sx={{ fontSize: fontSize, fontWeight: fontWeight }}
                className={childClassName}
            >
                {content}
            </Typography>
        </Box>
    );
};

export default SaibChip;
