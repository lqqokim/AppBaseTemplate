import React from 'react';
import {Button, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../AppInner';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignIn = ({navigation}: SignInScreenProps) => {
  function onLogin() {
    navigation.push('Main');
  }

  return (
    <View>
      <Button onPress={onLogin} title="Login" color="#841584" />
    </View>
  );
};

export default SignIn;
