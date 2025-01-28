import { Card, CardContent, CardProps, CardActions, Typography, Link, SvgIconProps } from "@mui/material";
import { SxProps } from "@mui/system";
import { OpenInNew } from "@mui/icons-material";
import React from "react";

interface SaibCardProps extends CardProps {
    brand: string;
    name: string;
    description: string;
    background?: string;
    socials: {
        icon: React.ComponentType<SvgIconProps>,
        link: string
    }[];
    sx?: SxProps;
}

const SaibCard: React.FC<SaibCardProps> = ({
    brand,
    name,
    description,
    background,
    socials,
    sx = {},
    ...rest
}) => {
    return (
        <Card
            sx={{
                borderRadius: "24px",
                padding: "33px 25px",
                background: (theme) => background || theme.palette.gradient.dark,
                color: "white",
                flexGrow: 1,
                width: 560,
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 4,
                boxShadow: (theme) => theme.shadows[2],
                ...sx,
            }}
            {...rest}
        >
            <CardContent sx={{ padding: "16px 16px 0 16px" }}>
                <div className="w-[135px] h-[36px]">
                    <img
                        src={brand}
                        alt={name}
                        style={{ width: "135px", height: "auto" }}
                    />
                </div>
                <div className="mt-10">
                    <Typography component="h3" variant="h3">
                        {name}
                    </Typography>
                    <Typography component="p" variant="body1" className="!mt-[20px]">
                        {description}
                    </Typography>
                </div>
            </CardContent>
            <CardActions>
                {socials.map((datum, index) => (
                    <Link key={index} href={datum.link} target="_blank" rel="noopener noreferrer">
                        {React.createElement(datum.icon, { sx: { fontSize: 40 } })}
                    </Link>
                ))}
            </CardActions>
        </Card>
    );
};

export default SaibCard;