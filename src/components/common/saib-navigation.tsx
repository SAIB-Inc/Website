import { Box, useTheme } from "@mui/material";
import React from "react";

interface SaibNavigationProps {
    buttonCount: number;
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
}

const SaibNavigation: React.FC<SaibNavigationProps> = ({ buttonCount, currentIndex, setCurrentIndex }) => {
    const theme = useTheme();

    return (
        <div className="flex flex-col gap-2 h-full">
            {Array.from({ length: buttonCount }, (_, idx) => (
                <Box
                    key={idx}
                    component="div"
                    sx={{
                        width: 10,
                        flexGrow: 1,
                        backgroundColor:
                            currentIndex === idx
                                ? theme.palette.carouselButtons.active
                                : theme.palette.carouselButtons.inactive,
                        borderRadius: 6,
                        cursor: "pointer",
                    }}
                    onClick={() => setCurrentIndex(idx)}
                />
            ))}
        </div>
    );
};

export default SaibNavigation;