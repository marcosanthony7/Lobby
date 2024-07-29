import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Image, Text, View } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

SplashScreen.preventAutoHideAsync();

export default function App() {
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
    <View>
      <View style={styles.header}>
        <Text style={styles.titulo}>Comunidades</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://steamuserimages-a.akamaihd.net/ugc/1289667502762077035/0BBD690EF2F84B522A6E1D34EBE5F1513685C089/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
            }}
          />
          <View style={styles.infoCard}>
            <Text style={styles.nomeComunidade}>Valorant BR</Text>
            <Text style={styles.participantesComunidade}>6.000.000 de participantes</Text>
          </View>
          <View style={styles.buttonCard}>
            <Button title="Seguindo" color="#2F80ED" />
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://pentagram-production.imgix.net/cc7fa9e7-bf44-4438-a132-6df2b9664660/EMO_LOL_02.jpg?rect=0%2C0%2C1440%2C1512&w=640&crop=1&fm=jpg&q=70&auto=format&fit=crop&h=672',
            }}
          />
          <View style={styles.infoCard}>
            <Text style={styles.nomeComunidade}>League Of Legends BR</Text>
            <Text style={styles.participantesComunidade}>8.000.000 de participantes</Text>
          </View>
          <View style={styles.buttonCard}>
            <Button title="Seguir" color="#7C7C7C" />
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/1e9117ff-a155-4cdd-9a93-8e176fc2fe1a/deh2wni-a79e8ea5-14a5-445f-8da4-c48ea97c037b.png',
            }}
          />
          <View style={styles.infoCard}>
            <Text style={styles.nomeComunidade}>CS:GO BR</Text>
            <Text style={styles.participantesComunidade}>2.000.000 de participantes</Text>
          </View>
          <View style={styles.buttonCard}>
            <Button title="Seguindo" color="#2F80ED" />
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Fortnite_F_lettermark_logo.png',
            }}
          />
          <View style={styles.infoCard}>
            <Text style={styles.nomeComunidade}>Fortnite BR</Text>
            <Text style={styles.participantesComunidade}>4.000.000 de participantes</Text>
          </View>
          <View style={styles.buttonCard}>
            <Button title="Seguir" color="#7C7C7C" />
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Rocket_League_coverart.jpg',
            }}
          />
          <View style={styles.infoCard}>
            <Text style={styles.nomeComunidade}>Rocket League BR</Text>
            <Text style={styles.participantesComunidade}>1.000.000 de participantes</Text>
          </View>
          <View style={styles.buttonCard}>
            <Button title="Seguir" color="#7C7C7C" />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2F80ED',
    padding: 30,
  },
  titulo: {
    fontSize: 30,
    fontFamily: 'Roboto_700Bold',
    color: '#FFFFFF'
  },
  container: {
    padding: 30,
    gap: 30,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    padding: 14,
    gap: 14,
    borderRadius: 10,
    shadowColor: '#7C7C7C',
    shadowRadius: 10,
  },
  infoCard: {
    flex: 1,
  },
  buttonCard: {
    justifyContent: 'center',
    width: '30%',
  },
  nomeComunidade: {
    fontSize: 20,
    fontFamily: 'Roboto_700Bold',
  },
  participantesComunidade: {
    fontSize: 14,
    fontFamily: 'Roboto_500Medium',
    color: '#7C7C7C',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
});
