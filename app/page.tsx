import Image from 'next/image';

async function getRandomImage() {
  const response = await fetch("https://source.unsplash.com/random?team");
  const buffer = await response.arrayBuffer();
  const base64 = Buffer.from(buffer).toString('base64');
  const imageType = response.headers.get('content-type') || 'image/jpeg';
  return `data:${imageType};base64,${base64}`;
}

export default async function Home() {
  const imageUrl = await getRandomImage();

  return (
      <div className="container">
        <div className="row">
          <div className="section">
            {/* Section 1 Content */}
            <Image src={imageUrl} alt="Team A" width={200} height={150} />
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
