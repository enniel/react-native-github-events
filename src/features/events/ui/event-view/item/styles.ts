import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  wrapper: ViewStyle;
  label: TextStyle;
  text: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginVertical: 15,
  },
  label: {
    flex: 0.3,
    paddingRight: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'lowercase',
  },
  text: {
    flex: 0.7,
    fontSize: 18,
    lineHeight: 24,
  },
});
