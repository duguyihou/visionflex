import React from "react";
import { useSelector } from "react-redux";
import Avatar from "../../components/Avatar";
import {
  AvatarNameBlock,
  HomeWrapper,
  FullNameBlock,
  FirstNameBlock,
  NameLabel,
  NameInput,
  LastNameBlock,
  DobGenderBlock,
  DobBlock,
  DobLabel,
  DobPicker,
  GenderBlock,
  GenderLabel,
  Select,
} from "./style";

const HomePage = () => {
  const userInfo = useSelector((state) => state.userInfo);
  return (
    userInfo && (
      <HomeWrapper>
        <AvatarNameBlock>
          <Avatar avatarUrl={userInfo.avatarUrl} />
          <FullNameBlock>
            <FirstNameBlock>
              <NameLabel htmlFor='firstName'>First Name</NameLabel>
              <NameInput
                id='firstName'
                type='text'
                placeholder='First Name'
                defaultValue={userInfo.firstName}
              />
            </FirstNameBlock>
            <LastNameBlock>
              <NameLabel htmlFor='lastName'>Last Name*</NameLabel>
              <NameInput
                id='lastName'
                type='text'
                placeholder='Last Name'
                defaultValue={userInfo.lastName}
              />
            </LastNameBlock>
          </FullNameBlock>
        </AvatarNameBlock>
        <DobGenderBlock>
          <DobBlock>
            <DobLabel htmlFor='dob'>Date Of Birth</DobLabel>
            <DobPicker />
          </DobBlock>
          <GenderBlock>
            <GenderLabel htmlFor='gender'>Gender</GenderLabel>
            <Select>
              <option value='0'>select</option>
              <option value='1'>Male</option>
              <option value='2'>Famale</option>
              <option value='3'>Prefer not to say</option>
            </Select>
          </GenderBlock>
        </DobGenderBlock>
      </HomeWrapper>
    )
  );
};

export default HomePage;
