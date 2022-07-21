import React from "react";
import styled, { css } from "styled-components";
/*
 */

const StyledCard = styled.div`
  position: relative;
  width: auto;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .card-content {
    position: absolute;
    left: 50%;
    width: calc(100% - 36px);
    bottom: 0;
    transform: translate(-50%, 50%);
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
  }
  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .card-user {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
  }
  .user-name {
    font-weight: 300;
    font-size: 16px;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-tittle {
    font-size: 18px;
    font-weight: 500;
    color: black;
  }
  .card-amount {
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
  }
  .card-meta {
    display: flex;
    align-items: center;
    gap: 2px;
  }
`;
// const StyledCard = styled.div`
//   position: relative;
//   width: auto;
// `;

// const CardImage = styled.div`
//   height: 400px;
//   width: 100%;
//   border-radius: 8px;
// `;
// const CardImg = styled.img`
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border-radius: inherit;
// `;
const CardContent = styled.div`
  position: absolute;
  left: 50%;
  width: calc(100% - 36px);
  bottom: 0;
  transform: translate(-50%, 50%);
  background-color: white;
  z-index: 10;
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
    <StyledCard secondary={props.secondary}>
      <div className="card-image">
        <img
          alt=""
          src="https://cdn.dribbble.com/users/2400293/screenshots/15883991/media/c5a6d6098f4ec6a0ce1b38909d82a494.png?compress=1&resize=840x630&vertical=top"
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              className="user-avatar"
              src="https://cdn.dribbble.com/users/2400293/screenshots/15883991/media/c5a6d6098f4ec6a0ce1b38909d82a494.png?compress=1&resize=840x630&vertical=top"
              alt=""
            />
            <div className="user-name">@minhnq</div>
          </div>
          <div className="card-meta">
            <img src="/icon-heart.png" alt="heart" style={{ width: "24px" }} />
            <span>256</span>
          </div>
        </div>
        <div className="card-footer">
          <div className="card-tittle">Perfect</div>
          <div className="card-amount">
            12000 PSL
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
