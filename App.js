import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function appBiscoitoDaSorte() {

  const [img, setImg] = useState(require("./src/biscoito.png"))

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img}/>

      <Text style={styles.textoFrase}>"Esta é a primeira frase!"</Text>

      <TouchableOpacity style={styles.botao} onPress={() => alert("o")}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>
            Quebrar Biscoito
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: "#121212"}]} onPress={() => alert("o")}>
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