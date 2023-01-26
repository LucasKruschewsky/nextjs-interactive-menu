export const screenBreakpoints = {
  xs: 360,
  sm: 520,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const mediaQueries = {
  maxWidthXS: `(max-width: ${screenBreakpoints.xs}px)`,
  minWidthXS: `(min-width: ${screenBreakpoints.xs + 1}px)`,

  maxWidthSM: `(max-width: ${screenBreakpoints.sm}px)`,
  minWidthSM: `(min-width: ${screenBreakpoints.sm + 1}px)`,

  maxWidthMD: `(max-width: ${screenBreakpoints.md}px)`,
  minWidthMD: `(min-width: ${screenBreakpoints.md + 1}px)`,

  maxWidthLG: `(max-width: ${screenBreakpoints.lg}px)`,
  minWidthLG: `(min-width: ${screenBreakpoints.lg + 1}px)`,

  maxWidthXL: `(max-width: ${screenBreakpoints.xl}px)`,
  minWidthXL: `(min-width: ${screenBreakpoints.xl + 1}px)`,
};
