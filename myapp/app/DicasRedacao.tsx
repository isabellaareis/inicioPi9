import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { BotaoVoltar } from "../src/components/BtnVoltar";
import { useFonts, Poppins_700Bold, Poppins_500Medium, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function CursoRedacao() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }

  const aulas = [
    { titulo: "Introdução à Redação ENEM", duracao: "12 min" },
    { titulo: "Como usar repertórios", duracao: "14 min" },
    { titulo: "Conclusão estratégica", duracao: "10 min" }
  ];

  return (
    <SafeAreaView style={styles.tela}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* Cabeçalho */}
        <View style={styles.content}>
          <BotaoVoltar titulo="Redação" onPress={() => router.push('/DicasEstudos')} />
        </View>

        {/* Banner */}
        <View style={styles.conatinerBanner}>
          <View style={styles.banner}>
            <Ionicons name="document-text-outline" size={48} color="#fff" />
            <View style={styles.bannerInfo}>
              <Text style={styles.bannerTitulo}>Redação nota 1000</Text>
              <Text style={styles.bannerAutor}>com Prof. Isabella</Text>
              <Text style={styles.bannerDetalhes}>⭐️ 5.0 · 36 min no total</Text>
            </View>
          </View>
        </View>

       

        {/* Aulas */}
        <View style={styles.containerAulas}>
          <Text style={styles.sobreTituloAulas}>Aulas</Text>

          <View style={styles.cardsWrapper}>
            {aulas.map((aula, index) => (
              <TouchableOpacity key={index} style={styles.cardAula}>
                <Ionicons name="play-circle" size={24} color="#4A60F2" />
                <View style={styles.aulaTexto}>
                  <Text style={styles.aulaTitulo}>{aula.titulo}</Text>
                  <Text style={styles.aulaDuracao}>{aula.duracao}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F5F7FA'  
  },

  content: {
    left: 10,
    top: 10,
    paddingHorizontal: 32,
  },

  scrollContent: {
    paddingBottom: 100
  },

  conatinerBanner: {
    top: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },

  banner: {
    flexDirection: 'row',
    backgroundColor: '#7B81F5',  
    borderRadius: 16,
    padding: 20,
    width: 320,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  bannerInfo: {
    marginLeft: 16
  },

  bannerTitulo: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins_700Bold'
  },

  bannerAutor: {
    color: '#DDE2FF',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular'
  },

  bannerDetalhes: {
    color: '#DDE2FF',
    fontSize: 12,
    marginTop: 4
  },

  containerTexto: {
    top: 120,
    width: '100%',
    paddingHorizontal: 50,
  },

  sobreTitulo: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    color: '#333B50',
    marginTop: 10,
    marginBottom: 6,
  },

  sobreTexto: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#6C7382',
    marginBottom: 20,
    textAlign: 'left',
    lineHeight: 20
  },

  containerAulas: {
    top: 120,
    width: '100%',
    paddingHorizontal: 20,
  },

  sobreTituloAulas: {
    paddingHorizontal: 40,
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    color: '#333B50',
    marginBottom: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },

  cardsWrapper: {
    alignItems: 'center',
  },

  cardAula: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    width: '90%',
    borderWidth: 0.5,
    borderColor: '#E0E4EB'
  },

  aulaTexto: {
    marginLeft: 14,
  },

  aulaTitulo: {
    fontSize: 15,
    fontFamily: 'Poppins_500Medium',
    color: '#333B50',
  },

  aulaDuracao: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#6C7382',
  },
});
