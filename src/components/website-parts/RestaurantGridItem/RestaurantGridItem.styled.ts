import styled from "styled-components";

export const RestaurantGridItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
`;

export const RestaurantImage = styled.div<{
  backgroundImgUrl: string;
}>`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 200px;
  background: center / cover no-repeat url(${(props) => props.backgroundImgUrl});
`;

export const RestaurantDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  color: var(--textColor);

  background-color: var(--backgroundColorHigher);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  padding: var(--spacingVeryShort) var(--spacingShort);

  .restaurant-item-name {
    font-weight: 700;
    margin-bottom: var(--spacingShort);
  }
`;
