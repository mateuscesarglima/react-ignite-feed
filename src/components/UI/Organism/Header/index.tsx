import React from "react";
import * as S from "./styles";
import logo from "@assets/logo/logo.png";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Title>
        <img src={logo} alt="" /> Ignite Feed
      </S.Title>
    </S.HeaderContainer>
  );
};

export default Header;
