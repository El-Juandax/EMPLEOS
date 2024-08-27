import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export const Login = () => {
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const navigation = useNavigation();

  const handleButtonPress = async(userEmail, userPassword) => {
    console.log('Email:', userEmail);
    console.log('Password:', userPassword);

    const Data = {
      user: userEmail,
      password: userPassword,
    }

    await AsyncStorage.setItem('Datos del usuario:', JSON.stringify(Data));

    navigation.navigate('Ofertas');
  };

  return (
    <View style={styles.body}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Iniciar Sesión</Text>
        <View
          style={{ backgroundColor: '#4c2882', width: 100, height: 2, marginBottom: 10 }}
        ></View>
        <TextInput
          style={styles.cajaTexto}
          placeholder='Correo'
          onChangeText={(text) => setEmail(text)}
          value={userEmail}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.cajaTexto}
          placeholder='Contraseña'
          onChangeText={(text) => setPassword(text)}
          value={userPassword}
        />
        <TouchableOpacity
          style={styles.botonRegistro}
          onPress={() => navigation.navigate('Registro')}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonLogin}
          onPress={() => handleButtonPress(userEmail, userPassword)}
        >
          <Text style={{ fontSize: 20 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  botonLogin: {
    alignSelf: 'center',
    cursor: 'pointer',
    top: -24,
    justifyContent: 'center',
    alignItems: 'center',
    left: 70,
    width: 110,
    height: 50,
    backgroundColor: '#4c2882',
  },
  botonRegistro: {
    cursor: 'pointer',
    top: 25,
    justifyContent: 'center',
    alignItems: 'center',
    right: 70,
    width: 110,
    height: 50,
    backgroundColor: '#009c8c',
  },
  cajaTexto: {
    color: 'black',
    marginBottom: 6.5,
    width: 280,
    height: 35,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderStyle: 'solid',
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
    alignItems: 'center',
    width: 320,
    height: 270,
    display: 'flex',
    color: 'white',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderWidth: 1,
  },
  titulo: {
    marginBottom: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Login;