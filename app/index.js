import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { useRouter, Link } from 'expo-router';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const [loaded, error] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const handleLogin = async () => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      // Signed in
      const user = userCredential.user;
      console.log(user);
      router.replace('/home');
    } catch (error) {
      Alert.alert('Erro', error.message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Logar</Text>
      <Text style={styles.subtitulo}>E-mail</Text>
      <TextInput label="Email" value={email} onChangeText={setEmail} keyboardType='email-address' style={styles.input} autoCapitalize={"none"} />
      <Text style={styles.subtitulo}>Senha</Text>
      <TextInput label="Senha" value={senha} onChangeText={setSenha} secureTextEntry={true} style={styles.input} autoCapitalize={"none"} />
      <Button onPress={handleLogin} loading={isLoading} buttonColor='#2F80ED' textColor='#FFFFFF' style={styles.button} disabled={isLoading}>LOGAR</Button>
      <Link href='/cadastro' style={styles.link}>Novo? Cadastrar-se</Link>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 30,
    gap: 18,
  },
  titulo: {
    fontSize: 30,
    fontFamily: 'Nunito_700Bold',
    color: '#2F80ED',
  },
  subtitulo: {
    fontSize: 18,
    fontFamily: 'Nunito_400Regular',
    color: '#2F80ED',
  },
  input: {
    borderWidth: 2,
    borderColor: '#2F80ED',
    paddingBottom: 4,
    width: '100%',
  },
  button: {
    borderRadius: 10,
    padding: 8,
  },
  link: {
    fontSize: 18,
    color: '#2F80ED',
    fontFamily: 'Nunito_700Bold',
  },
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
