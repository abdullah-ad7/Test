import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(isEditing ? false : true);
    // setIsEditing(!isEditing);
    setIsEditing((editing) => !editing); //This is strong approach than both above
  }

  function handleChangeName(event) {
    setPlayerName(event.target.value);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  let EditablPlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    EditablPlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChangeName}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {EditablPlayerName}
        <span className="players-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
