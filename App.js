import React, { Component } from 'react';
import { createAppContainer,DrawerNavigator} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';


import Login from './src/Pages/Login';
import Register from './src/Pages/Register';
import Dashbaord from './src/Pages/Dashboard';
import Api from './src/Pages/Api';



//Navigation_All_Screens
const MainNavigator = createStackNavigator({
//   Home: {
//     screen: Login,
//     navigationOptions: {
//       header: null,
//     }
//   },
//   Profile: {
//     screen: Register,
//     navigationOptions :{
//       header :null,
//     }
//  },
//  MainHome :{
//    screen :Dashbaord,
      
//   },
 List :{
      screen :Api,
      navigationOptions :{
              header :null,
            }
  },
});

const App = createAppContainer(MainNavigator);

export default App;

//type 1
// const drawernav = DrawerNavigator(
//   {
//      Main : {Screen: LoginScreen }
//   }
// );

// const stack = createStackNavigator(
//  {
//    Login: {Screen: HomeScreen},
//    drawer: {screen: SettingScreen},
//  }
// );

// export default drawernav;

// //type 2

// import React, { Component } from 'react';
// import { View, Dimensions, Image, PixelRatio, TouchableOpacity, Text } from 'react-native';

// import { DrawerItems ,createDrawerNavigator,createAppContainer} from 'react-navigation';


// import DrawerStack from "./src/DrawerComponent/Drawerstack";

// const SCREEN_WIDTH = Dimensions.get('window').width;
// const { width, height } = Dimensions.get("window");

// const DrawerNavigator = createDrawerNavigator(
//     {
//         DrawerStack: {
//             screen: DrawerStack,
//             navigationOptions: ({ navigation }) => ({
                
//             }),
//         },
//     },
   
//     {
     
//         drawerWidth: SCREEN_WIDTH * 0.8,
//         drawerOpenRoute: 'DrawerOpen',
//         drawerCloseRoute: 'DrawerClose',
//         drawerToggleRoute: 'DrawerToggle',
//         drawerPosition: 'right'
//     }
// )

// const Drawer = createAppContainer(DrawerNavigator);



// export default Drawer;

