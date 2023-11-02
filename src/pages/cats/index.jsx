import React from 'react'
import CatGallery from '../../components/CatsGallery';
import { BodyHome } from '../home/styled';

const Cats = () => {
  return (
    <BodyHome>    
        <CatGallery />  
    </BodyHome>
  );
};

export default Cats;
