import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWraper/ContentWraper";
import logo from "../../assets/moov.png";

const Header = () => {
	const [show, setShow] = useState("top");
	const [lastScrollY, setLastScrollY] = useState(0);
	const [mobileMenu, setMobileMenu] = useState("");
	const [query, setQuery] = useState("");
	const [showSearch, setShowSearch] = useState("");
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	const controlNavbar = () => {
		// Hide Navbar on scroll down
		if (window.scrollY > 200) {
			if (window.scrollY > lastScrollY && !mobileMenu) {
				setShow("hide");
			} else {
				setShow("show");
			}
		} else {
			setShow("top");
		}
		// Set scroll position
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		// Add scroll event listener
		window.addEventListener("scroll", controlNavbar);
		return () => {
			window.removeEventListener("scroll", controlNavbar);
		};
	}, [lastScrollY]);

	const searchQueryHandler = (event) => {
		if (event.key === "Enter" && query.length > 0) {
			navigate(`/search/${query}`);
			setTimeout(() => {
				setShowSearch(false);
			}, 1000);
		}
	};

	const openSearch = () => {
		setMobileMenu(false);
		setShowSearch(true);
	};

	const openMobileMenu = () => {
		setMobileMenu(true);
		setShowSearch(false);
	};

	const navigationHandler = (type) => {
		// Navigate to the explore page
		if (type === "movie") {
			navigate("/explore/movie");
		} else {
			navigate("/explore/tv");
		}
		setMobileMenu(false);
	};

	return (
		<header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
			<ContentWrapper>
				<div className="logo" onClick={() => navigate("/")}>
					<img src={logo} alt="" />
				</div>
				<ul className="menuItems">
					<li className="menuItem">
						<HiOutlineSearch onClick={openSearch} />
					</li>
					<li className="menuItem" onClick={() => navigationHandler("movie")}>
						Movies
					</li>
					<li className="menuItem" onClick={() => navigationHandler("tv")}>
						TV Shows
					</li>
				</ul>

				<div className="mobileMenuItems">
					<HiOutlineSearch onClick={openSearch} />
					{mobileMenu ? (
						<VscChromeClose onClick={() => setMobileMenu(false)} />
					) : (
						<SlMenu onClick={openMobileMenu} />
					)}
				</div>
			</ContentWrapper>
			{showSearch && (
				<div className="searchBar">
					<ContentWrapper>
						<div className="searchInput">
							<input
								type="text"
								placeholder="Search for a movie or tv show...."
								onChange={(e) => setQuery(e.target.value)}
								onKeyUp={searchQueryHandler}
							/>
							<VscChromeClose onClick={() => setShowSearch(false)} />
						</div>
					</ContentWrapper>
				</div>
			)}
		</header>
	);
};

export default Header;
