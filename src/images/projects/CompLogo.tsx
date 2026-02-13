import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const CompLogo = (props: SvgIconProps) => {
    const { sx = {}, ...otherProps } = props;

    return (
        <SvgIcon
            {...otherProps}
            viewBox="0 0 89 89"
            sx={{
                ...sx
            }}
        >
            <g clipPath="url(#clip0_comp)">
                <path d="M36.3877 6.60889V82.2057H52.389V21.5004L36.3877 6.60889Z" fill="#FF8F71"/>
                <path d="M52.3885 31.8052H25.3146L0 58.2084L25.3146 82.1932H52.3885L27.304 58.3734L52.3885 31.8052Z" fill="#FFD8CC"/>
                <path d="M63.4611 6.60889H36.3027L61.5632 30.5796L36.3872 57.0012H63.4611L88.8146 30.5796L63.4611 6.60889Z" fill="#FFD8CC"/>
            </g>
            <defs>
                <clipPath id="clip0_comp">
                    <rect width="88.8149" height="88.8149" fill="white"/>
                </clipPath>
            </defs>
        </SvgIcon>
    );
};

export default CompLogo;
