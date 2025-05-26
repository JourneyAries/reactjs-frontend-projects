export const getImage = (imagePath: string): string => {
	const imageName = imagePath.split('/').pop();
	return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};
