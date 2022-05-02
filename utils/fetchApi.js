import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
	const {data} = await axios.get((url), {
		headers: {
			'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
			'X-RapidAPI-Key': '70f83edd4cmsh7226df266f487b9p16ecdfjsn9a11a30491b4'
		}
	})

	return data;
}