import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function appBiscoitoDaSorte() {

  const [img, setImg] = useState(require("./src/biscoito.png"))
  const [textoFrase, setTextoFrase] = useState("")
  
  let frases = [
    'Siga os bons e aprenda com eles',
    'O bom-senso vale mais do que muito conhecimento',
    'O riso é a menor distancia entre duas pessoas',
    'deixe de lado  as preocupações e seja feliz',
    'Realize o obvio, pense no improvavel e conquiste o impossivel',
    'Acredite em milagres, mas não dependa deles',
    'A maior barreira para o sucesso é o medo do fracasso'
  ];

  function quebraBiscoito(){
    let numAleatorio = Math.floor(Math.random() * frases.length)
    setImg(require("./src/biscoitoAberto.png"))
    setTextoFrase(`"${frases[numAleatorio]}"`)
  }

  function reiniciaBiscoito(){
    setImg(require("./src/biscoito.png"))
    setTextoFrase("")
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img}/>

      <Text style={styles.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>
            Quebrar Biscoito
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: "#121212"}]} onPress={reiniciaBiscoito}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color: "#121212"}]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: "#dd7b22",
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#dd7b22"
  }
})