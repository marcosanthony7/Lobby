import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Image } from 'react-native';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import { FirebaseError } from 'firebase/app';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

SplashScreen.preventAutoHideAsync();

export default function App() {
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

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

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
      <TextInput style={styles.input} label="Email" value={email} onChangeText={setEmail} keyboardType='email-address' />
      <Text style={styles.subtitulo}>Senha</Text>
      <TextInput style={styles.input} label="Senha" value={senha} onChangeText={setSenha} secureTextEntry={true} />
      <View style={{ width: '100%' }}>
        <Button title="Logar" color="#2F80ED" onPress={handleLogin} loading={isLoading}/>
      </View>
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
        <Text style={styles.recuperarSenha}>Esqueceu a senha?</Text>
      </View>
      <Link href='/cadastro'>Novo? Cadastrar-se</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 40,
    gap: 18,
  },
  titulo: {
    fontSize: 30,
    fontFamily: 'Nunito_700Bold',
    color: '#2F80ED',
  },
  subtitulo: {
    fontSize: 16,
    fontFamily: 'Nunito_400Regular',
    color: '#2F80ED',
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#2F80ED',
    padding: 6,
    paddingLeft: 10,
    width: '100%',
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
  recuperarSenha: {
    marginBottom: 20,
    fontSize: 16,
    color: '#2F80ED',
    alignSelf: 'flex-end',
    fontFamily: 'Nunito_700Bold',
  },
  cadastrarLink: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 18,
    color: '#2F80ED',
    alignSelf: 'flex-start',
    fontFamily: 'Nunito_700Bold',
  },
});