import React, { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import "./style.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import ContentWraper from "../../../components/contentWraper/ContentWraper";
import Img from "../../../components/lazyLoadImage/Img";

import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const Slider = () => {
	const { data, loading } = useFetch("/movie/upcoming");
	const { url } = useSelector((state) => state.home);
	console.log(data);
	const [background, setBackground] = useState("");
	const [poster, setPoster] = useState("");
	const [title, setTitle] = useState("");
	const [overview, setOverview] = useState("");
	const [currentItem, setCurrentItem] = useState(0);

	useEffect(() => {
		if (data?.results?.length > 0 && currentItem < data.results.length - 1) {
			setPoster(url.poster + data.results[currentItem].poster_path);
			setBackground(url.backdrop + data.results[currentItem].backdrop_path);
			setTitle(data.results[currentItem].title);
			setOverview(data.results[currentItem].overview);
		}

		const interval = setInterval(() => {
			currentItem < data.results.length - 1 ? setCurrentItem(currentItem + 1) : setCurrentItem(0);
		}, 5000);

		return () => clearInterval(interval);
	}, [data, currentItem]);

	return (
		<div className="sliderBanner">
			{!loading && (
				<div className="backdrop-img">
					<Img src={background} />
					<div className="opacity-layer"></div>
					<div className="backdrop-content">
						<ContentWraper>
							<img src={poster} alt="poster" />
							<div className="content">
								<h3 className="title">{title}</h3>
								<p className="overview">{overview}</p>
							</div>
						</ContentWraper>
					</div>
					<button
						className="sliderBtn-pre"
						onClick={() => {
							currentItem === 0 ? setCurrentItem(4) : setCurrentItem(currentItem - 1);
						}}
						disabled={currentItem === 0}
					>
						<MdArrowBackIos />
					</button>
					<button
						className="sliderBtn-next"
						onClick={() => {
							currentItem < data.results.length - 1 ? setCurrentItem(currentItem + 1) : setCurrentItem(0);
						}}
					>
						<MdArrowForwardIos />
					</button>
				</div>
			)}
		</div>
	);
};

export default Slider;
