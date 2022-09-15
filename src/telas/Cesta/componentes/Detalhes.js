import React from "react";
import { View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import logo from '../../../../assets/logo.png';
import Texto from  '../../../componentes/Texto';
import Botao from "../../../componentes/Botao";


export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao } ) {
    return<>
        <Texto style={estilos.nome}>{ nome }</Texto>
        <View style={estilos.fazenda}>
            <Image style={estilos.imagemFazenda} source={logoFazenda}/>
            <Texto style={estilos.nomefazenda}>{ nomeFazenda }</Texto>
        </View>
        <Texto style={estilos.descricao}>{ descricao }</Texto>
        <Texto style={estilos.preco}>{ preco }</Texto>
        <Botao style={{marginTop: 16}}> {botao} </Botao>
    </>
};

const estilos = StyleSheet.create({

    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold'
    },
    nomefazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,

    },
    descricao: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    

})