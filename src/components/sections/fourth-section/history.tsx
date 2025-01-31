import React from "react";
import { Card, CardContent, Typography, useTheme } from "@mui/material";
import { CardanoFoundation, DcSpark } from "../../../images/brands";

const History: React.FC = () => {
    const historyData = [
        {
            brand: CardanoFoundation,
            name: "Cardano Foundation",
            description: "Swiss foundation supporting evolution of the Cardano cryptocurrency."
        },
        {
            brand: DcSpark,
            name: "DC Spark",
            description: "Building high-quality crypto products that unify the user experience within blockchain ecosystems."
        }
    ];

    const theme = useTheme();

    return (
        <div className="text-center py-25">
            <div>
                <Typography
                    component="h6"
                    variant="h6"
                    color="secondary"
                >
                    Who we previously worked with...
                </Typography>
                <Typography
                    component="h3"
                    variant="h3"
                >
                    Our History
                </Typography>
            </div>
            <div className="flex mt-14 gap-10">
                {historyData.map((datum, index) => (
                    <Card
                        key={index}
                        sx={{
                            borderRadius: "24px",
                            padding: "33px 25px",
                            background: theme.palette.gradient.dark,
                            flexGrow: 1,
                            width: 560,
                            gap: 4,
                            boxShadow: (theme) => theme.shadows[2],
                        }}
                    >
                        <CardContent sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 5
                        }}>
                            <div>
                                <img
                                    src={datum.brand}
                                    alt={datum.name}
                                />
                            </div>
                            <div className="max-w-90">
                                <Typography 
                                    component="p" 
                                    variant="body1" 
                                >
                                    {datum.description}
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default History;