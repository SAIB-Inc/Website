import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const FuturaLogo = (props: SvgIconProps) => {
    const { sx = {}, ...otherProps } = props;

    return (
        <SvgIcon
            {...otherProps}
            viewBox="0 0 65 91"
            sx={{
                ...sx
            }}
        >
            <g clipPath="url(#clip0_futura)">
                <path d="M65.0043 8.92334V1.96286L59.7962 0L35.8109 9.04399V37.6191C32.527 38.8534 29.2386 40.0877 25.9547 41.3221C25.9547 32.6818 25.9593 24.0461 25.9638 15.4059C24.7939 14.965 23.624 14.5242 22.4495 14.0834L16.0128 16.5103V45.0854L0 51.1178V57.9437L5.38428 59.9762L14.7887 56.431V76.505L0 82.078V89.0524C1.73001 89.7067 3.46003 90.3563 5.19004 91.0106C12.1146 88.4028 19.0347 85.7903 25.9593 83.1824V52.2222L35.8063 48.5099V75.8739L40.5763 77.6697L45.7573 75.7161V44.7559L61.0338 38.9973V31.9347L55.8031 29.9626L45.7573 33.8697V16.1808" fill="#FFF8E0"/>
                <path d="M65.0037 58.8999V68.459L56.8415 71.5355L55.0527 70.8626V61.3221L63.2421 58.2363L65.0037 58.8999Z" fill="#FFF8E0"/>
            </g>
            <defs>
                <clipPath id="clip0_futura">
                    <rect width="65.0043" height="91.006" fill="white"/>
                </clipPath>
            </defs>
        </SvgIcon>
    );
};

export default FuturaLogo;
