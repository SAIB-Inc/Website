import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

interface TechnologiesRowProps {
    items: {
        name: string;
        gatsbyImageData: IGatsbyImageData;
    }[];
    direction?: "default" | "reverse";
}

const TechnologiesRow: React.FC<TechnologiesRowProps> = ({ items, direction = "default" }) => {
    const getRowDirection = () => (direction === "reverse" ? "animate-scroll-reverse" : "animate-scroll");

    return (
        <div className={`flex items-center justify-center w-max ${getRowDirection()}`}>
            {items.map((datum, index) => {
                const image = datum.gatsbyImageData?.images?.fallback?.src;
                return (
                    <div key={index} className="mx-4">
                        <img
                            src={image}
                            alt={datum.name}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default TechnologiesRow;
