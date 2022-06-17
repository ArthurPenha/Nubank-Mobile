import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation} from "@react-navigation/native";

import nubankLogo from '../../assets/nubank.png'

export default function MainPage() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Animatable.View
            animation="fadeInDown"
            style={styles.containerLogo}
            >
                <Animatable.Image 
                delay={600}
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
                <TouchableOpacity 
                style={styles.buttonCreate}
                onPress={ () => navigation.navigate('Register') }
                >
                    <Text style={styles.buttonText}>Criar conta</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.buttonLogin}
                onPress={ () => navigation.navigate('Login') }
                >
                    <Text style={styles.buttonText}>Entrar</Text>
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
        backgroundColor: '#820AD1',
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
    },
    buttonLogin: {
        position: 'absolute',
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 8,
        width: '80%',
        height: '18%',
        alignSelf: 'center',
        bottom: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonCreate: {
        position: 'absolute',
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 8,
        width: '80%',
        height: '18%',
        alignSelf: 'center',
        bottom: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})