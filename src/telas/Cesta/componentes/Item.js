import React from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";
import Texto from "../../../componentes/Texto";
export default function Item ({item: {nome, imagem}}){

    return( 
        <View style={estilos.Item}>
            <Image style={estilos.imagem} source={imagem}/>
            <Texto style={estilos.nome}>{ nome }</Texto>
        </View>)
}

const estilos = StyleSheet.create({
    Item: {
        flexDirection: 'row',
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        marginHorizontal: 16
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646'
    }
})