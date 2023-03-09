import { ActivityIndicator } from 'react-native';
import colors from '@root/shared/theme/colors';

export const LoadingIndicator = () => {
  return <ActivityIndicator size="small" color={colors.primary} />;
};
