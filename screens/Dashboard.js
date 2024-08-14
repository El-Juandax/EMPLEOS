import { Text, View, Button, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export const Dashboard = () => {

    const navigation = useNavigation();

    return (
        
        <View style={styles.body}>
            <View style={styles.contenedor}>
            <Text style={styles.titleHomeScreen}>
                Dashboard
            </Text>

            <TouchableOpacity
                style={styles.touchableStyle}
                onPress={() => navigation.navigate('Registro')}
            >
                <Text style={styles.textButtonStack}>
                    Registrarse
                </Text>
            </TouchableOpacity>
            </View>
            

        </View>
    )
}


const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: 'white',
        width: "70%",
        height: "50%"       
    },
    body:{
        flex:1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleHomeScreen: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: "20%"
    },
    touchableStyle: {
        backgroundColor: '#009c8c',
        padding: 10,
        marginTop: "20%",
        width: "50%",
        alignSelf: "center",
        borderRadius: 10,
    },
    textButtonStack: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    }

})

export default Dashboard