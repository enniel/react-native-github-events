import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import typography from '@root/shared/theme/typography';
import colors from '@root/shared/theme/colors';

interface Styles {
  wrapper: ViewStyle;
  avatar: ImageStyle;
  content: ViewStyle;
  displayLogin: TextStyle;
  event: TextStyle;
}

export const ITEM_HEIGHT = 60;

export const styles = StyleSheet.create<Styles>({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: ITEM_HEIGHT,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.grayLight,
  },
  content: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  displayLogin: {
    ...typography.Heading6SB,
  },
  event: {
    ...typography.Body2,
    color: colors.blue,
  },
});
