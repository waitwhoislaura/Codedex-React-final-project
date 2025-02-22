import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from './UserContext';

export default function UserForm() {
  const [inputName, setInputName] = useState("");
  const { setName } = useContext(UserContext);
  const navigate = useNavigate();

  function handleUserFormSubmit(e) {
    e.preventDefault();
    setName(inputName);
    navigate("/quiz", { state: { name: inputName } });
  }

  return (
    <form onSubmit={handleUserFormSubmit}>
      <label>Enter your name:</label>
      <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} />
      <button type="submit">Start Quiz</button>
    </form>
  );
}
