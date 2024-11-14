import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { Rubik_500Medium, Rubik_700Bold } from '@expo-google-fonts/rubik';

SplashScreen.preventAutoHideAsync();

export default function Perfil() {
    const user = auth.currentUser;
    const router = useRouter();

    const [loaded, error] = useFonts({
        Rubik_500Medium,
        Rubik_700Bold,
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    const handleLogout = async () => {
        await signOut(auth);
        router.replace('/');
    }

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.tituloHeader}>Perfil</Text>
                <Button onPress={handleLogout} buttonColor='#000000' textColor='#FFFFFF' style={styles.buttonHeader}>SAIR</Button>
            </View>
            <View style={styles.container}>
                <Text style={styles.textId}>{user.uid}</Text>
                <Text style={styles.textEmail}>{user.email}</Text>
                <Text style={styles.descricao}>Descrição</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#2F80ED',
        padding: 30,
    },
    tituloHeader: {
        fontSize: 30,
        fontFamily: 'Rubik_700Bold',
        color: '#FFFFFF'
    },
    buttonHeader: {
        position: 'absolute',
        width: '30%',
        right: 30,
        top: 30,
        borderRadius: 10,
        padding: 2,
    },
    container: {
        padding: 30,
        gap: 10,
    },
    textId: {
        fontSize: 20,
        fontFamily: 'Rubik_700Bold',
    },
    textEmail: {
        fontSize: 16,
        fontFamily: 'Rubik_500Medium',
        color: '#7C7C7C',
    },
    descricao: {
        fontSize: 18,
        fontFamily: 'Rubik_500Medium',
        color: '#7C7C7C',
        marginTop: 20,
    },
});
