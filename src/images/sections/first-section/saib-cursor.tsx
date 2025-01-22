import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const SaibCursor = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_dd_1553_4468)">
                    <path d="M14.0142 13.7216C12.0068 13.6022 10.8398 15.9517 12.1478 17.4792L28.8686 37.0051C30.3168 38.6962 33.0814 37.5209 32.8685 35.3047L32.0079 26.3462C31.9249 25.4816 32.3404 24.645 33.0795 24.1888L40.7378 19.4615C42.6324 18.292 41.8984 15.379 39.6759 15.2469L14.0142 13.7216Z" fill="#6F03E0" />
                </g>
                <defs>
                    <filter id="filter0_dd_1553_4468" x="-9" y="-7" width="66.8726" height="64.481" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1.5" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1553_4468" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect2_dropShadow_1553_4468" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend mode="normal" in2="effect1_dropShadow_1553_4468" result="effect2_dropShadow_1553_4468" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1553_4468" result="shape" />
                    </filter>
                </defs>
            </svg>
        </SvgIcon>
    )
}

export default SaibCursor