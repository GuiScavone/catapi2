import styled from "styled-components";

export const Gallery = styled.section`
    /* max-width: 70%;
    min-width: 800px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: auto;
    height: fit-content;
    flex-wrap: nowrap;
    padding: 59px; */
    width: 800px;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  padding: 59px;
`;

export const LeftMenu = styled.div`
    width: 30%;
    height: 100%;
    border-radius: 30px;
    border: 1px solid #000;
    background: #283618;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    min-height: 410px;
    padding: 48px 36px;
`;

export const RightMenu = styled.div`
    width: 80%;
    height: 100%;
    border-radius: 30px;
    background: #606C38; 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 500px;
    justify-content: center;
`;

export const Cat = styled.div`
    display: flex;
    width: 160px;
    height: 200px;
    margin: 28px 40px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    /* max-width: 100%;
    min-width: 50px;
    min-height: 50px;
    min-width: 50px; */
    width: 160px;
  height: 200px;
  object-fit: cover;
`;

export const LikeButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8px;
    width: 100%;
`;

export const LikeButton = styled.button`
    background-color: #FEFAE0;
    border-radius: 25px;
    cursor: pointer;
    padding: 0;
    width: 100%;
    height: 100%;
`;

export const HeartIcon = styled.img`
    margin-top: 5px;
`;

export const BottomImage = styled.img`
    position: relative;
    width: 100%;
`;

export const List = styled.ul`
    color: #FEFAE0;
    margin: 20px;
`;

export const Listli = styled.li`
    margin: 20px;
    font-size: 20px;
    font-weight: bold;
`;

