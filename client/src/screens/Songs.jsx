import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneArtist } from "../services/artists";

export default function Songs(props) {
  const { songs } = props;
  const [artist, setArtist] = useState([null]);
  const { id } = useParams();
  
  useEffect(() => {
    const fetchArtist = async () => {
      const artistInfo = await getOneArtist(id);
      setArtist(artistInfo);
    };
    fetchArtist();
  }, [id]);

  return (
    <div className="artist-body">
      <h1>SONGS</h1>
      <Link to={`/artists/${artist.id}/songs/create`}>
        <button>ADD SONG</button>
      </Link>
      <div>
      {songs.map((song) => (
        <div className="song-container">
          <p key={song.id}>{song.name}</p>
        </div>
        ))}
        </div>
    </div>
  );
}