import api from './api-config';

export const getAllArtists = async () => {
	const resp = await api.get('/artists');
	return resp.data;
};

export const getOneArtist = async (id) => {
	const resp = await api.get(`/artists/${id}`);
	return resp.data;
};

export const postArtist = async () => {
	const resp = await api.post('/artists/create');
	return resp.data;
};