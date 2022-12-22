import { IAvatar } from "@interfaces/index";
import React from "react";
import * as S from "./styles";

const Avatar = ({ img }: IAvatar) => {
  return <S.Avatar src={img} />;
};

export default Avatar;
