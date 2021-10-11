import React from 'react';
import styled from 'styled-components';
import flyer from '../../images/mammoth.jpg';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
`;

const Flyer = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

const Header = styled.h1`
  font-size: 3em;
  margin-top: 30px;
  font-family: 'Bebas Neue', cursive;
  color: #eb64b5;
  text-align: center;
`;

const Image = () => {
  return (
    <div>
      <Header>UPCOMING EVENT</Header>
      <ImageContainer>
        <Flyer src={flyer} />
      </ImageContainer>
    </div>
  );
};

export default Image;
