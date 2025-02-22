import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Results() {
    const location = useLocation();
    const name = location.state?.name || "Unknown"; 
    const [dogImage, setDogImage] = useState("");
    const [dogBreed, setDogBreed] = useState("");
  
    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
          setDogImage(data.message);
          const breed = data.message.split("/")[4];
          setDogBreed(breed.charAt(0).toUpperCase() + breed.slice(1).replace(/-/g, ' '));
        });
    }, []);
  
    return (
      <div>
        <h2>Results</h2>
        <p><strong>{name}</strong>, your dog breed is:</p>

        {dogImage && (
          <div>
            <img src={dogImage} alt={dogBreed} style={{ width: "300px", borderRadius: "10px" }} />
            <p>{dogBreed}</p>
          </div>
        )}
      </div>
    );
}
