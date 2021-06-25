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
import { deleteSong, getAllSongs, postSong, putSong } from '../services/songs';

export default function MainContainer() {
	const [artists, setArtists] = useState([]);
	const [songs, setSongs] = useState([]);
	const history = useHistory();

	useEffect(() => {
		const fetchArtist = async () => {
			const artistList = await getAllArtists();
			setArtists(artistList);
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
		setArtists((prevState) => [...prevState, artistItem]);
		history.push('/artists');
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
		setSongs((prevState) => [...prevState, songItem]);
		history.push(`/artists/${artistId}/songs`);
	};

	const handleUpdateSong = async (artistId, id, formData) => {
		const songItem = await putSong(id, formData);
		setSongs((prevState) =>
			prevState.map((song) => {
				return song.id === Number(id) ? songItem : song;
			})
		);
		history.push(`/artists/${artistId}/songs`);
  };
  
	const handleDeleteSong = async (id) => {
		await deleteSong(id);
		setSongs((prevState) => prevState.filter((song) => song.id !== id));
	};

	return (
		<div>
			<Switch>
				<Route path='/artists'>
          <Artists artists={artists} />
				</Route>
				<Route path='/artists/:id'>
          <ArtistDetail artists={artists} handleDelete={handleDeleteSong} />
        </Route>
        {/* <Route path='/artist/edit'>
					<ArtistEdit />
				</Route> */}
				<Route path='/artists/new'>
					<ArtistCreate artists={artists} handleCreate={handleCreateArtist} />
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
