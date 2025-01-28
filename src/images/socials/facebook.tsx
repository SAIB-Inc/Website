import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const Facebook = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props} sx={{fontSize: "16px", fill:"white"}}>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4237 0.42886V3.43626C10.5361 3.48224 8.92581 3.223 8.24898 3.89216C8.19918 3.94069 7.78925 4.69159 7.78925 4.73884V7.64536H11.2219L10.6166 11.2542H7.78925V19.6737H3.95305V11.2542H1.02482L0.722168 10.9541V7.64663H3.95305V3.73764C3.95305 3.40689 4.52133 2.27034 4.76141 1.93448C6.32067 -0.235196 9.06373 0.10194 11.4237 0.430136V0.42886Z" fill="#6F03E0" />
            </svg>
        </SvgIcon>
    )
}

export default Facebook