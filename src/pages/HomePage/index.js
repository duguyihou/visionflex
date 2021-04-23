import React from "react";
import Avatar from "../../components/Avatar";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Datepicker } from "../../components/Datepicker";
import {
  AvatarNameBlock,
  HomeWrapper,
  FullNameBlock,
  FirstNameBlock,
  LastNameBlock,
  DobGenderBlock,
  DobBlock,
  DobLabel,
  GenderBlock,
  GenderLabel,
} from "./style";

const HomePage = () => {
  return (
    <HomeWrapper>
      <AvatarNameBlock>
        {/* <Avatar /> */}
        <FullNameBlock>
          <FirstNameBlock>
            <Label htmlFor='firstName'>First Name</Label>
            <Input id='firstName' type='text' placeholder='First Name' />
          </FirstNameBlock>
          <LastNameBlock>
            <Label htmlFor='lastName'>Last Name*</Label>
            <Input id='lastName' type='text' placeholder='Last Name' />
          </LastNameBlock>
        </FullNameBlock>
      </AvatarNameBlock>
      <DobGenderBlock>
        <DobBlock>
          <DobLabel htmlFor='dob'>Date Of Birth</DobLabel>
          <Datepicker />
        </DobBlock>
        <GenderBlock>
          <GenderLabel htmlFor='gender'>Gender</GenderLabel>
          <select>
            <option value='0'>select</option>
            <option value='1'>Male</option>
            <option value='2'>Famale</option>
            <option value='3'>Prefer not to say</option>
          </select>
        </GenderBlock>
      </DobGenderBlock>
    </HomeWrapper>
  );
};

export default HomePage;
