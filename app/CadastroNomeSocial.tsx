import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { BotaoVoltar } from "../src/components/BtnVoltar";
import { InputBorda } from "../src/components/LabelBorda";
import { InputColorido } from "../src/components/LabelColorida";
import { BotaoRedondo } from "../src/components/BotaoRedondo";
import { useRouter } from 'expo-router';
import {useFonts, Poppins_700Bold, Poppins_500Medium, Poppins_600SemiBold, Poppins_400Regular} from '@expo-google-fonts/poppins';


export default function TelaCadastroNomeSocial() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_400Regular
  });

  if (!fontsLoaded) {
    // Mostra carregamento enquanto a fonte não estiver pronta
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#5D64F5" />
      </View>
    );
  }

  return (
    <View style={styles.tela}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <BotaoVoltar titulo="Cadastro" onPress={() => router.push('/NomeSocial')} />
          </View>

          <View style={styles.content2}>
            <View style={styles.titulo}>
              <Text style={[styles.title, { fontFamily: 'Poppins_700Bold' }]}>Vamos{'\n'}Começar!</Text>
            </View>

            <View style={styles.contentDescricao}>
              <Text style={[styles.description, { fontFamily: 'Poppins_500Medium' }]}>
                Cadastre-se no CrescEdu com seus dados e uma senha segura para começar seus estudos.
              </Text>
            </View>
          </View>

          <View style={styles.contentLabels}>
            <InputBorda placeholder="*Nome:" keyboardType="default" autoCapitalize="words" />
            <InputBorda placeholder="*Nome Social:" keyboardType="default" autoCapitalize="words" />
            <InputColorido placeholder="*Email:" keyboardType="email-address" seguro={true} />
            <InputColorido placeholder='*Senha:' keyboardType="default" seguro={true} />
          </View>
           <View style={styles.contentBtn}>
                <BotaoRedondo  onPress={() => router.push('/HomeLogin')}/>
           </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },

  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },

  scrollContent: {
    paddingBottom: 40,
  },

  content: {
    left: 10,
    top: 10,
    paddingHorizontal: 32,
  },

  content2: {
    top: 10,
    left: 30,
  },

  titulo: {
    top: 150,
    left: 15,
  },

  title: {
    fontSize: 40,
    color: '#5D64F5',
    lineHeight: 40,
  },

  contentDescricao: {
    paddingHorizontal: 15,
    marginTop: 200,
  },

  description: {
    fontSize: 13,
    color: '#4B4B4B',
    lineHeight: 22,
    maxWidth: 290,
  },

  contentLabels: {
    marginTop: 70,
    bottom: 40,
    paddingHorizontal: 32,
  },

  contentBtn: {
    left: 120,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});
