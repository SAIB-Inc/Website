import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const SaibIcon = (props: SvgIconProps) => {
    const { sx = {}, ...otherProps } = props;

    return (
        <SvgIcon
            {...otherProps}
            viewBox="0 0 78 92"
            sx={{
                ...sx
            }}
        >
            <g clipPath="url(#clip0_2165_15970)">
                <path d="M62.1211 16.2801L0 49.1722L1.37027 20.0614L38.8676 0L62.1211 16.2801Z" fill="currentColor"/>
                <path d="M29.5293 61.7936L0 49.1795L37.5248 29.3057L29.5293 61.7936Z" fill="currentColor" opacity="0.7"/>
                <path d="M15.0195 74.7973L77.1406 41.8979C76.6838 51.6063 76.2271 61.3099 75.7703 71.0087L38.2593 91.1134L15.0195 74.7973Z" fill="currentColor"/>
                <path d="M47.6088 29.2837L77.138 41.8979L39.6133 61.7717L47.6088 29.2837Z" fill="currentColor" opacity="0.7"/>
            </g>
            <defs>
                <clipPath id="clip0_2165_15970">
                    <rect width="77.1392" height="91.0775" fill="white"/>
                </clipPath>
            </defs>
        </SvgIcon>
    );
};

export default SaibIcon;
