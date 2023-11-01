import { useEffect, useState } from "react";
import axios from "axios";

export default function CatGallery() {
    const [catImage, setCatImage] = useState([]);

    useEffect(() => {
        const fetchCatImage = async () => {
            try {
                const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=2");
                setCatImage(response.data);
            } catch (error) {
                console.error('Error fetching Cat images:', error);
            }
        };
    fetchCatImage();
    }, []);

    return (
        <>
          <div>
            <div>
                {catImage.map((cat,index) => 
                <img key={index} src={cat.url} alt={`Cat ${index + 1}`}></img>
                )}
            </div>
          </div>
        </>
    )
}

