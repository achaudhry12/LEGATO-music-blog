import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Artists.css";
import remove from "../assets/imgs/Remove.png"
import edit from "../assets/imgs/edit_icon.png"

export default function Artists(props) {
  const { artists, handleDelete } = props;

  return (
    <>
      <br />
      <div className="artist-body">
        <p class='title'>ARTISTS</p>
        <Link to="/artists/create">
          <button className="add-button">ADD ARTIST</button>
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
              <div className="ud-buttons">
                <Link to={`/artists/${artist.id}/edit`}><img src={edit} alt="edit" /></Link>
                {/* <button onClick={() => handleDelete(artist.id)}><img src={remove} alt="delete" /></button> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
