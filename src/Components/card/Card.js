import React from "react";
import styled, { css } from "styled-components";
/*
 */
const StyledCard = styled.div`
  position: relative;
  width: auto;
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  left: 50%;
  width: calc(100% - 36px);
  bottom: 0;
  transform: translate(-50%, 50%);
  background-color: white;
  z-index: 2;
  border-radius: 20px;
  padding: 20px;
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;
const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTittle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;
const CardAmount = styled.span`
  font-style: 18px;
  font-weight: bold;
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );

  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(86.88deg, #20e3b2, #2cccff);
    `};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;
const Card = (props) => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg alt="" src={props.image} />
      </CardImage>
      <CardContent onClick={props.onClick}>
        <CardTop>
          <CardUser>
            <UserAvatar src={props.image_avatar} alt="" />
            <UserName>{props.author}</UserName>
          </CardUser>
          <CardMeta>
            <img src="/icon-heart.png" alt="heart" style={{ width: "24px" }} />
            <span>{props.heart}</span>
          </CardMeta>
        </CardTop>
        <CardFooter>
          <CardTittle>{props.title}</CardTittle>
          <CardAmount secondary={props.secondary}>{props.viewer}</CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
