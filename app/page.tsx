async function getRandomDogImage() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  return data.message;
}

export default async function Home() {
  const imageUrl = await getRandomDogImage();

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
          <div className="section">{/* Section 2 Content */}Team B</div>
        </div>
        <div className="row">
          <div className="section">{/* Section 3 Content */}Team C</div>
          <div className="section">{/* Section 4 Content */}Team D</div>
        </div>
      </div>
  );
}
