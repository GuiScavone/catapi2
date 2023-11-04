import styled from "styled-components";
import error from "../../assets/204.jpg";

export const DeleteButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  width: 100%;
`;

export const DeleteButton = styled.button`
  background-color: #fefae0;
  border-radius: 25px;
  cursor: pointer;
  padding: 0;
  width: 100%;
  height: 100%;
`;

export const TrashIcon = styled.img`
  margin-top: 5px;
`;

export const NextButton = styled.button`
  display: inline-block;
  width: 80px;
  height: 40px;
  padding: 12px 28px;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background-image: linear-gradient(to bottom right, #dda15e, #bc6c25);
  border: none;
  border-radius: 40px;
  box-shadow: 0px 4px 0px #bc6c25;
  cursor: pointer;
`;

export const BackButton = styled.button`
  display: inline-block;
  text-align: center;
  width: 80px;
  height: 40px;
  padding: 12px 28px;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background-image: linear-gradient(to bottom right, #dda15e, #bc6c25);
  border: none;
  border-radius: 40px;
  box-shadow: 0px 4px 0px #bc6c25;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ImgError = styled.img`
    margin-top: 50px;
  width: 400px;
  height: 400px;

`;
