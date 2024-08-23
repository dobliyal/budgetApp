import React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image } from 'react-native-svg';
import { SvgProps } from 'react-native-svg';

interface Props extends SvgProps {}

const onboard1: React.FC<Props> = (props) => (
  <Svg width="375" height="444" viewBox="0 0 375 444" fill="none" {...props}>
    <Rect width="375" height="444" rx="30" fill="url(#pattern0_1_2080)" />
    <Defs>
      <Pattern id="pattern0_1_2080" patternContentUnits="objectBoundingBox" width="1" height="1">
        <Use xlinkHref="#image0_1_2080" transform="matrix(0.000822794 0 0 0.000694927 -0.289882 0)" />
      </Pattern>
</Defs>
</Svg>
);

export default onboard1;