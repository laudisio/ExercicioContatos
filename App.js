import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
	const[nome, setNome] = useState ('');
	const[nomes, setNomes] = useState([]);
	const[telefone, setTelefone] = useState ('');
	const[telefones, setTelefones] = useState([]);
	
	const[contadorNomes, setContadorNomes] = useState(0);
	const[contadorTelefones, setContadorTelefones] = useState(0);
	
	
	const capturarNome = (nome) => {
		setNome(nome);
	};
	
	const capturarTelefone = (telefone) => {
		setTelefone(telefone);
	};
	
	
	
	const adicionarNome = () => {
		setNomes(nomes => {
			console.log(nomes);
			setContadorNomes(contadorNomes + 1);
			return[{key: contadorNomes.toString(), value: nome}, ...nomes];
		})
	};
	
	const adicionarTelefone = () => {
		setTelefones(telefones => {
			console.log(telefones);
			setContadorTelefones(contadorTelefones + 1);
			return[{key: contadorTelefones.toString(), value: telefone}, ...telefones];
		})
	};
	
	const btnClick = () => {
		adicionarNome();
		adicionarTelefone();
		
	};
	
  return (
    <View style={styles.telaPrincipalView}>
		
		<View style={styles.nomeView}>
		{/* usuário irá inserir os contatos aqui*/}
		
			<TextInput 
				placeholder="Nome..."
				style={styles.nomeInputText}
				onChangeText={capturarNome}
				value={nome}
			/>
			
			<TextInput 
				placeholder="Telefone..."
				style={styles.nomeInputText}
				onChangeText={capturarTelefone}
				value={telefone}
			/>
			
			<Button 
				title="Adicionar Contato"
				  onPress={btnClick}
			/>
		
		</View>
	
		<FlatList
			data={nomes}
			renderItem={
			nome => (
			<View style={styles.itemNaLista}>
				<Text>{"Nome: " + nome.item.value}</Text>
			</View>
			)
			}
		/>
		
		<FlatList
			data={telefones}
			renderItem={
			telefone => (
			<View style={styles.itemNaLista}>
				<Text>{"Telefone: " + telefone.item.value}</Text>
			</View>
			)
			}
		/>
	</View>
  );
}

const styles = StyleSheet.create(
	{
		telaPrincipalView: {
			padding: 50
		},
		nomeView: {
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginBottom: 8
		},
		nomeInputText: {
			width: '80%',
			borderBottomColor: 'black',
			borderBottomColor: 1,
			padding: 2
		},
		itemNaLista: {
			padding: 12,
			backgroundColor: '#CCC',
			borderBottomColor: '#000',
			borderWidth: 1,
			marginBottom: 8,
			borderRadius: 8
		},
		
	}
);