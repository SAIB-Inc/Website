import React from "react";
import Partners from "./partners";
import Projects from "./projects";
import History from "./history";

const FourthSection: React.FC = () => {
    return (
        <section id="our-work" className="max-w-(--breakpoint-xl) mx-auto">
            <Partners />
            <Projects />    
            <History />
        </section>
    );
};

export default FourthSection;