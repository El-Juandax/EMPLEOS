import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Feather from '@expo/vector-icons/Feather';

// screens 
import Dashboard from "./screens/Dashboard";
import Register from "./screens/Register"
import Login from "./screens/Login"
import HojaVida from "./screens/HojaVida";
import Ofertas from "./screens/Ofertas";
import OfertasAplicadas from "./screens/OfertasAplicadas";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
    return (
        <HomeStackNavigator.Navigator initialRouteName="Dashboard"
        screenOptions={{
            headerStyle: {
                backgroundColor: '#4c2882', // Cambia a tu color deseado
            },
            headerTintColor: 'white', // Color del texto y los iconos en el header
            headerTitleStyle: {
                fontWeight: 'bold', // Opcional: para hacer el título en negrita
            },
        }}>
            <HomeStackNavigator.Screen 
                name="Dashboard"
                component={Dashboard}
            />
            <HomeStackNavigator.Screen 
                name="Registro"
                component={Register}
            />
            <HomeStackNavigator.Screen 
                name="Login"
                component={Login}
            />
            <HomeStackNavigator.Screen 
                name="Ofertas"
                component={Ofertas}
            />
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs(){
    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                tabBarActiveTintColor: '#009c8c',
                tabBarStyle: {
                    backgroundColor: '#4c2882',  // Cambia a tu color deseado
                },
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={MyStack}
                options={{
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />

            <Tab.Screen
                name="Profile"
                component={HojaVida}
                options={{
                    tabBarLabel: 'Hoja de vida',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="OfertasAplicadas"
                component={OfertasAplicadas}
                options={{
                    tabBarLabel: 'Ofertas Aplicadas',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="briefcase" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
        
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}
