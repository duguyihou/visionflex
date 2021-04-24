import styled from "styled-components";
import { Input } from "../../components/Input";
import { Datepicker } from "../../components/Datepicker";
import { Label } from "../../components/Label";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding-top: 50px;

  width: 60vw;
  margin: 0 auto;
`;

export const AvatarNameBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: stretch;
`;

export const FullNameBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  margin: 0;
`;
export const NameLabel = styled(Label)`
  display: flex;
  flex: 1;
`;
export const NameInput = styled(Input)`
  display: flex;
  flex: 1;
`;

export const FirstNameBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

export const LastNameBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

export const DobGenderBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DobBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DobLabel = styled(Label)`
  /* width: 80px; */
  display: flex;
  flex: 1;
`;

export const DobPicker = styled(Datepicker)`
  display: flex;
  flex: 1;
`;

export const GenderBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const GenderLabel = styled(Label)`
  /* width: 80px; */
  text-align: start;
  display: flex;
  flex: 1;
`;

export const Select = styled.select`
  display: flex;
  flex: 1;
`;
