import React, { useState } from "react";
import {
  StyledSearch,
  StyledButton,
  StyledContent,
  StyledCards,
} from "./style";

const Breeds = () => {
  const [isDropDownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropDownOpen);
  };

  return (
    <>
      <StyledSearch>
        <StyledButton onClick={toggleDropdown}>
          Breeds &nbsp; {isDropDownOpen ? "▲" : "▼"}
        </StyledButton>
        {isDropDownOpen && 
        <StyledContent>
         <a>Breeds</a>
        </StyledContent>}
      </StyledSearch>
      <StyledCards></StyledCards>
    </>
  );
};

export default Breeds;

// import React, { useState, useEffect } from "react";
// import { StyledSearch, StyledButton, StyledContent } from "./style";

// const Breeds = () => {
//   const [isDropDownOpen, setDropdownOpen] = useState(false);
//   const [breedsList, setBreedsList] = useState([]); // Estado para armazenar a lista de raças

//   const toggleDropdown = () => {
//     if (!isDropDownOpen) {
//       // Se o dropdown está fechado, faz a chamada à API para buscar a lista de raças
//       fetch("sua_url_da_api_aqui")
//         .then((response) => response.json())
//         .then((data) => setBreedsList(data));
//     }
//     setDropdownOpen(!isDropDownOpen);
//   };

//   useEffect(() => {
//     // Aqui, você pode definir a lógica para carregar a lista de raças quando o componente for montado
//     // Isso é opcional e depende de quando você deseja buscar os dados.
//   }, []);

//   return (
//     <StyledSearch>
//       <StyledButton onClick={toggleDropdown}>
//         Breeds &nbsp; {isDropDownOpen ? "▲" : "▼"}
//       </StyledButton>
//       {isDropDownOpen && (
//         <StyledContent>
//           <ul>
//             {breedsList.map((breed) => (
//               <li key={breed.id}>{breed.name}</li>
//             ))}
//           </ul>
//         </StyledContent>
//       )}
//     </StyledSearch>
//   );
// };

// export default Breeds;
