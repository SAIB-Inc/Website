import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const Sustainable = (props: SvgIconProps) => {
    const { sx = {}, ...otherProps } = props;

    return (
        <SvgIcon
            {...otherProps}
            sx={{
                ...sx
            }}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 20C9.24404 20.0053 7.55023 19.3505 6.2545 18.1654C4.95876 16.9803 4.15575 15.3515 4.00471 13.6021C3.85368 11.8527 4.36567 10.1104 5.43913 8.72074C6.51259 7.33112 8.06911 6.3957 9.79998 6.1C15.5 5 17 4.48 19 2C20 4 21 6.18 21 10C21 15.5 16.22 20 11 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.00003 21C2.00003 18 3.85003 15.64 7.08003 15C9.50003 14.52 12 13 13 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </SvgIcon>
    );
};

export default Sustainable;
