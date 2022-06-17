import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainPage from '../pages/MainPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Logado from '../pages/Logado';

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
    return(
        <Navigator>
            <Screen 
            name="MainPage"
            component={MainPage}
            options={{ headerShown: false }}
            />

            <Screen 
            name="Login"
            component={Login}
            options={{ headerShown: false }}
            />

            <Screen 
            name="Register"
            component={Register}
            options={{ headerShown: false }}
            />

            <Screen 
            name="Logado"
            component={Logado}
            options={{ headerShown: false }}
            />
        </Navigator>
    )
}