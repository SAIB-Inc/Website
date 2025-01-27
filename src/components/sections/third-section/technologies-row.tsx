import React from "react";

interface TechnologiesRowProps {
    items: {
        node: {
            name: string;
            childImageSharp?: {
                gatsbyImageData: any;
            };
        };
    }[];
    direction?: "default" | "reverse";
}

const TechnologiesRow: React.FC<TechnologiesRowProps> = ({ items, direction = "default" }) => {
    const getRowDirection = () => (direction === "reverse" ? "animate-scroll-reverse" : "animate-scroll");

    return (
        <div className={`flex items-center justify-center w-max whitespace-nowrap ${getRowDirection()}`}>
            {items.map((datum, index) => {
                const image = datum.node.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
                if (!image) return null;

                return (
                    <div key={index} className="mx-4">
                        <img
                            src={image}
                            alt={datum.node.name}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default TechnologiesRow;
