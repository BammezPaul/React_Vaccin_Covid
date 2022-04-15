import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Rendez_vous from'./components/Rendez_vous';
import Stock from'./components/Stock';
import Accueil from'./components/Accueil';

const Tab = createBottomTabNavigator();

function MyTabs() {

  return (
    <Tab.Navigator
      initialRouteName="accueil"
      screenOptions={{
        tabBarActiveTintColor: '#2b8eff',
        headerShown: false
      }}
    >
        <Tab.Screen
        name="Accueil"
        component={Accueil}
        options={{
            tabBarLabel: 'Accueil',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
        }}
      />
      <Tab.Screen
        name="rendez_vous"  
        component={Rendez_vous}
        options={{
          tabBarLabel: 'Prendre rendez-vous',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="form-select" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="stock"
        component={Stock}
        options={{
          tabBarLabel: 'Stock',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="basket" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;