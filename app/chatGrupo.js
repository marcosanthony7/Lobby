import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

SplashScreen.preventAutoHideAsync();

export default function Home() {
    const [loaded, error] = useFonts({
        Roboto_500Medium,
        Roboto_700Bold,
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.tituloHeader}>Chat</Text>
            </View>
            <View style={styles.infoGrupo}>
                <Text style={styles.nomeGrupo}>Vavazinho</Text>
                <Text style={styles.descricaoGrupo}>Bora jogar um vavazinho?</Text>
                <Text style={styles.quantParticipantes}>1.000.000 de participantes</Text>
                <Text style={styles.quantParticipantesOn}>500.000 participantes online</Text>
            </View>
            <View style={styles.chatContainer}>
                <View style={styles.cardEnvio}>
                    <Text style={styles.mensagemTextoEnv}>Eae, alguém quer jogar?</Text>
                </View>
                <View style={styles.cardResposta}>
                    <Text style={styles.mensagemTextoResp}>Eae mano, bora</Text>
                </View>
            </View>
            <TextInput style={styles.inputMensagem} placeholder="Digitar" placeholderTextColor="#7C7C7C" />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        backgroundColor: '#2F80ED',
        padding: 30,
    },
    tituloHeader: {
        fontSize: 30,
        fontFamily: 'Roboto_700Bold',
        color: '#FFFFFF',
    },
    infoGrupo: {
        padding: 30,
        gap: 10,
    },
    nomeGrupo: {
        fontSize: 26,
        fontFamily: 'Roboto_700Bold',
    },
    descricaoGrupo: {
        fontSize: 20,
        fontFamily: 'Roboto_500Medium',
        color: '#7C7C7C',
    },
    quantParticipantes: {
        fontSize: 18,
        fontFamily: 'Roboto_500Medium',
    },
    quantParticipantesOn: {
        fontSize: 16,
        fontFamily: 'Roboto_500Medium',
        color: '#32CD32',
    },
    chatContainer: {
        flex: 1,
        paddingHorizontal: 30,
        paddingBottom: 60,
    },
    cardEnvio: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2F80ED',
        padding: 10,
        marginBottom: 10,
        borderRadius: 20,
        alignSelf: 'flex-end',
    },
    cardResposta: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        padding: 10,
        marginBottom: 10,
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    mensagemTextoEnv: {
        fontSize: 18,
        fontFamily: 'Roboto_500Medium',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    mensagemTextoResp: {
        fontSize: 18,
        fontFamily: 'Roboto_500Medium',
        textAlign: 'center',
    },
    inputMensagem: {
        position: 'absolute',
        bottom: 30,
        left: 30,
        right: 30,
        backgroundColor: '#D9D9D9',
        padding: 14,
        fontSize: 20,
        fontFamily: 'Roboto_500Medium',
        borderWidth: 1,
        borderColor: '#7C7C7C',
        borderRadius: 10,
    },
});
