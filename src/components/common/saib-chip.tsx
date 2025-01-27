import { Box, SvgIconProps, Typography, useTheme } from "@mui/material";
import React from "react";

interface SaibChipProps {
    content: string;
    icon?: React.ComponentType<SvgIconProps>;
    className?: string;
}

const SaibChip: React.FC<SaibChipProps> = ({ icon, content, className }) => {
    const theme = useTheme();
    
    return (
        <Box
            component="div"
            className={className}
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
            }}
        >
            {icon && (
                <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
                    {React.createElement(icon)}
                </Box>
            )}
            <Typography component="p" variant="subtitle2">
                {content}
            </Typography>
        </Box>
    );
};

export default SaibChip;
