import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './tabs/Home';
import CartScreen from './tabs/Cart';
import Ionicons from '@expo/vector-icons/Ionicons';
import clothesJson from "./assets/clothesData/clothes.json";

const Tab = createBottomTabNavigator();

export default function App() {
  const data = Object.values(clothesJson[0].data);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            }

            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
          
          tabBarActiveTintColor: 'turquoise',
          tabBarInactiveTintColor: 'gray',
        
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
