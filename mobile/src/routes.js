import React from 'react';
import { NavigatorContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Incidents from './pages/Incidents';
import Detail  from './pages/Detail';

const AppStack = createStackNavigator();

export default function Routes(){
    return (
        <NavigatorContainer >
            <AppStack.Navigator screenOptions={{headerShown: false}} >
                <AppStack.Scren name="Incidents" component={Incidents} />
                <AppStack.Scren name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigatorContainer>
    );
}