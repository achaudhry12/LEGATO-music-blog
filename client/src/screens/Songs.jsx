import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneArtist } from "../services/artists";
import "../assets/css/Songs.css";

export default function Songs(props) {
  // const { songs } = props;
  const [artists, setArtists] = useState([null]);
  const { id } = useParams();

  useEffect(() => {
    const fetchArtists = async () => {
      const artistInfo = await getOneArtist(id);
      setArtists(artistInfo);
    };
    fetchArtists();
  }, [setArtists, id]);

  return (
    <>
      <br />
      <div className="song-body">
        <h1 class="title">SONGS</h1>
        <Link to={`/artists/${artists.id}/songs/create`}>
          <button className="add-button">ADD SONG</button>
        </Link>
        <br />
        <br />
        <br />
        <div>
          {artists?.songs?.map((song) => (
            <div className="song-container">
              <button class="link">
              <a  href={song.link}>
                <p key={song.id}>{song.name}</p>
                <p key={song.id}>{song.release_date}</p>
                </a>
                </button>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
        <br />
        <br />
    </>
  );
}
