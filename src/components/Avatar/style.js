import styled from "styled-components";
import placeholder from "../../assets/avatar_placeholder.png";

export const AvatarImage = styled.img.attrs(({ avatarUrl }) => ({
  src: avatarUrl || placeholder,
}))`
  display: flex;
  flex: 1;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  width: 150px;
  height: 150px;
  color: #fff;

  @media (max-width: 768px) {
    max-width: 150px;
    max-height: 150px;
  }
`;
