import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Restaurant from './screens/Restaurant';
import Scan from "./screens/Scan"
import Basket from "./screens/Basket"
const MainNavigator = createStackNavigator(
  {
    Restaurant,
    Scan,
    Basket
  },
  {
    initialRouteName: 'Scan'
  }
);

const App = createAppContainer(MainNavigator);

export default App;
