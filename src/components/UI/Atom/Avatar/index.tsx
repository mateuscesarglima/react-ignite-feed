import { IAvatar } from "@interfaces/index";
import React from "react";
import * as S from "./styles";

const Avatar = ({ img, hasBorder }: IAvatar) => {
  return <S.Avatar src={img} hasBorder={hasBorder} />;
};

export default Avatar;
