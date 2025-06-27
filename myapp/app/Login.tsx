import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions,ActivityIndicator } from 'react-native';
import {BotaoVoltar} from "../src/components/BtnVoltar";
import {InputBorda} from "../src/components/LabelBorda";
import {InputColorido} from "../src/components/LabelColorida";
import {BotaoRedondo} from "../src/components/BotaoRedondo";
import { useRouter } from 'expo-router';
import {useFonts, Poppins_700Bold, Poppins_500Medium, Poppins_600SemiBold, Poppins_400Regular} from '@expo-google-fonts/poppins';

export default function TelaLogin() {
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
        <View style={styles.content}>
          <BotaoVoltar titulo="Login" />
          <View style={styles.titulo}>
             <Text style={[styles.title, { fontFamily: 'Poppins_700Bold' }]}>Bem-Vindo{'\n'}de Volta!</Text>
          </View>
          <View style={styles.contentDescricao}>
            <Text style={[styles.description, { fontFamily: 'Poppins_500Medium' }]}>
              Insira seu e-mail e senha cadastrados para acessar sua conta.{' '}
              Esqueceu a senha? Clique em 'Esqueceu a Senha'.
            </Text>
          </View>
          <View style={styles.contentLabels}>
              <InputBorda placeholder="*Email:" keyboardType="email-address" seguro={true} />
              <InputColorido placeholder='*Senha:'keyboardType="default" seguro={true}/>
          </View>
          <TouchableOpacity>
            <Text style={[styles.esqueceuSenha, { fontFamily: 'Poppins_500Medium' }]}>Esqueceu a Senha?</Text>
          </TouchableOpacity>
          <View style={styles.contentBtn}>
            <BotaoRedondo onPress={() => router.push('/HomeLogin')}/>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    justifyContent: 'flex-start',
  },

  container: {
    flex: 1, 
    backgroundColor: '#F3F3F3',
  },

  content: {
    top: 10,
    left: 10,
    flex: 1,
    paddingHorizontal: 32,
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
    maxWidth: 260
  },


  contentLabels: {
    marginTop: 30,
    gap: 15,
  },

  esqueceuSenha: {
    left: 190,
    fontSize: 12,
    color: 'rgba(9, 9, 9, 0.72)',
  },

  contentBtn: {
    marginTop: 70,
    left: 120,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
 


});