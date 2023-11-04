import { useEffect, useState } from "react";
import axios from "axios";
import { 
    Gallery, 
    LeftMenu, 
    RightMenu, 
    Cat, 
    Image, 
    LikeButton, 
    HeartIcon, 
    LikeButtonContainer, 
    BottomImage, 
    List, 
    Listli 
} from "./style";
import catHaven from "../../assets/catHaven.svg"
import { LogoLeftMenu } from "../Logo";
import gatoFofo from "../../assets/gatoFofo.svg"
import heartFill from "../../assets/heartFill.svg"
import { endpoint } from "../../utils/urls";
import Favorites from "../Favorites";
import Home from '../../pages/home';

export default function CatGallery() {
    const [catImage, setCatImage] = useState([]);
    const [favourites, setFavourites] = useState([]);

    const fetchCatImage = async () => {
            try {
                const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10");
                const limitedCatImages = response.data.slice(0, 6);
                setCatImage(limitedCatImages);
            } catch (error) {
                console.error('Error fetching Cat images:', error);
            }
        };

    useEffect(() => {
        fetchCatImage();
    }, []);

    const addingToFavourites = async (cat) => {
        if(!favourites.some((favouriteCat) => favouriteCat.id === cat.id)) {
            const access = JSON.stringify({
                image_id: cat.id,
                sub_id: "my-user-1234",
            });
            try{
                const response = await fetch (endpoint.favourites, {
                    method: 'POST',
                    headers: {
                        'x-api-key': 'live_SeVpXc9Uvalz7nUMObik26FYEt8EKO6S6pq1LskUroJZGCcGIrdQYeBDDDCo0FpT',
                        'Content-Type': 'application/json',
                    },
                    body: access,
                });
    
                if (response.ok) {
                    console.log("Cat added with success", response.data);
                    setFavourites([...favourites, cat]);
                    console.log(favourites);
                } else {
                    console.log("Error adding the favourite cat", response.statusText);
                }
            } catch(error){
                console.log("Error to POST to add a new favorite cat", error);
            }
        } else {
            console.log("Cat is already in favourites.");
        }
    };

    return (
        <>
          <Gallery>
            <LeftMenu>
                <LogoLeftMenu src={catHaven} alt="Logo"/>
                <List>
                    <Listli>Find your Cat</Listli>
                    <Listli>Know your Cat</Listli>
                    <Listli>Take your Pet Home</Listli>
                    <Listli>Love Him</Listli>
                </List>
                    <BottomImage src={gatoFofo} alt="Faded Image"/>
            </LeftMenu>
            <RightMenu>
                {catImage.map((cat,index) =>
                <Cat>
                    <Image key={index} src={cat.url} alt={`Cat ${index + 1}`} />
                    <LikeButtonContainer>
                        <LikeButton onClick={() => addingToFavourites(cat)}>
                            <HeartIcon src={heartFill} alt="Heart icon"/>
                        </LikeButton>
                    </LikeButtonContainer>
                </Cat>
            )}
            </RightMenu>
          </Gallery>
          {/* {<Favorites favourites={favourites}></Favorites>} */}
        </>
    )
}

