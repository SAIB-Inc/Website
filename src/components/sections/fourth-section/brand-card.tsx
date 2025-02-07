import React from "react";
import { Card, CardContent, CardProps, CardActions, Typography, SvgIconProps, IconButton } from "@mui/material";
import { SxProps } from "@mui/system";

interface BrandCardProps extends CardProps {
    brand: string;
    name: string;
    description: string;
    background?: string;
    socials: {
        icon: React.ComponentType<SvgIconProps>;
        link: string;
    }[];
    sx?: SxProps;
    bordered?: boolean;
    iconSize?: number;
}


const BrandCard: React.FC<BrandCardProps> = ({
    brand,
    name,
    description,
    background,
    socials,
    sx = {},
    bordered = true,
    iconSize = 22,
    ...rest
}) => {
    return (
        <Card
            sx={{
                borderRadius: "24px",
                paddingX: 5,
                paddingY: 5,
                background: (theme) => background || theme.palette.gradient.dark,
                color: "white",
                flexGrow: 1,
                width: "100%",
                height: "100%",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 4,
                ...sx,
            }}
            {...rest}
        >
            <CardContent sx={{ padding: "16px 16px 0 16px" }}>
                <div className="mt-10">
                    <div>
                        <img
                            src={brand}
                            alt={name}
                            style={{ height: "36px" }}
                        />
                    </div>
                    <div>
                        <Typography
                            component="p"
                            variant="body1"
                            className="!mt-5"
                        >
                            {description}
                        </Typography>
                    </div>
                </div>
            </CardContent>
            <CardActions sx={{ gap: 0.5, paddingX: 2 }}>
                {socials.map((datum, index) => (
                    <IconButton
                        key={index}
                        href={datum.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            border: bordered ? "1px solid white" : "none",
                            height: 40,
                            width: 40,
                        }}
                    >
                        {React.createElement(datum.icon, { sx: { fontSize: iconSize, color: "white" } })}
                    </IconButton>
                ))}
            </CardActions>
        </Card>
    );
};

export default BrandCard;