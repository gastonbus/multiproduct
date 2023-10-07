import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNav from './TabNav';
import AuthNav from './AuthNav';
import { useSelector } from 'react-redux';

const MainNav = () => {

  const user = useSelector((state) => state.authSlice.user);

  return (
    <NavigationContainer>
      {user ? <TabNav /> : <AuthNav />}
    </NavigationContainer>
  )
}

export default MainNav

const styles = StyleSheet.create({})