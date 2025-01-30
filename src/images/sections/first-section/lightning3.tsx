import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";
import React from "react";

const LightningThree = (props: SvgIconProps) => {
    const { sx = {}, ...otherProps } = props;
    const theme = useTheme();

    return (
        <SvgIcon
            {...otherProps}
            sx={{
                color: theme.palette.secondary.dark,
                fontSize: 40,
                ...sx
            }}
        >
            <svg width="283" height="252" viewBox="0 0 283 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M239.992 182.527L248.72 191.578L274.244 217.218L243.643 195.084L239.52 211.366L141.87 118.58L53.5114 89.3897L43.1303 51.3101L56.8546 87.7133L144.538 115.417L237.784 205.375L239.992 182.527Z" fill="#7660E3" />
                <path d="M231.551 171.799L232.375 189.509L223.287 162.568L231.551 171.799Z" fill="#7660E3" />
                <path d="M11.8468 30.2085L32.3431 58.0382L22.4176 39.1248L11.8468 30.2085Z" fill="#7660E3" />
            </svg>
        </SvgIcon>
    );
};

export default LightningThree;