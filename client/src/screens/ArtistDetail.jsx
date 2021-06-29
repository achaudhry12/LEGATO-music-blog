import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { deleteSong, getAllSongs, postSong, putSong } from '../services/songs';

export default function ArtistDetail(props) {
	const [artists, setArtists] = useState([null]);
	const [songs, setSongs] = useState([]);
	const { song } = props;
	const { id } = useParams();

	useEffect(() => {
		const fetchSongs = async () => {
			const songList = await getAllSongs();
			setSongs(songList);
		};
		fetchSongs();
	}, [id]);

  return (
    <>
      <div>
        <h2>TEST</h2>
    <img key={artists.id} src={artists.image_url} alt={artists.stage_name}></img>
      <br />
    <h2 key={artists.id}>{artists.stage_name}</h2>
    <p key={artists.id}>{artists.full_name}</p>
    </div>
    <div>

    </div>
    </>
	);
}
