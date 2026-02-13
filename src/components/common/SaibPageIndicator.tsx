import { useTheme } from "@mui/material/styles";
import React from "react";

interface SaibPageIndicatorProps {
    count: number;
    activeIndex: number;
    onSelect: (index: number) => void;
    className?: string;
}

const SaibPageIndicator: React.FC<SaibPageIndicatorProps> = ({ count, activeIndex, onSelect, className = "" }) => {
    const theme = useTheme();

    return (
        <div className={`flex items-center justify-center gap-1.25 w-full sm:w-auto ${className}`}>
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="max-sm:h-[4.5px] h-2.75 transition-all duration-300 cursor-pointer flex-1 sm:flex-none sm:w-20"
                    style={{
                        backgroundColor: index === activeIndex ? theme.palette.primary.main : theme.palette.primary.light,
                        ...(index === 0 ? { clipPath: "polygon(8px 0, 100% 0, 100% 100%, 0 100%)" } : {}),
                    }}
                    onClick={() => onSelect(index)}
                />
            ))}
        </div>
    );
};

export default SaibPageIndicator;
