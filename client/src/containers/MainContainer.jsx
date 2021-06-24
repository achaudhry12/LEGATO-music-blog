// Packages
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

// Custom Components
import Artists from '../screens/Artists';
import ArtistDetail from '../screens/ArtistDetail';
import ArtistEdit from '../screens/ArtistEdit';
import ArtistCreate from '../screens/ArtistCreate';
import SongCreate from '../screens/SongCreate';
import SongEdit from '../screens/SongEdit'

// Services
import { getAllArtists } from '../services/artists';
import { deleteSong, getAllSongs, postSong, putSong } from '../services/song';

export default function MainContainer() {
	const [artist, setArtist] = useState([]);
	const [songs, setSongs] = useState([]);
	const history = useHistory();

	useEffect(() => {
		const fetchArtist = async () => {
			const artistList = await getAllArtist();
			setArtist(artistList);
		};
		fetchArtist();
	}, []);

	useEffect(() => {
		const fetchSongs = async () => {
			const songList = await getAllSongs();
			setSong(songList);
		};
		fetchSongs();
	}, []);

	const handleCreate = async (formData) => {
		const songItem = await postSong(formData);
		setSong((prevState) => [...prevState, songItem]);
		history.push('/songs');
	};

	const handleUpdate = async (id, formData) => {
		const songItem = await putSong(id, formData);
		setSong((prevState) =>
			prevState.map((food) => {
				return song.id === Number(id) ? songItem : song;
			})
		);
		history.push('/song');
	};
	const handleDelete = async (id) => {
		await deleteFood(id);
		setSong((prevState) => prevState.filter((food) => food.id !== id));
	};

	return (
		<div>
			<Switch>
				<Route path='/songs/:id/edit'>
					<Edit songs={songs} handleUpdate={handleUpdate} />
				</Route>
				<Route path='/artist/:id'>
					<ArtistDetail artist={artist} />
				</Route>
				<Route path='/artist/new'>
					<ArtistCreate handleCreate={handleCreate} />
				</Route>
				<Route path='/songs'>
					<Songs songs={songs} handleDelete={handleDelete} />
				</Route>
				<Route path='/artist'>
					<Flavors flavors={flavors} />
				</Route>
			</Switch>
		</div>
	);
}