import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import colors from '@root/shared/theme/colors';
import typography from '@root/shared/theme/typography';

interface Styles {
  container: ViewStyle;
  title: TextStyle;
  left: ViewStyle;
  right: ViewStyle;
  titleWrapper: ViewStyle;
  backButton: ViewStyle;
}

const HEADER_HEIGHT = 56;

export const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    height: HEADER_HEIGHT,
    maxHeight: HEADER_HEIGHT,
    borderBottomColor: colors.grayLight,
    borderBottomWidth: 1,
  },
  title: {
    ...typography.Heading5R,
    color: colors.black,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  left: {
    marginRight: 'auto',
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    marginLeft: 'auto',
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: HEADER_HEIGHT,
    height: HEADER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
