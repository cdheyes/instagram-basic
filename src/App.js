import { useEffect, useState } from "react";
import { Header } from "./components/headers";
import "./App.css";
import { fetchImages } from "./utils";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
	const [userInput, setUserInput] = useState();
	const [title, setTitle] = useState();
	const [images, setImages] = useState([]);

	useEffect(() => {
		fetchImages(setImages);
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();
		setTitle(userInput);
	};

	return (
		<div className="App">
			<Navbar />
			<h1>Insta-Clone</h1>
			<Header title={title} />
			<form onSubmit={submitHandler}>
				<input onChange={(e) => setTitle(e.target.value)} />
			</form>
			{/* below is 2 ways to write an if statement in react */}
			{title ? <h2>You wrote a title</h2> : <h2>Write in the box above</h2>}
			{title && <h2>Hooray</h2>}
			{images.map((image, i) => {
				return (
					<img
						class="mainImage"
						src={image.download_url}
						alt={`random file from unsplash number ${i}`}
					/>
				);
			})}
			<Footer />
		</div>
	);
};

export default App;
