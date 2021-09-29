import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './views/Home';
import DetailsScreen from './views/Details';
import CartScreen from './views/Cart';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: { title: 'Home' }
        },
        Details: {
            screen: DetailsScreen,
            navigationOptions: { title: 'Details' }
        },
        // Cart: {
        //     screen: CartScreen,
        //     navigationOptions: { title: 'Cart' }
        // }
    }, 
    {
        initialRouteName: "Home"
    }
);

export default AppNavigator;