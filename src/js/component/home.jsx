import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./header.jsx";
import Jumbotron from "./content.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
		
		<Jumbotron />
	</div>
	);
};

export default Home;
