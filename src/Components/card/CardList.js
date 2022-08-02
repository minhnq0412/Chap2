import React from "react";
import Card from "./Card";
import styled from "styled-components";

const StyledCardList = styled.div`
  position: "relative";
  flex: 4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 90px 30px;
  padding: 30px;
`;

const CardList = (props) => {
  return <StyledCardList>{props.children}</StyledCardList>;
};

export default CardList;
