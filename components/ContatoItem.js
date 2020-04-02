import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ContatoItem = (props) => {
	return(
	<TouchableOpacity onLongPress={props.onDelete.bind(this, props.chave)}> 
        <View style={styles.itemNaLista}>
            <Text>{props.id}Nome: {props.nome}</Text>
            <Text> Telefone: {props.numero}</Text>
        </View>
    </TouchableOpacity> 
	);
}
const styles = StyleSheet.create({
		itemNaLista: {
			padding: 12,
			backgroundColor: '#CCC',
			borderBottomColor: '#000',
			borderWidth: 1,
			marginBottom: 8,
			borderRadius: 8
		},
});

export default ContatoItem;