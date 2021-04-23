import styled from "styled-components";
import { Label } from "../../components/Label";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const AvatarNameBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FullNameBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstNameBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LastNameBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DobGenderBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DobBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DobLabel = styled(Label)`
  width: 80px;
`;

export const GenderBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

export const GenderLabel = styled(Label)`
  width: 80px;
  text-align: start;
`;
