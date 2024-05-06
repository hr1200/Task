/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {store} from './Store/store';
import {Provider} from 'react-redux';

const Root = () => (
  <Provider store={store}>
    <App store={store} />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
