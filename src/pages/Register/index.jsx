import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../../firebase";

import nubankLogo from '../../assets/nubank.png'

import leftArrow from '../../assets/caret-left.png'

/* import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    email: yup.string().email("Email Inválido").required("Digite seu email"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Digite sua senha")
}) */

export default function Register() {
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createUser = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(`UID do usuário - ${res.user.uid}`)
                alert('Cadastrado realizado com sucesso!')
                navigation.navigate('Login')
            })
            .catch(erro => alert('Erro ao se cadastrar'))
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('MainPage')}
                style={styles.btnDirect}><Text></Text>
            </TouchableOpacity>
        <Animatable.Image
            source={leftArrow}
            style={styles.arrow}
        />
            <Animatable.View delay={400} style={styles.containerLogo}>
                <Animatable.Image
                    delay={600}
                    animation="fadeInDown"
                    source={nubankLogo}
                    style={{ width: "50%" }}
                    resizeMode="contain"
                />
            </Animatable.View>

            <Animatable.View animation={"fadeInUp"} delay={800} style={styles.containerForm}>
                <Text style={styles.message}>Cadastro</Text>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="  Digite seu Email..."
                    style={styles.input}
                    value={email}
                    onChangeText={e => setEmail(e)}
                />
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="  Digite sua Senha..."
                    style={styles.input}
                    value={password}
                    onChangeText={e => setPassword(e)}
                    secureTextEntry
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={createUser}
                >
                    <Text style={styles.buttonText}>Criar conta</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.registerText}>Já possui uma conta? <Text style={styles.color}>Clique aqui</Text> para fazer Login</Text>
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
    message: {
        color: '#000',
        fontSize: 28,
        marginTop: 16,
        marginBottom: 6,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 3,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 14
    },
    color: {
        color: '#820AD1',
        textDecorationLine: "underline",
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        borderRadius: 12,
        height:40,
        marginBottom: 12,
        fontSize:16
    },
    button: {
        backgroundColor: '#820AD1',
        width: '100%',
        borderRadius: 12,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#a1a1a1'
    },
    arrow: {
        marginTop: 2,
        zIndex: 2,
        marginBottom: -40,
        justifyContent: 'flex-start',
        width: '11%',
        height: '6%'
    },
    btnDirect: {
        position: 'absolute',
        zIndex: 3,
        padding: 13
    }
})