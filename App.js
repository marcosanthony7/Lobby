import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGAR</Text>
      <Text style={styles.subtitle}>Usuário/Email</Text>
      <TextInput style={styles.input} />
      <Text style={styles.subtitle}>Senha</Text>
      <TextInput style={styles.input} secureTextEntry={true} />
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
});
