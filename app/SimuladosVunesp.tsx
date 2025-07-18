import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity, Image, Dimensions   } from 'react-native';
import { useRouter } from 'expo-router';
import { BotaoVoltar } from "../src/components/BtnVoltar";
import {useFonts, Poppins_700Bold, Poppins_500Medium, Poppins_600SemiBold, Poppins_400Regular} from '@expo-google-fonts/poppins';

import { AntDesign, FontAwesome6, Octicons, Entypo} from '@expo/vector-icons'; // ícone opcional

export default function TelaDicaEstudos() {
  const router = useRouter();
  const [ativo, setAtivo] = useState("Vunesp");
  const scrollRef = useRef<ScrollView>(null);
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_400Regular
  });

  // Scroll horizontal para o início ao trocar o ativo
  useEffect(() => {
    if (scrollRef.current && typeof scrollRef.current.scrollTo === 'function') {
      scrollRef.current.scrollTo({ x: 0, animated: true });
    }
  }, [ativo]);

  const materias = ["Enem", "Fuvest", "Vunesp"];
  const materiasOrdenadas = [...materias].sort((a, b) => (a === ativo ? -1 : b === ativo ? 1 : 0));

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#5D64F5" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.tela}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <BotaoVoltar titulo="Simulados" onPress={() => router.push('/HomeLogin')} />
        </View>

        <View style={styles.containerMaterias}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scroll}
            ref={scrollRef}
          >
            {materiasOrdenadas.map((item, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.cardMaterias, item === ativo && styles.cardAtivo]}
                onPress={() => {
                  setAtivo(item);
                  if (item === "Fuvste") router.push('/SimuladosFuvest');
                  else if (item === "Enem") router.push('/MeusSimulados');
                  else if (item === "Vunesp") router.push('/SimuladosVunesp');
                }}
              >
                <Text style={[styles.label, { fontFamily: 'Poppins_600SemiBold' }]}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.containerCardImagem}>
            <View style={styles.cardImagem}>
                <Text style={[styles.textoCard, { fontFamily: 'Poppins_600SemiBold' }]}>Vunesp 2024</Text>
                <Text style={[styles.descricao, { fontFamily: 'Poppins_400Regular' }]}>Teste seus conhecimentos com um simulado baseado na edição de 2024.</Text>
                <View style={styles.parteBranca}>
                    <TouchableOpacity style={styles.btnEstatiscas}>
                       <Entypo name="bar-graph" size={24} color="#5D64F5" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <Text style={[styles.textoBtn, { fontFamily: 'Poppins_600SemiBold' }]}>Treinar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F3F3F3'
  },

  content: {
    left: 10,
    top: 10,
    paddingHorizontal: 32,
  },

  scrollContent: {
    paddingBottom: 100
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerMaterias: {
    marginTop: 120,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },

  scroll: {
    flexDirection: 'row',
  },

  cardMaterias: {
    minWidth: 166,
    height: 53,
    borderRadius: 10,
    backgroundColor: '#DDDEF3',
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  cardAtivo: {
    backgroundColor: '#D6D7FF',
    borderColor: '#5D64F5',
    borderWidth: 1,
  },

  label: {
    fontSize: 17,
    color: '#5D64F5',
  },

  containerCard: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 110,
    gap: 20,
  },

  containerCardImagem: {
    top: 55,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },

  cardImagem: {
    width: 320,
    height: 220,
    borderRadius: 18,
    backgroundColor: '#DDDEF3',
    justifyContent: 'center',
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    borderWidth: 1, 
    borderColor: '#5D64F5' ,
  },

  textoCard: {
    textAlign: 'left',
    marginTop: -100,
    fontSize: 22,
    color: '#5E5E5E'
  },

  descricao: {
    top: 10,
    color: '#5E5E5E',
  },

  parteBranca: {
    width: 320,
    height: 80,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#5D64F5',
    
    flexDirection: 'row',  
    alignItems: 'center',       
  },

  btn: {
    left: 90,
    width: 150,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#5D64F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnNota: {
    left: 10,
    borderRadius: 30,
    width: 70,
    height: 30,
    backgroundColor: '#B1B4F4',
  },

  btnEstatiscas: {
    left: 30,
    width: 50,
    height: 40,
    backgroundColor: '#9A9EFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  textoBtn: {
    color: '#fff',
    textAlign: 'center',
  },

});