import { Text, View, StyleSheet, TextInput } from 'react-native'
import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

export const RegisterComponent = () => {
  const [text, onChangeText] = React.useState('')
  const navigation = useNavigation();
    return (
    <View style={styles.body}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contenedor}>
          
          <Text style={styles.titulo}>Registro</Text>
          <View style={{backgroundColor: '#4c2882', width: 100, height: 2, marginBottom: 0}}></View>
          <TextInput style={styles.cajaTexto} placeholder='Nombres' onChangeText={onChangeText}/>
          <TextInput style={styles.cajaTexto} placeholder='Apellidos' onChangeText={onChangeText}/>
          <TextInput style={styles.cajaTexto} placeholder='Cedula' onChangeText={onChangeText}/>
          <TextInput style={styles.cajaTexto} placeholder='Telefono' onChangeText={onChangeText}/>
          <TextInput style={styles.cajaTexto} placeholder='Direccion' onChangeText={onChangeText}/>
          <TextInput style={styles.cajaTexto} placeholder='Correo' onChangeText={onChangeText}/>
          <TextInput secureTextEntry={true} style={styles.cajaTexto} placeholder='Contraseña' onChangeText={onChangeText} />
          <TouchableOpacity
                style={styles.botonRegistro}
                onPress={() => navigation.navigate('Registro')}
            ><Text style={{color: "white", fontSize: 15}}>Registrarse</Text> 
                <Text style={styles.textButtonStack}>
                    
                </Text>
            </TouchableOpacity> 
          <TouchableOpacity
                style={styles.botonLogin}
                onPress={() => navigation.navigate('Login')}
            ><Text style={{fontSize: 15}}>Login</Text>
                <Text style={styles.textButtonStack}>
                    
                </Text>
            </TouchableOpacity>
  

        </View>
        </ScrollView>
    </View>


    )

  }

  const styles = StyleSheet.create({
    botonLogin:{
      alignSelf: "center",
      cursor: 'pointer',
      top: -24,
      justifyContent: "center",
      alignItems: "center",
      left: 70,
      width: 110,
      height: 50,
      backgroundColor: "#4c2882",

        },


    botonRegistro:{
      cursor: 'pointer',
      top:25,
      justifyContent: "center",
      alignItems: "center",
      right: 70,
      width: 110,
      height: 50,
      backgroundColor: "#009c8c",
        },


        cajaTexto:{
            color: "black",
            marginBottom: 6.5,
            width: 280,
            height: 35,
            margin: 8,
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            backgroundColor: "white",
            borderTopColor: "white",
            borderRightColor: "white",
            borderLeftColor: "white",
            borderStyle: "solid",
          },


    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange', 
      },


      contenedor: {
        marginTop: 20,
        borderStyle: 'solid',
        alignItems: "center",
        width: 320,
        height: 510,
        display: "flex",
        color: 'white',
        backgroundColor: 'white',
        justifyContent: "center",
        borderWidth: 1,
      },

    titulo:{
      marginBottom: 1,
      fontSize: 15,
      fontWeight: "bold",
      color: "black"
    }
  }) 

export default RegisterComponent