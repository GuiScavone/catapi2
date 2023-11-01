import { useEffect, useState } from "react";
import axios from "axios";

export default function CatGallery() {
    const [catImage, setCatImage] = useState([]);

    useEffect(() => {
        const fetchCatImage = async () => {
            try {
                const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10");
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
            <h2>
                Cat Haven
            </h2>
          </div>
        </>
    )
}