import { Backdrop, Box, IconButton, Modal, SvgIconProps, Typography, useTheme } from "@mui/material";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import SaibChip from "../../common/saib-chip";
import { Close } from "@mui/icons-material";

interface TeamCardProps {
    items: {
        name: string;
        position: string;
        imageSrc: IGatsbyImageData;
        modalImageSrc: IGatsbyImageData;
        group: string;
        description?: string;
        skills?: string[];
        socials?: {
            label: string;
            icon: React.ComponentType<SvgIconProps>;
            link: string;
        }[];
        tags: React.ComponentType<SvgIconProps>[];
    };
}

interface TeamModalProps extends TeamCardProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ open, setOpen, items }) => {
    const theme = useTheme();

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal"
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    },
                },
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: "100%",
                    textAlign: "center",
                    p: 6
                }}
            >
                <Box
                    sx={{
                        background: `linear-gradient(to top left, 
                        ${theme.palette.gradient.teamCardGradient.main}, 
                        ${theme.palette.gradient.teamCardGradient.secondary}
                    )`
                    }}
                >
                    <div className="relative">
                        <div className="w-full">
                            <GatsbyImage
                                image={items.modalImageSrc}
                                alt={items.name}
                                loading="eager"
                            />
                        </div>
                        <div className="flex flex-col flex-wrap gap-3 h-20 w-10 absolute top-3 left-3 sm:gap-4 sm:top-6 sm:left-6 sm:h-40">
                            {items.tags.map((TagIcon, idx) => (
                                <TagIcon
                                    key={idx}
                                    sx={{ color: theme.palette.text.tertiary, fontSize: 40 }}
                                    className="max-sm:!text-sm"
                                />
                            ))}
                        </div>
                        <div className="absolute right-6 top-6">
                            <IconButton
                                onClick={() => {
                                    setOpen(false);
                                }}
                                sx={{
                                    p: 0
                                }}
                            >
                                <Close sx={{ color: theme.palette.secondary.light }} />
                            </IconButton>
                        </div>
                    </div>
                    <Box
                        className="!px-10 pb-10 !flex !flex-col items-center justify-between gap-10"
                    >
                        <div className="flex flex-col items-center justify-between">
                            <Typography
                                variant="h4"
                                component="h4"
                                color={theme.palette.info.main}
                                className="max-sm:!text-2xl"
                            >
                                {items.name}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                component="p"
                                color={theme.palette.text.tertiary}
                                className="max-sm:!text-base"
                            >
                                {items.position}
                            </Typography>
                        </div>
                        <div>
                            <Typography
                                variant="body2"
                                component="p"
                                color={theme.palette.text.tertiary}
                                className="max-sm:!text-xs"
                            >
                                {items.description}
                            </Typography>
                        </div>
                        <div className="flex flex-col justify-between items-between w-full md:flex-row">
                            <div className="text-left w-full">
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    color={theme.palette.text.tertiary}
                                >
                                    Skills
                                </Typography>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {items.skills?.map((skill, index) => (
                                        <SaibChip
                                            key={index}
                                            content={skill}
                                            sx={{
                                                color: theme.palette.text.tertiary,
                                                backgroundColor: "none",
                                            }}
                                            fontSize={theme.typography.button.fontSize}
                                            fontWeight={400}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="h-full w-full flex flex-col justify-start items-start mt-4 md:mt-0 md:w-40">
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    color={theme.palette.text.tertiary}
                                >
                                    Socials
                                </Typography>
                                <div className="space-x-2! mt-2">
                                    {items.socials?.map((social, idx) => (
                                        <IconButton
                                            key={idx}
                                            href={social.link}
                                            aria-label={social.label}
                                            target="_blank"
                                            sx={{
                                                border: `1px solid ${theme.palette.text.tertiary}`,
                                                height: 32,
                                                width: 32,
                                                boxShadow: theme.shadows[0],
                                                "&:hover": { borderColor: theme.palette.button.hover },
                                            }}
                                        >
                                            <social.icon sx={{ color: theme.palette.text.tertiary }} />
                                        </IconButton>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default TeamModal;
