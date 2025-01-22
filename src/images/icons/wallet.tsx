import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const Wallet = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="34" height="34" rx="3.51759" fill="#6F03E0" />
                <path d="M3.70117 6.34407C3.70117 5.468 4.41136 4.75781 5.28743 4.75781H28.5525C29.4286 4.75781 30.1388 5.468 30.1388 6.34407V8.98783H3.70117V6.34407Z" fill="#EBE9F8" />
                <path d="M30.1388 12.6895H3.70117C5.27184 13.2182 10.1105 17.977 28.6967 17.977C29.8984 17.977 30.1388 16.9195 30.1388 12.6895Z" fill="#EBE9F8" />
            </svg>
        </SvgIcon>
    )
}

export default Wallet