// Packages
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

// Custom Components
import Artists from '../screens/Artists';
import ArtistDetail from '../screens/ArtistDetail';
// import ArtistEdit from '../screens/ArtistEdit';
import ArtistCreate from '../screens/ArtistCreate';
import SongCreate from '../screens/SongCreate';
import SongEdit from '../screens/SongEdit'

// Services
import { getAllArtists, postArtist } from '../services/artists';
import { deleteSong, getAllSongs, postSong, putSong } from '../services/song';

export default function MainContainer() {
	const [artist, setArtist] = useState([]);
	const [songs, setSongs] = useState([]);
	const history = useHistory();

	useEffect(() => {
		const fetchArtist = async () => {
			const artistList = await getAllArtists();
			setArtist(artistList);
		};
		fetchArtist();
	}, []);

	useEffect(() => {
		const fetchSongs = async () => {
			const songList = await getAllSongs();
			setSongs(songList);
		};
		fetchSongs();
	}, []);

  const handleCreateArtist = async (formData) => {
		const artistItem = await postArtist(formData);
		setArtist((prevState) => [...prevState, artistItem]);
		history.push('/artist');
  };
  
  // const handleUpdateArtist = async (id, formData) => {
	// 	const artistItem = await putSong(id, formData);
	// 	setSong((prevState) =>
	// 		prevState.map((food) => {
	// 			return song.id === Number(id) ? songItem : song;
	// 		})
	// 	);
	// 	history.push('/song');
  // };

	const handleCreateSong = async (artistId, formData) => {
		const songItem = await postSong(formData);
		setSong((prevState) => [...prevState, songItem]);
		history.push(`/artist/${artistId}/songs`);
	};

	const handleUpdateSong = async (id, formData) => {
		const songItem = await putSong(id, formData);
		setSong((prevState) =>
			prevState.map((song) => {
				return song.id === Number(id) ? songItem : song;
			})
		);
		history.push(`/artist/${artistId}/songs`);
  };
  
	const handleDeleteSong = async (id) => {
		await deleteSong(id);
		setSong((prevState) => prevState.filter((song) => song.id !== id));
	};

	return (
		<div>
			<Switch>
				<Route path='/artist'>
          <Artists artist={artist} />
				</Route>
				<Route path='/artist/:id'>
          <ArtistDetail artist={artist} handleDelete={handleDeleteSong} />
        </Route>
        {/* <Route path='/artist/edit'>
					<ArtistEdit />
				</Route> */}
				<Route path='/artist/new'>
					<ArtistCreate artist={artist} handleCreate={handleCreateArtist} />
				</Route>
				<Route path='/artists/:id/songs'>
          <SongCreate songs={songs} handleCreate={handleCreateSong}/>
				</Route>
				<Route path='artists/:id/songs/:id'>
          <SongEdit songs={songs} handleUpdate={handleUpdateSong} />
				</Route>
			</Switch>
		</div>
	);
}
