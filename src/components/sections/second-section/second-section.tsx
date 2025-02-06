import React from "react";
import { LightningBackgroundLeft, LightningBackgroundRight } from "../../../images/sections/second-section";
import Offer from "./offer";
import About from "./about";

const SecondSection: React.FC = () => {
    return (
        <section>
            <div id="about" className="container max-w-(--breakpoint-xl) mx-auto pt-10">
                <div>
                    <About />
                </div>
                <div id="services" className="pt-40">
                    <Offer />
                </div>
            </div>
            <div className="flex h-50 mx-auto relative mt-10 sm:mt-30 max-w-(--breakpoint-xl)">
                <div className="absolute -left-[500px] w-4xl">
                    <img alt="lightning background" src={LightningBackgroundLeft} className="w-full!" />
                </div>
                <div className="absolute -right-(--breakpoint-sm) w-full">
                    <img alt="lightning background" src={LightningBackgroundRight} className="w-full!" />
                </div>
            </div>
        </section>
    );
};

export default SecondSection;