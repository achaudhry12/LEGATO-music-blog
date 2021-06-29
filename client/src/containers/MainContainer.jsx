// Packages
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

// Custom Components
import Artists from '../screens/Artists';
import ArtistDetail from '../screens/ArtistDetail';
import ArtistEdit from '../screens/ArtistEdit';
import ArtistCreate from '../screens/ArtistCreate';
import Songs from '../screens/Songs';
// import SongCreate from '../screens/SongCreate';
// import SongEdit from '../screens/SongEdit'

// Services
import { getAllArtists, postArtist, putArtist, deleteArtist } from '../services/artists';
import { getAllSongs } from '../services/songs';

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

  const handleCreate = async (formData) => {
		const artistItem = await postArtist(formData);
		setArtists((prevState) => [...prevState, artistItem]);
		history.push('/artists');
  };
  
  const handleUpdate = async (id, formData) => {
		const artistItem = await putArtist(id, formData);
		setArtists((prevState) =>
			prevState.map((artist) => {
				return artist.id === Number(id) ? artistItem : artist;
			})
		);
		history.push('/artists');
  };

  const handleDelete = async (id) => {
		await deleteArtist(id);
    setArtists((prevState) => prevState.filter((artist) => artist.id !== id));
    history.push('/artists');
	};

	// const handleCreateSong = async (artistId, formData) => {
	// 	const songItem = await postSong(formData);
	// 	setSongs((prevState) => [...prevState, songItem]);
	// 	history.push(`/artists/${artistId}/songs`);
	// };

	// const handleUpdateSong = async (artistId, id, formData) => {
	// 	const songItem = await putSong(id, formData);
	// 	setSongs((prevState) =>
	// 		prevState.map((song) => {
	// 			return song.id === Number(id) ? songItem : song;
	// 		})
	// 	);
	// 	history.push(`/artists/${artistId}/songs`);
  // };
  
	// const handleDeleteSong = async (artistId, id) => {
	// 	await deleteSong(id);
  //   setSongs((prevState) => prevState.filter((song) => song.id !== id));
  //   history.push(`/artists/${artistId}/songs`)
	// };

	return (
		<div>
			<Switch>
				{/* <Route path='/artists/:id/songs/:id'>
          <SongEdit artists={artists} songs={songs} handleUpdate={handleUpdateSong} />
        </Route> */}
        {/* <Route path='/artists/:id/songs/create'>
          <SongCreate artists={artists} songs={songs} handleCreate={handleCreateSong}/>
				</Route> */}
				<Route path='/artists/:id/songs'>
          <Songs artists={artists} songs={songs} />
        </Route>
        <Route path='/artists/:id/edit'>
          <ArtistEdit artists={artists} handleUpdate={handleUpdate} handleDelete={handleDelete} />
        </Route>
        <Route path='/artists/create'>
					<ArtistCreate artists={artists} handleCreate={handleCreate} />
				</Route>
				<Route path='/artists/:id'>
          <ArtistDetail artists={artists} handleDelete={handleDelete} />
        </Route>
				<Route path='/artists'>
          <Artists artists={artists} />
				</Route>
			</Switch>
		</div>
	);
}
