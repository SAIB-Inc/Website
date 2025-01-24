import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const Lightning = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props} sx={{ fontSize: 69 }}>
            <svg width="69" height="55" viewBox="0 0 69 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M68.3521 52.5784L43.654 27.5839L31.3405 36.3639L0.440514 0.463016L26.324 54.0949L42.7146 38.1973L68.3521 52.5784Z" fill="#7660E3" />
            </svg>
        </SvgIcon>
    )
}

export default Lightning