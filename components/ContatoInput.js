import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const ContatoInput = (props) => {
	const[nome, setNome] = useState('');
	const[numero, setNumero] = useState('');

	const capturaNome = (nome) => {
		setNome(nome);
	};
	
	const capturaNumero = (numero) => {
		setNumero(numero);
	};
	
	return(
		<View style={styles.contatosView}>
		<TextInput placeholder="nome" style = {styles.contatosInputText} onChangeText = {capturaNome} value = {nome}/>
		<TextInput placeholder="numero" style = {styles.contatosInputText} onChangeText = {capturaNumero} value = {numero}/>
		<Button title = "Add"
		onPress = {() => props.onAdicionarContato(nome,numero)}/>
		</View>
	
	
	
	
);
}
const styles = StyleSheet.create({
		contatosView: {
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginBottom: 8
		},
		contatosInputText: {
			width: '80%',
			borderBottomColor: 'black',
			borderBottomColor: 1,
			padding: 2
		},		
	})
export default ContatoInput;