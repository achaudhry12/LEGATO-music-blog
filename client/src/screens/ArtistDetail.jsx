import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getOneArtist } from "../services/artists";
import { deleteSong, getAllSongs, postSong, putSong } from "../services/songs";

export default function ArtistDetail(props) {
  const [artist, setArtist] = useState([null]);
  const { id } = useParams();
  const { songs } = props;

  useEffect(() => {
    const fetchArtist = async () => {
      const artistInfo = await getOneArtist(id);
      setArtist(artistInfo);
    };
    fetchArtist();
  }, [id]);

  return (
    <>
      <div>
        <img
          key={artist.id}
          src={artist.image_url}
          alt={artist.stage_name}
        ></img>
        <br />
        <h2 key={artist.id}>{artist.stage_name}</h2>
        <p key={artist.id}>{artist.full_name}</p>
      </div>
      <div>
        <Link to={`/artists/${artist.id}/songs`}>
          <button>Show Songs</button>
        </Link>
      </div>
    </>
  );
}
