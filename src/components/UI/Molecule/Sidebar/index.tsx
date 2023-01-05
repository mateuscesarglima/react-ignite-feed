import Avatar from "../../Atom/Avatar";
import * as S from "./styles";
import { PencilLine } from "phosphor-react";
import { ISidebar } from "@interfaces/index";

const Sidebar = ({ avatarImg, backgroundCoverImg }: ISidebar) => {
  return (
    <S.Aside>
      <S.AsideHeaderImage src={backgroundCoverImg} alt="developer image" />
      <S.Profile>
        <Avatar src={avatarImg} hasBorder={true} />
        <strong>Mateus Cesar</strong>
        <span>Web Developer</span>
      </S.Profile>
      <S.Footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </S.Footer>
    </S.Aside>
  );
};

export default Sidebar;
