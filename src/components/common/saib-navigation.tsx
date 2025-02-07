import React from "react";
import { Box, useTheme } from "@mui/material";

interface SaibNavigationProps {
    buttonCount: number;
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
}

const SaibNavigation: React.FC<SaibNavigationProps> = ({ buttonCount, currentIndex, setCurrentIndex }) => {
    const theme = useTheme();

    return (
        <Box 
            component="div"
            sx={{
                backgroundColor: theme.palette.gradient.main
            }}
            className="!flex !gap-4 !h-full !w-full !py-4 !px-6 !rounded-3xl !transition-all sm:!gap-5 lg:!gap-2 lg:!flex-col lg:!bg-inherit lg:!p-0">
            {Array.from({ length: buttonCount }, (_, idx) => (
                <Box
                    key={idx}
                    component="div"
                    sx={{
                        width: 10,
                        height: 10,
                        backgroundColor:
                            currentIndex === idx
                                ? theme.palette.carouselButtons.active
                                : theme.palette.carouselButtons.inactive,
                        borderRadius: 6,
                        cursor: "pointer",
                    }}
                    className={`!aspect-square flex-grow ${(currentIndex === idx)? "": "max-lg:grow-0 duration-100"}`}
                    onClick={() => setCurrentIndex(idx)}
                />
            ))}
        </Box>
    );
};

export default SaibNavigation;