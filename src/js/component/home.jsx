import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./header.jsx";
import Jumbotron from "./content.jsx";
import CardApp from "./card.jsx";
import Footerapp from "./footer.jsx";
import Content from "./content.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
		
		<Content />
		
		<CardApp />

		<CardApp />


		<Footerapp />
	</div>
	);
};

export default Home;
