import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

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

  const comunidades = [
    { nome: 'Valorant BR', participantes: '4.000.000', logo: 'https://steamuserimages-a.akamaihd.net/ugc/1289667502762077035/0BBD690EF2F84B522A6E1D34EBE5F1513685C089/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true' },
    { nome: 'League Of Legends BR', participantes: '3.000.000', logo: 'https://pentagram-production.imgix.net/cc7fa9e7-bf44-4438-a132-6df2b9664660/EMO_LOL_02.jpg?rect=0%2C0%2C1440%2C1512&w=640&crop=1&fm=jpg&q=70&auto=format&fit=crop&h=672' },
    { nome: 'Fortnite BR', participantes: '2.000.000', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Fortnite_F_lettermark_logo.png' },
    { nome: 'CS:GO BR', participantes: '1.000.000', logo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/1e9117ff-a155-4cdd-9a93-8e176fc2fe1a/deh2wni-a79e8ea5-14a5-445f-8da4-c48ea97c037b.png' },
    { nome: 'Rocket League BR', participantes: '500.000', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Rocket_League_coverart.jpg' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Text style={styles.tituloHeader}>Comunidades</Text>
        <Button buttonColor='#000000' textColor='#FFFFFF' style={styles.buttonHeader} onPress={() => router.push('/perfil')}>PERFIL</Button>
      </View>
      <Text style={styles.subtitulo}>Sugeridas</Text>
      <FlatList
        style={styles.container}
        data={comunidades}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              style={styles.logo}
              source={{ uri: item.logo }}
            />
            <View style={styles.infoCard}>
              <Text style={styles.nomeComunidade}>{item.nome}</Text>
              <Text style={styles.participantesComunidade}>{item.participantes} de participantes</Text>
            </View>
            <Button buttonColor='#7C7C7C' textColor='#FFFFFF' style={styles.buttonCard} onPress={() => router.push('/grupos')}>SEGUIR</Button>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        scrollEnabled={false}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#2F80ED',
    padding: 30,
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
  subtitulo: {
    padding: 30,
    fontSize: 26,
    fontFamily: 'Roboto_700Bold',
  },
  container: {
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 30,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    padding: 18,
    gap: 16,
    borderRadius: 20,
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
    fontSize: 16,
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
