import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SvgProps {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  style?: object;
}

const LogoutIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = "#374151",
  style,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    style={style}
  >
    <Path
      d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default LogoutIcon;
