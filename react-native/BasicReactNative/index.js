import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
// import HomeScreen from './src/components/HomeScreen';
// import BasicSectionList from './src/components/BasicSectionList';
// import BasicFlatList from './src/components/BasicFlatList';
// import FlashMessage from './src/components/FlashMessage';
// import DateTimePickerTester from './src/components/DateTimePickerTester';

AppRegistry.registerComponent(appName, () => App);
