import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";
import React from "react";

const Lightning = (props: SvgIconProps) => {
    const { sx = {}, ...otherProps } = props;
    const theme = useTheme();

    return (
        <SvgIcon
            {...otherProps}
            sx={{
                color: theme.palette.secondary.dark,
                fontSize: 69,
                ...sx
            }}
        >
            <svg width="69" height="55" viewBox="0 0 69 55" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M68.3521 52.5784L43.654 27.5839L31.3405 36.3639L0.440514 0.463016L26.324 54.0949L42.7146 38.1973L68.3521 52.5784Z"/>
            </svg>
        </SvgIcon>
    );
};

export default Lightning;