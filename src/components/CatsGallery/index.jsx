import { useEffect, useState } from "react";
import axios from "axios";
import { Gallery, LeftMenu, RightMenu, Cat, Image, TitleContainer, LikeButton, HeartIcon, LikeButtonContainer, BottomImage, List, Listli } from "./style";
import catHaven from "../../assets/catHaven.svg"
import { LogoLeftMenu } from "../Logo";
import gatoFofo from "../../assets/gatoFofo.svg"

export default function CatGallery() {
    const [catImage, setCatImage] = useState([]);

    const fetchCatImage = async () => {
            try {
                const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10");
                const limitedCatImages = response.data.slice(0, 8);
                setCatImage(limitedCatImages);
            } catch (error) {
                console.error('Error fetching Cat images:', error);
            }
        };

    useEffect(() => {
        
    fetchCatImage();
    }, []);

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
                        <LikeButton>
                            <HeartIcon>❤️</HeartIcon>
                        </LikeButton>
                    </LikeButtonContainer>
                </Cat>
            )}
            </RightMenu>
          </Gallery>
        </>
    )
}

