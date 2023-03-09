import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventsListScreen } from '@root/screens/EventsListScreen';
import { EventViewScreen } from '@root/screens/EventViewScreen';
import { Screens, RootStackScreenParamList } from '@root/shared/types';

const RootStack = createNativeStackNavigator<RootStackScreenParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={Screens.EventsList}
          component={EventsListScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={Screens.EventView}
          component={EventViewScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
