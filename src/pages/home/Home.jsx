import React from "react";
import "./style.scss";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Slider from "./slider/Slider";

const Home = () => {
	return (
		<div className="homePage">
			<Slider />
			<Trending />
			<Popular />
			<TopRated />
		</div>
	);
};

export default Home;
