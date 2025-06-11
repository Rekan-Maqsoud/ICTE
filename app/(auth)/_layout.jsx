import { Stack } from 'expo-router';
import {  StyleSheet } from 'react-native';

const _layout = () => {
  return (
    <Stack>
    <Stack.Screen name='signIn'
    options={{headerShown: false}}/>

    <Stack.Screen name='signup'
    options={{headerShown: false}}/>
    </Stack>
    )
}

export default _layout

const styles = StyleSheet.create({})