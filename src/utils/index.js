export const fetchImages = async (setter) => {
	try {
		// imports images from website
		const response = await fetch("https://picsum.photos/v2/list");
		// convert image data from json format to javascript format
		const data = await response.json();
		setter(data);
	} catch (error) {
		console.log(error);
	}
};
