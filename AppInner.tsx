import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';

import Home from './src/screens/Home';
import Posts from './src/screens/Posts';
import MyInfo from './src/screens/MyInfo';

/**
 * Root Stack에 포함되는 화면 정의
 */
export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Main: undefined;
};

/**
 * Main Bottom Tab에 포함되는 화면 정의
 */
export type BottomTabParamList = {
  Home: undefined;
  Posts: undefined;
  MyInfo: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const MainBottomTab = createBottomTabNavigator<BottomTabParamList>();

const MainBottomTabScreen = () => {
  return (
    <MainBottomTab.Navigator initialRouteName="Home">
      <MainBottomTab.Screen name="Home" component={Home} />
      <MainBottomTab.Screen
        name="Posts"
        component={Posts}
        options={{
          title: 'Post List',
        }}
      />
      <MainBottomTab.Screen
        name="MyInfo"
        component={MyInfo}
        options={{
          title: 'My Info',
        }}
      />
    </MainBottomTab.Navigator>
  );
};

const RootStackScreens = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="SignIn"
        component={SignIn}
        options={{title: 'Sign In'}}
      />
      <RootStack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: 'Sign Up'}}
      />
      <RootStack.Screen
        name="Main"
        component={MainBottomTabScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

const AppInner = () => {
  return (
    <NavigationContainer>
      <RootStackScreens />
    </NavigationContainer>
  );
};

export default AppInner;
