import { Text, View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web'

export const HojaVida = () => {

    return (

        
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.caja}>
        <Image 
          style={styles.image} 
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Text style={styles.cajaTitulo}>Datos de Usuario </Text>
        <View style={styles.info}>
           <View style={styles.datosU1}>
              <Text style={styles.texto}>Nombre:</Text>
              <Text style={styles.texto}>Edad:</Text>
              <Text style={styles.texto}>Teléfono:</Text>
              <Text style={styles.texto}>Email:</Text>
              <Text style={styles.texto}>Dirección:</Text>
            </View>

            <View style={styles.datosU2}>
        
              <Text style={styles.texto}>Juan Gonzalez</Text>
              <Text style={styles.texto}>17</Text>
              <Text style={styles.texto}>3107553111</Text>
              <Text style={styles.texto}>juansalo2530@gmail.com</Text>
              <Text style={styles.texto}>Dg 57 a bis c sur #81j42 </Text>
            </View>
        </View>
        <Text style={styles.cajaTitulo}>Perfil Laboral</Text>
        <View style={styles.infoP}>
            <Text style={styles.textoP}>Soy estudiante de análisis y desarrollo de software, enfocado al
               desarrollo de software a través de las herramientas python, Java,
               JavaScript, Html, Css, manejo de bases de datos MySQL y
               resolución de problemas lógicos.
            </Text>
        </View>
        <Text style={styles.cajaTitulo}>Skills</Text>
        <View style={styles.info}>
           <View style={styles.datosS1}>
                       
              <Text style={styles.texto}>Lenguajes:</Text>
              <Text style={styles.texto}>Java</Text>
              <Text style={styles.texto}>JavaScript</Text>
              <Text style={styles.texto}>MySQL</Text>
              <Text style={styles.texto}>Python</Text>
              <Text style={styles.texto}>Html</Text>   
            </View>

            <View style={styles.datosS2}>
        
              <Text style={styles.texto}>Años:</Text>
              <Text style={styles.texto}>1</Text>
              <Text style={styles.texto}>3</Text>
              <Text style={styles.texto}>3</Text>
              <Text style={styles.texto}>1</Text>
              <Text style={styles.texto}>3</Text>
            </View>
        </View>
        <Text style={styles.cajaTitulo}>Otros</Text>
        <View style={styles.infoO}>
            <Text style={styles.textoO}>Sigue mi portafolio para mas información</Text>
            <Text style={styles.textoO}>...</Text>
        </View>
       </View>
       </ScrollView>
      </View>
      
    )
}

const styles = StyleSheet.create({
    caja:{
        marginTop: 20,
        backgroundColor: 'white',
        width: 350,
        alignItems: 'center',
        height: 730

    },
    datosS1:{
        marginRight: 170,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    datosS2:{
        position: 'absolute',
        top: -0.4,
        marginLeft: 170,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoP:{
        textAlign: 'center'
    },
    textoO:{
        textAlign: 'center'
    },
    infoO:{ 
        width: 270,
        height: 120,
        marginTop: 6,
        textAlign: 'center'
    },
    infoP:{ 
        width: 270,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    datosU1:{
        width: 100,
        height: 120,
        marginRight: 170,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    datosU2:{
        position: 'absolute',
        top: -2.5,
        marginLeft: 110,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto:{
        marginTop: 6,
    },
    info:{ 
        justifyContent: 'center',
        display: 'flex',
    },
    body: {
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: 'orange',
        alignItems: 'center',
    },
    image: {
        width: 100, 
        height: 100, 
        borderRadius: 50, 
        marginTop: 25, 
        marginBottom: 25,
    },
    cajaTitulo: {
        marginTop: 10,
        height: 22,
        width: 300,
        backgroundColor: '#4c2882',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center', 
        lineHeight: 22,
    }
})

export default HojaVida