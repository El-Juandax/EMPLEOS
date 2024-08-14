import { Text, View, StyleSheet, Image, Pressable } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export const OfertasAplicadas = () => {

    return (
      <View style={stykes.body}>
        <Text style={stykes.titulo}>Ofertas Aplicadas</Text>
        <TextInput style={stykes.busqueda} placeholder='Buscar'/>
        <Pressable style={stykes.botonB}>Buscar</Pressable>
        <View style={stykes.contenedor}>
             <View style={stykes.oferta}>   
             <Text><Image style={stykes.image} 
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/></Text>
                 <Text style={stykes.nombreempresa}>Nombre empresa</Text>
                 <Text style={stykes.informacion}>Informacion</Text>
                 <Pressable style={stykes.boton}>Quitar aplicativo</Pressable>
             </View>
             <View style={stykes.oferta}>   
             <Text><Image style={stykes.image} 
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/></Text>
                 <Text style={stykes.nombreempresa}>Nombre empresa</Text>
                 <Text style={stykes.informacion}>Informacion</Text>
                 <Pressable style={stykes.boton}>Quitar aplicativo</Pressable>
             </View>
             <View style={stykes.oferta}>   
             <Text><Image style={stykes.image} 
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/></Text>
                 <Text style={stykes.nombreempresa}>Nombre empresa</Text>
                 <Text style={stykes.informacion}>Informacion</Text>
                 <Pressable style={stykes.boton}>Quitar aplicativo</Pressable>
             </View>
             <View style={stykes.oferta}>   
             <Text><Image style={stykes.image} 
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/></Text>
                 <Text style={stykes.nombreempresa}>Nombre empresa</Text>
                 <Text style={stykes.informacion}>Informacion</Text>
                 <Pressable style={stykes.boton}>Quitar aplicativo</Pressable>
             </View>
             <View style={stykes.oferta}>   
             <Text><Image style={stykes.image} 
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/></Text>
                 <Text style={stykes.nombreempresa}>Nombre empresa</Text>
                 <Text style={stykes.informacion}>Informacion</Text>
                 <Pressable style={stykes.boton}>Quitar aplicativo</Pressable>
             </View>                       
        </View>
      </View>
    )
  
}
const stykes = StyleSheet.create({
    busqueda:{
        backgroundColor: 'white',
        height: 30,
        width: 90,
        position: 'absolute',
        bottom: "90%",
        right: "20%",
    },
    botonB:{
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#009c8c',
        color: 'white',
        height: 30,
        width: 50,
        position: 'absolute',
        bottom: "90%",
        right: "7.5%",
    },
    boton:{
        justifyContent:  'center',
        textAlign: 'center',
        marginRight: 50,
        marginLeft: 215,
        position: 'absolute',
        marginTop: 10,
        width: 80,
        height: 50,
        backgroundColor: '#009c8c',
        color: 'white',
    },
    informacion:{
        marginRight: 50,
        marginLeft: 120,
        position: 'absolute',
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 0,
    },
    nombreempresa:{
        width: 60,
        marginRight: 50,
        marginLeft: 50,
        position: 'absolute',
        marginTop: 0,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    image:{
        marginTop: 5,
        marginLeft: 10,
        width: 30,
        height: 30
    },
    oferta:{
        justifyContent: 'center',
        marginTop: 10,
        borderStyle: 'solid',
        borderColor: '#4c2882',
        borderWidth: 3,
        width: "97%",
        height: "17%",
    },
    contenedor:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        backgroundColor: 'white',
        width: "88%",
        height: "80%",
    },
    titulo:{
        position: 'absolute',
        bottom: "90%",
        right: "50%",
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    body:{
        flex:1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    }
    }
)

export default OfertasAplicadas