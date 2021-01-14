
import React from 'react';
import { SafeAreaView } from 'react-native';

import HeaderBar from './components/HeaderBar'
import MainBanner from './components/MainBanner'
import SecBanner from './components/SecBanner'

//flex:1 para que a view pegue a tela toda 1 = 100%
const Home = () => {

return(
    <SafeAreaView style={{ flex: 1} }> 
        <HeaderBar/>
        <MainBanner />
        <SecBanner />
    </SafeAreaView>
  )
}

export default Home