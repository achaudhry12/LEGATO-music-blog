import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getOneArtist } from "../services/artists";
// import { deleteSong, getAllSongs, postSong, putSong } from "../services/songs";
import "../assets/css/ArtistDetail.css";

export default function ArtistDetail(props) {
  const [artist, setArtist] = useState(null);
  const { id } = useParams();
  const { handleDelete } = props;
  // const { songs } = props;

  useEffect(() => {
    const fetchArtist = async () => {
      const artistInfo = await getOneArtist(id);
      setArtist(artistInfo);
    };
    fetchArtist();
  }, [id]);

  return (
    <>
      <br />
      <br />
      <br />
      <div class="artist-detail-container">
        <div className="artist-detail-image">
          <img
            key={artist?.id}
            src={artist?.image_url}
            alt={artist?.stage_name}
          ></img>
        </div>
        <br />
        <div className="artist-detail-text">
          <p class="name" key={artist?.id}>
            {artist?.stage_name}
          </p>
          <p class="full-name" key={artist?.id}>
            {artist?.full_name}
          </p>
        </div>
        <div className="artist-show-songs">
          <Link to={`/artists/${artist?.id}/songs`}>
            <button>SHOW SONGS</button>
          </Link>
        </div>
        <div className="artist-delete">
          <button onClick={() => handleDelete(id)}>DELETE</button>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
