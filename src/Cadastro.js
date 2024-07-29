import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Image, Text, TextInput, View } from 'react-native';

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

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastrar</Text>
      <Text style={styles.subtitulo}>Usuário</Text>
      <TextInput style={styles.input} />
      <Text style={styles.subtitulo}>E-mail</Text>
      <TextInput style={styles.input} />
      <Text style={styles.subtitulo}>Senha</Text>
      <TextInput style={styles.input} secureTextEntry={true} />
      <View style={{ width: '100%' }}>
        <Button title="Registrar" color="#2F80ED" />
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
      </View>
      <View>
        <Text style={styles.cadastrarLink}>Já possui conta? Logar-se</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 40,
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
    gap: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginRight: 4,
  },
  cadastrarLink: {
    width: '100%',
    fontSize: 18,
    color: '#2F80ED',
    alignSelf: 'flex-start',
    fontFamily: 'Nunito_700Bold',
  },
});
