import React, { memo } from "react";
import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/input";

export const SearchInput = memo(() => {
  console.log("Searchinput");
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: ceater;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
