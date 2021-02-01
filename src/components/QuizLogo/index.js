import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
  width: 200px;
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

function QuizLogo() {
  return (
    <Logo src="https://cdn.steamgriddb.com/logo/944eefd22dfe99fe7631b8ecc732c7cf.png" alt="Logo Genshin Impact" />
  );
}

export default QuizLogo;
