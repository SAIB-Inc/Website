import React from "react";
import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";

const Command = (props: SvgIconProps) => {
    const { sx = {}, ...otherProps } = props;
    const theme = useTheme();

    return (
        <SvgIcon
            {...otherProps}
            sx={{
                color: theme.palette.secondary.main,
                ...sx
            }}
        >
            <svg width="71" height="72" viewBox="0 0 71 72" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.2816 0.0324707C56.4772 1.51234 68.2434 22.3314 58.7969 39.518C49.3167 56.7719 24.8095 58.0163 13.6149 41.8387C1.88239 24.8875 13.1443 1.61324 33.4829 0.167004L33.7182 0.0324707H37.3153H37.2816ZM39.2315 14.8648H34.6595L31.7347 38.4417H36.3067L39.2315 14.8648ZM25.3138 16.4119L16.9094 24.7866C16.069 25.9638 16.0354 27.3427 16.9094 28.5199L25.4147 36.8946L28.4066 33.8003L21.3469 26.7037L28.4066 19.5062L25.3138 16.4119ZM45.5516 16.4119L42.5596 19.5062L49.6193 26.6028L42.5596 33.8003L45.6524 36.8946L54.0568 28.5199C54.8972 27.3427 54.9308 25.9638 54.0568 24.7866L45.5516 16.4119Z"/>
                <path d="M0 56.3347L9.9844 46.6146C11.3627 48.6326 13.2453 50.4825 15.1951 52.0296C18.7922 54.8884 22.9944 57.0073 27.4655 58.1509L14.59 71.0324L10.4214 60.5725L0.0336175 56.4692V56.3347H0Z"/>
                <path d="M70.9663 56.4692L60.5784 60.5725L56.4099 71.0324L43.5344 58.2181C48.0391 56.9401 52.1404 54.9557 55.8048 52.0296C57.7546 50.4825 59.6372 48.6663 61.0155 46.6146L70.9999 56.4692H70.9663Z"/>
            </svg>
        </SvgIcon>
    );
};

export default Command;