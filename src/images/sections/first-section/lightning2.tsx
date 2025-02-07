import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";
import React from "react";

const LightningTwo = (props: SvgIconProps) => {
    const { sx = {}, ...otherProps } = props;
    const theme = useTheme();

    return (
        <SvgIcon
            {...otherProps}
            sx={{
                color: theme.palette.secondary.dark,
                fontSize: 40,
                ...sx
            }}
        >
            <svg width="30" height="36" viewBox="0 0 30 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M-0.000235426 35.8887L10.0768 19.6896L21 17.5L29.7022 0.142011L22.5 25.1965L11.8482 25.1965L-0.000235426 35.8887Z"/>
            </svg>
        </SvgIcon>
    );
};

export default LightningTwo;