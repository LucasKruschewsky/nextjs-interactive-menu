import styled from "styled-components";

const DARK_OVERLAY = "dark";
const LIGHT_OVERLAY = "light";

interface Props {
  overlayColor?: typeof DARK_OVERLAY | typeof LIGHT_OVERLAY;
  overlayOpacity?: number;
}

export const ImageOverlay = styled.div<Props>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: ${({
    overlayColor = DARK_OVERLAY,
    overlayOpacity = 10,
  }) => {
    if (overlayColor === DARK_OVERLAY) return `#000000${overlayOpacity}`;
    if (overlayColor === LIGHT_OVERLAY) return `#ffffff${overlayOpacity}`;
  }};
`;
