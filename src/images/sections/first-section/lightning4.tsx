import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";
import React from "react";

const LightningFour = (props: SvgIconProps) => {
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
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.9246 16.5001L0.620311 48.0001L47.4248 5.96811e-05L40.9246 16.5001Z" fill="#7660E3" />
            </svg>
        </SvgIcon>
    );
};

export default LightningFour;