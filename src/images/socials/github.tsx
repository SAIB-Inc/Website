import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";
import React from "react";

const Github = (props: SvgIconProps) => {
    const { sx = {}, ...otherProps } = props;
    const theme = useTheme();

    return (
        <SvgIcon
            {...otherProps}
            sx={{
                color: theme.palette.secondary.main,
                fontSize: "16px",
                ...sx
            }}
        >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.697 10.6776C11.187 11.1558 11.4176 11.7587 11.4622 12.4076C11.5347 13.4395 11.4031 14.5392 11.4622 15.5787L11.5528 15.7702L11.9016 15.9267L5.20606 16L5.55007 15.837C5.62612 15.7702 5.68164 15.6641 5.69975 15.5711C5.75648 15.2669 5.72872 14.5961 5.71061 14.2656C5.70096 14.096 5.63577 13.9187 5.66836 13.7382C4.5796 13.9297 3.34961 13.9176 2.47087 13.2283C1.6718 12.6024 1.62593 11.6591 0.803927 11.0212C0.628904 10.8855 -0.00480079 10.5725 2.74408e-05 10.3646C0.00847684 10.0276 0.976536 10.2399 1.17932 10.3165C2.17032 10.6885 2.30068 11.5212 3.05871 12.0027C3.86382 12.5159 4.79808 12.4667 5.66836 12.1154C5.82407 11.5978 5.97254 11.101 6.43243 10.7301C6.09687 10.636 5.72872 10.6218 5.37988 10.555C3.23252 10.1436 1.76112 9.11826 1.30486 7.10374C0.965673 5.60462 1.09845 3.95449 2.32482 2.81209C2.2874 2.56479 2.17394 2.33609 2.1341 2.08661C2.06047 1.61827 2.11479 1.11163 2.22946 0.650948C2.25239 0.557937 2.40086 0.0841268 2.45156 0.050205C2.6809 -0.100802 3.52705 0.128991 3.79863 0.213248C4.477 0.423344 5.07208 0.783353 5.68647 1.09084C7.57793 0.634535 9.58406 0.654231 11.4767 1.08865C12.1128 0.753808 12.7405 0.379574 13.4491 0.176044C13.6736 0.111483 14.5451 -0.0942361 14.6971 0.067713C14.743 0.116954 14.8818 0.582011 14.906 0.680493C15.0774 1.38628 15.0701 2.09317 14.8058 2.77817C16.0551 3.96762 16.1867 5.59368 15.8233 7.13986C15.4153 8.87643 14.2481 9.91925 12.3844 10.4018C11.8413 10.543 11.2595 10.6404 10.6958 10.6754L10.697 10.6776Z"/>
            </svg>
        </SvgIcon>
    )
}

export default Github