import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

import { signOut } from 'firebase/auth'
import { auth } from "../../../firebase";

import nubankLogo from '../../assets/nubank.png'

export default function Logado() {
    const navigation = useNavigation()

    const SignOut = async () => {
        await signOut(auth)
            .then(() => {
                console.log('Deslogado com sucesso!')
                navigation.navigate('MainPage')
            })
            .catch(error => console.log(error))
    }

    return (
        <View style={styles.container}>
            <Animatable.View
            animation="fadeInDown"
            style={styles.containerLogo}
            >
                <Animatable.Image 
                delay={1200}
                animation="fadeInDown"
                source={nubankLogo}
                style={{ width:"50%" }}
                resizeMode="contain"
                />
            </Animatable.View>
            <Animatable.View
            delay={600}
            animation="fadeInUp"
            style={styles.containerForm}
            >
                <Text style={styles.login}>Você está Logado!</Text>
                <TouchableOpacity 
                style={styles.buttonLogout}
                onPress={SignOut}
                >
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#820AD1',
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#820AD1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    login: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 28,
        marginBottom: 12,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonLogout: {
        backgroundColor: '#820AD1',
        position: 'absolute',
        borderRadius: 50,
        paddingVertical: 8,
        width: '50%',
        alignSelf: 'center',
        bottom: '38%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})