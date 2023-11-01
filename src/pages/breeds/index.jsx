import React, { useState } from "react";
import { StyledSearch, StyledButton, StyledContent } from "./style";

const Breeds = () => {
  const [isDropDownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropDownOpen);
  };

  return (
    <StyledSearch>
      <StyledButton onClick={toggleDropdown}>
        Breeds &nbsp; {isDropDownOpen ? "▲" : "▼"}
      </StyledButton>
      {isDropDownOpen && (
        <StyledContent>
          <a>
           Breeds
          </a>
   
        </StyledContent>
      )}
    </StyledSearch>
  );
};

export default Breeds;
