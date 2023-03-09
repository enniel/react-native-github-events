import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import typography from '@root/shared/theme/typography';
import colors from '@root/shared/theme/colors';

interface Styles {
  container: ViewStyle;
  headerButton: ViewStyle;
  errorView: ViewStyle;
  errorText: TextStyle;
  reloadButton: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerButton: {
    marginRight: 4,
    paddingHorizontal: 10,
  },
  errorView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  errorText: {
    ...typography.Heading4R,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  reloadButton: {
    marginTop: 10,
  },
});
