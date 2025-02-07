import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";
import React from "react";

const DApp = (props: SvgIconProps) => {
    const { sx = {}, ...otherProps } = props;
    const theme = useTheme();

    return (
        <SvgIcon
            {...otherProps}
            sx={{
                color: theme.palette.secondary.main,
                fontSize: 28,
                ...sx
            }}
        >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="29.2539" height="29.2539" rx="4" fill="#6F03E0" />
                <rect x="3.76123" y="3.76074" width="19.224" height="4.59704" rx="1" fill="#EBE9F8" />
                <rect x="3.76123" y="11.7017" width="8.77617" height="4.59704" rx="1" fill="#EBE9F8" />
                <rect x="3.76123" y="19.6416" width="8.77617" height="5.01496" rx="1" fill="#EBE9F8" />
                <rect x="16.2986" y="11.7017" width="6.68661" height="12.9553" rx="1" fill="#EBE9F8" />
            </svg>
        </SvgIcon>
    );
};

export default DApp;