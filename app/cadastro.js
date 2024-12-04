import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { useRouter, Link } from 'expo-router';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

SplashScreen.preventAutoHideAsync();

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');
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

  const handleCadastrar = async () => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, senha);
      // Signed up
      router.replace('/');
    } catch (error) {
      console.error(error.code);
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastrar</Text>
      <Text style={styles.subtitulo}>E-mail</Text>
      <TextInput label="Email" value={email} onChangeText={setEmail} keyboardType='email-address' style={styles.input} autoCapitalize={"none"} />
      <Text style={styles.subtitulo}>Senha</Text>
      <TextInput label="Senha" value={senha} onChangeText={setSenha} secureTextEntry={true} style={styles.input} autoCapitalize={"none"} />
      <Text style={styles.subtitulo}>Repetir Senha</Text>
      <TextInput label="Repetir Senha" value={repetirSenha} onChangeText={setRepetirSenha} secureTextEntry={true} style={styles.input} autoCapitalize={"none"} />
      <Button onPress={handleCadastrar} loading={isLoading} buttonColor='#2F80ED' textColor='#FFFFFF' style={styles.button} disabled={isLoading}>CADASTRAR</Button>
      <View style={styles.containerLogo}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://t.ctcdn.com.br/mnCwSs6r1zVZvoeNtKOa9JSXs_g=/600x600/smart/i606944.png',
          }}
        />
        <Image
          style={styles.logo}
          source={{
            uri: 'https://t.ctcdn.com.br/DMxRsoFn2EzzWk6WaToT6sIidL8=/i489928.jpeg',
          }}
        />
        <Image
          style={styles.logo}
          source={{
            uri: 'https://t.ctcdn.com.br/aFp_I8ScTJJch32H29ImNebDEYU=/i489949.jpeg',
          }}
        />
        <Link href='/' style={styles.link}>Já tem conta? Logar-se</Link>
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
  containerLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  logo: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  link: {
    marginBottom: 20,
    fontSize: 18,
    color: '#2F80ED',
    alignSelf: 'flex-end',
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
