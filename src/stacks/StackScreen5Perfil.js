import { View, Text, Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PerfilScreen0 from '../screens/Stack5/PerfilScreen0';

const StackScreen5Perfi = () => {
    const IntoStack = createStackNavigator();
  
    return (
        <IntoStack.Navigator>
            <IntoStack.Screen 
                name="Perfil1" 
                component={PerfilScreen0}
                options={{
                    title:false,
                    headerStyle: {
                        backgroundColor: '#1F646D',
                        shadowColor:'transparent',
                    },
                }}/>
        </IntoStack.Navigator>
    )
}

export default StackScreen5Perfi