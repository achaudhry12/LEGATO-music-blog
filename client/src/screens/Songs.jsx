import React from "react";
import { Link } from "react-router-dom";

export default function Songs(props) {
  const { artists } = props;

  return (
    <div className="artist-body">
      <h1>SONGS</h1>
      <Link to={`/artists/${artist.id}/songs/create`}>
        <button>ADD SONG</button>
      </Link>
      {artists.map((artist) => (
        <Link to={`/artists/${artist.id}`}>
          <div className="artist-container">
            <div className="artist-image-container">
            <img
              key={artist.id}
              src={artist.image_url}
              alt={artist.stage_name}
              ></img>
            </div>
            <br />
            <div className="artist-text-contianer">
            <h2 key={artist.id}>{artist.stage_name}</h2>
            <p key={artist.id}>{artist.full_name}</p>
            </div>
          </div>
      </Link>
        ))}
    </div>
  );
}