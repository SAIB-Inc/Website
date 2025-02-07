import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";
import React from "react";

const Nft = (props: SvgIconProps) => {
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
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.16347 11.4386C0.16347 8.92325 2.20254 6.88417 4.71787 6.88417H23.5619C26.0773 6.88417 28.1163 8.92325 28.1163 11.4386V30.2826C28.1163 32.798 26.0773 34.837 23.5619 34.837H7.46996C3.4347 34.837 0.16347 31.5658 0.16347 27.5306V11.4386Z" fill="#6F03E0" stroke="#EBE9F8" strokeWidth="0.32694" />
                <rect x="4.57708" y="1.62396" width="28.7993" height="28.7993" rx="3.99156" fill="#6F03E0" stroke="#EBE9F8" strokeWidth="2.75209" />
                <path d="M28.2795 26.4422H8.74414C8.74414 26.4422 12.8373 15.6512 18.2328 15.4652C23.6283 15.2791 28.2795 26.4422 28.2795 26.4422Z" fill="#EBE9F8" stroke="#EBE9F8" strokeWidth="0.393156" />
                <circle cx="24.931" cy="10.4417" r="3.52445" fill="#EBE9F8" stroke="#EBE9F8" strokeWidth="0.393156" />
            </svg>
        </SvgIcon>
    );
};

export default Nft;