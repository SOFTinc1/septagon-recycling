import React from "react";
import "./homepage.styles.scss";
import HomepageBanner from "../../components/homepage/homepage-banner/homapage-banner.component";
import Process from "../../components/process/process.component";
import Problem from "../../components/problem/problem.component";
import Explain from "../../components/explain/explain.component";

const Homepage = () => (
    <div className="homepage">
        <HomepageBanner />
        <Process />
        <Problem />
        <Explain />
    </div>       
)

export default Homepage;