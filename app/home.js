import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

SplashScreen.preventAutoHideAsync();

export default function Home() {
  const router = useRouter();

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

  const handleLogout = async () => {
    await signOut(auth);
    router.replace('/');
  }

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.tituloHeader}>Comunidades</Text>
        <Button onPress={handleLogout} buttonColor='#000000' textColor='#FFFFFF' style={styles.buttonHeader}>SAIR</Button>
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
          <Button buttonColor='#7C7C7C' textColor='#FFFFFF' style={styles.buttonCard}>SEGUIR</Button>
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
          <Button buttonColor='#7C7C7C' textColor='#FFFFFF' style={styles.buttonCard}>SEGUIR</Button>
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
          <Button buttonColor='#7C7C7C' textColor='#FFFFFF' style={styles.buttonCard}>SEGUIR</Button>
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
          <Button buttonColor='#7C7C7C' textColor='#FFFFFF' style={styles.buttonCard}>SEGUIR</Button>
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
          <Button buttonColor='#7C7C7C' textColor='#FFFFFF' style={styles.buttonCard}>SEGUIR</Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2F80ED',
    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tituloHeader: {
    fontSize: 30,
    fontFamily: 'Roboto_700Bold',
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
    gap: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    padding: 18,
    gap: 16,
    borderRadius: 10,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  infoCard: {
    flex: 1,
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
  buttonCard: {
    justifyContent: 'center',
    width: '30%',
    borderRadius: 10,
    padding: 2,
  },
});
