import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import colors from '@root/shared/theme/colors';

interface Styles {
  container: ViewStyle;
  wrapper: ViewStyle;
  actor: ViewStyle;
  actorData: ViewStyle;
  actorName: TextStyle;
  actorUrl: TextStyle;
  hr: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    padding: 16,
    paddingTop: 34,
  },
  actor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actorData: {
    flex: 1,
    marginLeft: 15,
  },
  actorName: {
    marginBottom: 15,
    fontSize: 24,
    fontWeight: 'bold',
  },
  actorUrl: {
    fontSize: 16,
  },
  hr: {
    height: 1,
    marginVertical: 45,
    backgroundColor: colors.grayLight,
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
