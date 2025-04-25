'use client'

import { useEffect, useState } from "react";

async function getRandomDogImage() {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    return data.fact;
}

export default function Home() {
    const [fact, setFact] = useState("");

    useEffect(() => {
        const fetchFact = async () => {
            const newFact = await getRandomDogImage();
            setFact(newFact);
        };

        fetchFact();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="section">
                    {/* Section 1 Content */}
                    {fact}
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
