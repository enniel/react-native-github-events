import Svg, { SvgProps, Path } from 'react-native-svg';
import colors from '@root/shared/theme/colors';

interface ChevronLeftProps extends SvgProps {
  size?: number;
}

export const ChevronLeft = ({
  size = 25,
  color = colors.black,
  ...props
}: ChevronLeftProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M16.5667 2.79179C17.141 3.33685 17.1684 4.24819 16.6279 4.82732L9.389 12.5833L16.6279 20.3392C17.1684 20.9183 17.141 21.8297 16.5667 22.3747C15.9924 22.9198 15.0887 22.8922 14.5481 22.313L6.38813 13.5702C5.87062 13.0157 5.87062 12.1508 6.38813 11.5963L14.5481 2.85347C15.0887 2.27434 15.9924 2.24672 16.5667 2.79179Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
};
