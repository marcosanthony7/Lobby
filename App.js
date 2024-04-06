import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Image, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGAR</Text>
      <Text style={styles.subtitle}>Usuário/Email</Text>
      <TextInput style={styles.input} />
      <Text style={styles.subtitle}>Senha</Text>
      <TextInput style={styles.input} secureTextEntry={true} />
      <View style={{ width: '100%' }}>
        <Button title="Logar" color="blue" />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
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
        <Text style={[styles.recuperarSenha, { marginBottom: 20 }]}>Esqueceu a senha?</Text>
      </View>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.registrarLink}>Novo? Registrar-se</Text>
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
    padding: 40,
    gap: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    paddingLeft: 10,
    width: '100%',
  },
  logo: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
  },
  recuperarSenha: {
    fontSize: 15,
    color: 'blue',
    alignSelf: 'flex-end',
  },
  registrarLink: {
    fontSize: 15,
    color: 'blue',
    alignSelf: 'flex-start',
  },
});
