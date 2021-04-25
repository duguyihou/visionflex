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
  @media (min-width: 1024px) {
    width: 60vw;
  }
  @media (max-width: 768px) {
    width: 80vw;
    margin: 0 auto;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DobBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DobLabel = styled(Label)`
  display: flex;
  flex: 1;
  min-width: 80px;
`;

export const DobPicker = styled(Datepicker)`
  display: flex;
  flex: 1;
  @media (max-width: 768px) {
    max-width: 180px;
  }
`;

export const GenderBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GenderLabel = styled(Label)`
  text-align: start;
  display: flex;
  min-width: 80px;
  flex: 1;
`;

export const Select = styled.select`
  display: flex;
  flex: 1;
  min-width: 80px;
  @media (max-width: 768px) {
    max-width: 180px;
  }
`;
