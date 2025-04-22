async function getRandomImage() {
  const response = await fetch("https://source.unsplash.com/random?team", {
    redirect: 'follow' // Ensure redirects are followed
  });

  const imageUrl = response.url;

  return imageUrl;
}

export default async function Home() {
  const imageUrl = await getRandomImage();

  return (
      <div className="container">
        <div className="row">
          <div className="section" style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white', // Adjust text color for visibility
            textAlign: 'center',
          }}>
            {/* Section 1 Content */}
            Team A
          </div>
          <div className="section">
            {/* Section 2 Content */}
            Team B
          </div>
        </div>
        <div className="row">
          <div className="section">
            {/* Section 3 Content */}
            Team C
          </div>
          <div className="section">
            {/* Section 4 Content */}
            Team D
          </div>
        </div>
      </div>
  );
}
