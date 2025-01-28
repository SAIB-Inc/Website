import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const SmartContract = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props} sx={{ fontSize: 28 }}>
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="27" height="27" rx="2.56602" fill="#6F03E0" />
                <rect x="3.47168" y="3.47168" width="17.7429" height="4.24286" rx="1.28301" fill="#EBE9F8" />
                <rect x="3.47168" y="10.7998" width="15.0429" height="4.24286" rx="1.28301" fill="#EBE9F8" />
                <rect x="3.47168" y="18.1287" width="8.1" height="4.62857" rx="1.28301" fill="#EBE9F8" />
            </svg>
        </SvgIcon>
    );
};

export default SmartContract;