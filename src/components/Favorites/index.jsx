import React, { useEffect, useState } from "react";
import { BottomImage, Cat, Gallery, LeftMenu, List, Listli, RightMenu, Image } from "../CatsGallery/style";
import { LogoLeftMenu } from "../Logo";
import catHaven from "../../assets/catHaven.svg"
import gatoFofo from "../../assets/gatoFofo.svg"
import { endpoint } from "../../utils/urls";
import axios from "axios";

export default function Favorites() {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
          try {
            const response = await axios.get(endpoint.favourites , {
                headers: {
                  "Content-Type": "application/json",
                  'x-api-key': 'live_SeVpXc9Uvalz7nUMObik26FYEt8EKO6S6pq1LskUroJZGCcGIrdQYeBDDDCo0FpT' 
                }
              }
            );
    
            if (response.status === 200) {
              setFavourites(response.data);
            } else {
              console.error("Error fetching favorites", response.statusText);
            }
          } catch (error) {
            console.error("Error fetching favorites", error);
          }
        };
        fetchFavorites();
    }, []);

    return (
       <>
         <Gallery>
            <LeftMenu>
                <LogoLeftMenu src={catHaven} alt="Logo Favourites"/>
                <List>
                    <Listli>Find your Cat</Listli>
                    <Listli>Know your Cat</Listli>
                    <Listli>Take your Pet Home</Listli>
                    <Listli>Love Him</Listli>
                </List>
                <BottomImage src={gatoFofo} alt="Faded Image"></BottomImage>
            </LeftMenu>
            <RightMenu>
               {Array.isArray(favourites) && favourites.length > 0 ? (
                    favourites.map((cat, index) => (
                        <Cat key={index}>
                            <Image src={cat.url} alt={`Cat ${index + 1}`} />
                        </Cat>
                    ))
                ) : (
                  <p>No favourite found.</p>
                )} 
            </RightMenu>
         </Gallery>
       </>
    )
}
