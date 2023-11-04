import styled from "styled-components";

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const Dropbtn = styled.button`
    background-color: #283618;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    width: 200px;
    height: 44px;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  opacity: inherit;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const DropdownContainer = styled.div`
  &:hover ${DropdownContent} {
    display: block;

  }

  &:hover ${Dropbtn} {
    background-color: #606C38;
  }
`;

export const DropdownList = styled.div`
    max-height: 200px;
    overflow-y: auto;
`;