import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
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
    const [isLoading, setLoading] = useState(false);

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
        try {
            setLoading(true);
            await signOut(auth);
            router.replace('/');
        } catch (error) {
            console.error("Erro ao sair:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.tituloHeader}>Perfil</Text>
                <Button onPress={handleLogout} buttonColor='#000000' textColor='#FFFFFF' style={styles.buttonHeader} disabled={isLoading}>SAIR</Button>
            </View>
            <View style={styles.container}>
                <Text style={styles.textId}>{user.uid}</Text>
                <Text style={styles.textEmail}>{user.email}</Text>
                {/* <Text style={styles.descricao}>Descrição</Text> */}
            </View>
            {isLoading && (
                <View style={styles.loadingOverlay}>
                    <ActivityIndicator size="large" color="#2F80ED" />
                </View>
            )}
            <StatusBar style="auto" />
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
        top: 28,
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
    // descricao: {
    //     fontSize: 18,
    //     fontFamily: 'Rubik_500Medium',
    //     color: '#7C7C7C',
    //     marginTop: 10,
    // },
    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
