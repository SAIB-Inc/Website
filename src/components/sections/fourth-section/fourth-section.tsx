import React from "react";
import Partners from "./partners";
import Projects from "./projects";
import History from "./history";

const FourthSection: React.FC = () => {
    return (
        <section id="our-work" className="px-6">
            <div className="max-w-(--breakpoint-xl) mx-auto">
                <Partners />
                <Projects />
                <History />
            </div>
        </section>
    );
};

export default FourthSection;