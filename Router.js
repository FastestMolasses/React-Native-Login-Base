import { TabNavigator } from 'react-navigation';

import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';

const mainAppColor = '#0AB9FF';

export const tabNav = TabNavigator(
    {
        SignIn: {
            screen: SignInPage,
            navigationOptions: {
                tabBarLabel: 'Sign In',
                // tabBarIcon: ({ tintColor }) => (
                //     <Picture
                //         source={require('./src/imgs/icons/Home.png')}
                //         size={iconSize}
                //         tintColor={tintColor}
                //     />
                // ),
            },
        },
        SignUp: {
            screen: SignUpPage,
            navigationOptions: {
                tabBarLabel: 'Sign Up',
                // tabBarIcon: ({ tintColor }) => (
                //     <Picture
                //         source={require('./src/imgs/icons/Home.png')}
                //         size={iconSize}
                //         tintColor={tintColor}
                //     />
                // ),
            },
        },
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        tabBarOptions: {
            activeTintColor: mainAppColor,
            inactiveTintColor: 'gray',
            showLabel: true,
            showIcon: false,
            style: {
                backgroundColor: mainAppColor,
            },
            labelStyle: {
                fontSize: 16,
            },
            tabStyle: {
                paddingVertical: 5,
                marginVertical: 0,
            },
            indicatorStyle: {
                backgroundColor: 'transparent',
            },
        },
        swipeEnabled: false,
    },
);
