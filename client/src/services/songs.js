import api from './api-config';

export const getAllSongs = async (id) => {
	const resp = await api.get(`/artists/${id}/songs`);
	return resp.data;
};

export const postSong = async (artistId, songData) => {
	const resp = await api.post(`/artists/${artistId}/songs`, { song: songData });
	return resp.data;
};

// export const putSong = async (artistId, id, songData) => {
// 	const resp = await api.put(`/artists/${artistId}/songs/${id}`, { song: songData });
// 	return resp.data;
// };

// export const deleteSong = async (artistId, id) => {
// 	const resp = await api.delete(`/artists/${artistId}/songs/${id}`);
// 	return resp;
// };
