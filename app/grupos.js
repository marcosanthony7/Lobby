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

  const grupos = [
    { nome: 'Vavazinho', participantes: '1.000.000', logo: 'https://steamuserimages-a.akamaihd.net/ugc/1289667502762077035/0BBD690EF2F84B522A6E1D34EBE5F1513685C089/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true' },
    { nome: 'Carregados', participantes: '1.000.000', logo: 'https://steamuserimages-a.akamaihd.net/ugc/1289667502762077035/0BBD690EF2F84B522A6E1D34EBE5F1513685C089/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true' },
    { nome: 'Zueira', participantes: '1.000.000', logo: 'https://steamuserimages-a.akamaihd.net/ugc/1289667502762077035/0BBD690EF2F84B522A6E1D34EBE5F1513685C089/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true' },
    { nome: 'Pro Players', participantes: '500.000', logo: 'https://steamuserimages-a.akamaihd.net/ugc/1289667502762077035/0BBD690EF2F84B522A6E1D34EBE5F1513685C089/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true' },
    { nome: 'Tryhards', participantes: '500.000', logo: 'https://steamuserimages-a.akamaihd.net/ugc/1289667502762077035/0BBD690EF2F84B522A6E1D34EBE5F1513685C089/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Text style={styles.tituloHeader}>Grupos</Text>
        <Button buttonColor='#000000' textColor='#FFFFFF' style={styles.buttonHeader} onPress={() => router.push('/home')}>COMUNIDADES</Button>
      </View>
      <View style={styles.infoComunidade}>
        <Text style={styles.nomeComunidade}>Valorant BR</Text>
        <Text style={styles.descricaoComunidade}>Comunidade de Valorant</Text>
        <Text style={styles.quantParticipantes}>4.000.000 de participantes</Text>
        <Text style={styles.quantParticipantesOn}>2.000.000 de participantes online</Text>
      </View>
      <FlatList
        style={styles.container}
        data={grupos}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              style={styles.logo}
              source={{ uri: item.logo }}
            />
            <View style={styles.infoCard}>
              <Text style={styles.nomeGrupo}>{item.nome}</Text>
              <Text style={styles.participantesGrupo}>{item.participantes} de participantes</Text>
            </View>
            <Button buttonColor='#7C7C7C' textColor='#FFFFFF' style={styles.buttonCard}>SEGUIR</Button>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        scrollEnabled={false}
      />
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
    width: '40%',
    right: 30,
    top: 30,
    borderRadius: 10,
    padding: 2,
  },
  infoComunidade: {
    padding: 30,
    gap: 10,
  },
  nomeComunidade: {
    fontSize: 26,
    fontFamily: 'Roboto_700Bold',
  },
  descricaoComunidade: {
    fontSize: 20,
    fontFamily: 'Roboto_500Medium',
    color: '#7C7C7C',
  },
  quantParticipantes: {
    fontSize: 18,
    fontFamily: 'Roboto_500Medium',
  },
  quantParticipantesOn: {
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
    color: '#32CD32',
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
  nomeGrupo: {
    fontSize: 20,
    fontFamily: 'Roboto_700Bold',
  },
  participantesGrupo: {
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
