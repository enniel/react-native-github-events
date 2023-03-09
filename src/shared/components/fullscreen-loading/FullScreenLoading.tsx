import { View } from 'react-native';
import { LoadingIndicator } from '@root/shared/components/loading-indicator';
import { styles } from './styles';

export const FullScreenLoading = () => (
  <View style={styles.loadingContainer}>
    <LoadingIndicator />
  </View>
);
