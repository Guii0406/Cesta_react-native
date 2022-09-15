import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Texto from "./Texto";

export default function Botao({children, style}){

    return<>
    <TouchableOpacity style={[style, estilos.botao]}>
        <Texto style={estilos.textoBotao}>{ children }</Texto>
    </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({

    botao: {
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6,


    },
    textoBotao: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
    }

})