import React, { useState } from 'react';
import { View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import BaseStackNavigation from './src/navigation/BaseStackNavigation';

enableScreens();

const fetchFonts = async () => {
  return await Font.loadAsync(
     {
       'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
       'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
       'montserrat-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
       'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf')
     }
   );
 }

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish = {()=>setFontLoaded(true)} onError={()=>{console.log('Error');}}/>;
  }

  return <BaseStackNavigation/>
}

export default App;