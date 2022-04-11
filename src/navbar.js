import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import rendez_vous from'./components/rendez_vous';
import stock from'./components/stock';
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
        component={rendez_vous}
        options={{
          tabBarLabel: 'Prendre rendez-vous',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="form-select" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="stock"
        component={stock}
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