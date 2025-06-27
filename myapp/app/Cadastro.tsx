import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions,ActivityIndicator} from 'react-native';
import { BotaoVoltar } from "../src/components/BtnVoltar";
import { InputBorda } from "../src/components/LabelBorda";
import { InputColorido } from "../src/components/LabelColorida";
import { BotaoRedondo } from "../src/components/BotaoRedondo";
import { useRouter } from 'expo-router';
import {useFonts, Poppins_700Bold, Poppins_500Medium, Poppins_600SemiBold, Poppins_400Regular} from '@expo-google-fonts/poppins';


function formatarCPF(cpf: string): string {
  return cpf
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}


export default function TelaCadastro() {
     const router = useRouter();
     const [value, setValue] = useState('');
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
                    <BotaoVoltar titulo="Cadastro" />
                    <View style={styles.titulo}>
                        <Text style={[styles.title, { fontFamily: 'Poppins_700Bold' }]}>Vamos{'\n'}Começar!</Text>
                    </View>
                    <View style={styles.contentDescricao}>
                        <Text style={[styles.description, { fontFamily: 'Poppins_500Medium' }]}>
                            Que tal iniciar seu cadastro com toda a segurança? Informe seu CPF e data de nascimento para garantirmos a proteção das suas informações.
                        </Text>
                    </View>
                    <View style={styles.contentLabels}>
                        <InputBorda
                        placeholder="*CPF:"
                        secureTextEntry={false}
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            const formatado = formatarCPF(text);
                            setValue(formatado);
                        }}
                        value={value}
                        />
                        <InputColorido placeholder='*Data de Nascimento:' />
                    </View>
                    <View style={styles.contentBtn}>
                        <BotaoRedondo  onPress={() => router.push('/NomeSocial')}/>
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