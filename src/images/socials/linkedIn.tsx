import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const LinkedIn = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5577 12.8592H10.9321V7.34626C10.9321 6.64772 9.57463 6.24674 8.91696 6.54812C8.81224 6.59537 8.10604 7.29007 8.10604 7.34626V12.8592H5.48047V4.43974H7.90427L8.00388 5.44093C8.8148 3.86635 11.7392 3.79867 12.8617 5.02973C13.0456 5.2315 13.5577 6.16245 13.5577 6.34379V12.8592Z" fill="#6F03E0" />
                <path d="M3.66366 4.43945H1.03809V12.8589H3.66366V4.43945Z" fill="#6F03E0" />
                <path d="M1.78613 0.269974C4.41809 -0.520507 4.48066 3.29526 2.37101 3.22758C0.544857 3.16883 0.330315 0.706718 1.78613 0.269974Z" fill="#6F03E0" />
            </svg>
        </SvgIcon>
    )
}

export default LinkedIn