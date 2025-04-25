'use client'

import { useEffect, useState } from "react";

async function getRandomDogImage() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  return data.message;
}

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const image = await getRandomDogImage();
      setImageUrl(image);
    };
    fetchImage();
  }, []);
  return (
      <div className="container">
        <div className="row">
          <div
              className="section"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                textAlign: "center",
              }}
          >
            {/* Section 1 Content */}
            Team A
          </div>
          <div className="section">{/* Section 2 Content */}Hello Canton from Team B</div>
        </div>
        <div className="row">
          <div className="section">{/* Section 3 Content */}Team C</div>
          <div className="section">{/* Section 4 Content */}Team D</div>
        </div>
      </div>
  );
}
