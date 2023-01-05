import { IAvatar } from "@interfaces/index";
import React from "react";
import * as S from "./styles";

const Avatar = ({ hasBorder, ...props }: IAvatar) => {
  return <S.Avatar hasBorder={hasBorder} {...props} />;
};

export default Avatar;
