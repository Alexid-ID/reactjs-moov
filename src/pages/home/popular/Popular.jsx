import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWraper from "../../../components/contentWraper/ContentWraper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const Popular = () => {
	const [endpoint, setEndpoint] = useState("movie");

	const { data, loading } = useFetch(`/${endpoint}/popular`);

	const onTabChange = (tab) => {
		setEndpoint(tab === "Movies" ? "movie" : "tv");
	};

	return (
		<div className="carouselSection">
			<ContentWraper>
				<span className="carouselTitle">What's Popular</span>
				<SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
			</ContentWraper>
			<Carousel data={data?.results} loading={loading} endpoint={endpoint} />
		</div>
	);
};

export default Popular;
