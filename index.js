import { registerRootComponent } from 'expo';

import App from './App';
import { AppRegistry } from 'react-native';
import { sisterss as appName } from './app.json';
import './firebaseConfig'; 
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
AppRegistry.registerComponent(appName, () => App); //
registerRootComponent(App);
