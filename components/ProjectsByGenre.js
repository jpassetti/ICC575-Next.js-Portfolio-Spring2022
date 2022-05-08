import { useState } from 'react'

import Tabs from './Tabs'
import Projects from './Projects'

const genres = [
	"Journalism", 
	"Advertising",
	"Data Science",
	"All"
];

const projectsList = [
	{
		title: "Project 1",
		genre: "Journalism",
		image: "01.jpg"
	},
	{
		title: "Project 2",
		genre: "Advertising",
		image: "02.jpg"
	},
	{
		title: "Project 3",
		genre: "Data Science",
		image: "03.jpg"
	},
];

function filterProjectsByGenre(projectsList, activeGenre) {
	// 1. create a new empty array
	let filteredProjects = [];
	// 2. loop through the old projects and filter them by a genre

	if (activeGenre === "All") {
		// no filter
		filteredProjects = projectsList;
	} else {
		filteredProjects = projectsList.filter((projectItem) => {
			// true or false?
			// true: return the project into the filtered list
			// false: skip the project
			return activeGenre === projectItem.genre;
		});
	}

	// 3. return the new array back to the point of origin
	return filteredProjects;
}

export default function ProjectsByGenre() {
	// init state
	// const [state, setState] = useState(initialValue)
	const [activeGenre, setActiveGenre] = useState("Journalism");

	return <section>
		<h2>Projects By Genre</h2>
		<Tabs 
			items={genres} 
			activeItem={activeGenre}
			clickHandler={setActiveGenre}
		/>
		<Projects items={filterProjectsByGenre(projectsList, activeGenre)} />
	</section>
}
