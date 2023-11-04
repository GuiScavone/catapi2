import React, { useEffect, useState } from "react";
import { BottomImage, Cat, Gallery, LeftMenu, List, Listli, RightMenu, Image } from "../CatsGallery/style";
import { LogoLeftMenu } from "../Logo";
import catHaven from "../../assets/catHaven.svg";
import gatoFofo from "../../assets/gatoFofo.svg";
import axios from "axios";
import { endpoint } from "../../utils/urls";

export default function CatBreeds() {
    const [breeds, setBreeds] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const breedsPerPage = 20;

    useEffect(() => {
        const fetchBreeds = async () => {
            try{
                const response = await axios.get(endpoint.breeds, {
                    headers: {
                        "Content-Type": "application/json",
                        'x-api-key': 'live_SeVpXc9Uvalz7nUMObik26FYEt8EKO6S6pq1LskUroJZGCcGIrdQYeBDDDCo0FpT',
                    }
                  }
                );

                if (response.status === 200) {
                    setBreeds(response.data);
                    console.log(response);
                } else {
                    console.log("Error fetching cat Breeds", response.statusText);
                }
            } catch (error) {
                console.log("Error fetching Cat Breeds", error);
            }
        };
        fetchBreeds();
    }, []);

    const getDisplayedBreeds = () => {
        const startIndex = (currentPage - 1) * breedsPerPage;
        const endIndex = startIndex + breedsPerPage;
        return breeds.slice(startIndex, endIndex);
    }

    return (
        <>
            <Gallery>
                <LeftMenu>
                    <LogoLeftMenu src={catHaven} alt="Logo Breeds" />
                    <List>
                        <Listli>Find your Cat</Listli>
                        <Listli>Know your Cat</Listli>
                        <Listli>Take your Pet Home</Listli>
                        <Listli>Love Him</Listli>
                    </List> 
                        <BottomImage src={gatoFofo} alt="Faded Image" />
                </LeftMenu>
                <RightMenu>
                    <div>
                    <h2>List of Cat Breeds</h2>
                        <ul>
                            {Array.isArray(breeds) && breeds.length > 0 ? (
                                getDisplayedBreeds().map((breed) => (
                                    <li key={breed.id}>{breed.name}</li>
                                ))
                            ) : (
                                <p>No breeds found.</p>
                            )}
                        </ul>
                    </div>
                </RightMenu>
                <div>
                    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Back</button>
                    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage * breedsPerPage >= breeds.length}>Next</button>
                </div>
            </Gallery>
        </>
    )
}


   