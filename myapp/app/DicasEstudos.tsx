import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity, Image, Dimensions   } from 'react-native';
import { useRouter } from 'expo-router';
import { BotaoVoltar } from "../src/components/BtnVoltar";
import {useFonts, Poppins_700Bold, Poppins_500Medium, Poppins_600SemiBold, Poppins_400Regular} from '@expo-google-fonts/poppins';

import { AntDesign,FontAwesome5 } from '@expo/vector-icons'; // ícone opcional

export default function TelaDicaEstudos() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_400Regular
  });

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
          <BotaoVoltar titulo="Dicas de Estudos" onPress={() => router.push('/HomeLogin')} />
        </View>

        <View style={styles.containerMaterias}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
            {["Linguagens", "Matemática", "Humanas", "Natureza"].map((item, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.cardMaterias, item === "Linguagens" && styles.cardAtivo]}
                onPress={() => {
                  if (item === "Matemática") {
                    router.push('/DicasdeEstudosMatematica');
                  } else if (item === "Linguagens") {
                    router.push('/DicasEstudos');
                  } else if (item === "Natureza") {
                      router.push('/DicasdeEstudosNatureza');
                  } else if (item === "Humanas") {
                      router.push('/DicasdeEstudosHumanas');
                  }
                }}
              >
                <Text style={[styles.label, { fontFamily: 'Poppins_600SemiBold' }]}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.containerCardImagem}>
            <View style={styles.cardImagem}>

            </View>
        </View>

        <View style={styles.containerCard}>
          <TouchableOpacity style={styles.cardsItem} onPress={() => router.push('/DicasRedacao')}>
            <View style={styles.cardContentItem}>
              <AntDesign name="edit" size={24} color="#5D64F5" style={styles.icon} />
              <Text style={styles.cardTextoItem}>Redação</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardsItem} onPress={() => router.push('/DicasInterpretacao')}>
            <View style={styles.cardContentItem}>
              <FontAwesome5 name="book" size={24} color="#5D64F5" style={styles.icon} />
              <Text style={styles.cardTextoItem}>Interpretação</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardsItem} onPress={() => router.push('/DicasLiteratura')}>
            <View style={styles.cardContentItem}>
              <AntDesign name="book" size={24} color="#5D64F5" style={styles.icon} />
              <Text style={styles.cardTextoItem}>Literatura</Text>
            </View>
          </TouchableOpacity>
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
  },

  cardImagem: {
    width: 320,
    height: 160,
    backgroundColor: '#BFC1F4',
    borderRadius: 18,
  },

  cardMateria: {
    backgroundColor: '#D6D7FF',
    width: 320,
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  cardTexto: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
  },

  cardsItem: {
    width: 318,
    height: 86,
    borderRadius: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    borderWidth: 0.5,
    borderColor: '#E0E4EB'
  },
  
  cardContentItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  cardTextoItem: {
    fontSize: 18,
    marginLeft: 12,
    fontFamily: 'Poppins_600SemiBold',
    color: '#3A3A3A',
  },
  
  icon: {
    marginRight: 8,
  },
});