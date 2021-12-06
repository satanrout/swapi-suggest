import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DetailsContext } from "../context/detailContext";

export const Suggestion = ({ characters }) => {
  const { setCurrentCharacter } = useContext(DetailsContext);
  return (
    <div className="suggestions">
      {characters.map((character) => (
        <div
          onClick={() => setCurrentCharacter(character)}
          key={character.name}
        >
          <Link to={`/${character.name}`}>{character.name}</Link>
        </div>
      ))}
    </div>
  );
};
