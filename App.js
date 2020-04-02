import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import ContatoItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';
export default function App() {
	const[id, setId] = useState ('');
	const[contatos, setContatos] = useState([]);
	const[contadorContatos, setContadorContatos] = useState(0);

	
	const adicionarContato = (nome, numero) => {
		contato = (id, nome, numero);
		
		setContatos((contatos) => {
			console.log(contatos);
			setContadorContatos(contadorContatos + 1);
		return[...contatos, {key:contadorContatos.toString(), value: contato=(id), value2: contato=(nome), value3: contato=(numero)}];
		})
	};
	
	
	const removerContato = (keyASerRemovida)=>{
		setContatos(contatos=>{
			return contatos.filter((contato)=>{
				contato.key !== keyASerRemovida
			})
		});
	};
	
	return(
	<View style={styles.telaPrincipalView}>
      <View style={{padding:12,backgroundColor:'#ccd9ff',borderColor:'#000',borderRadius:6}}><Text>Contatos</Text></View>
      <ContatoInput onAdicionarContato={adicionarContato}/>
      <FlatList
      data={contatos}
      renderItem={
      contato => (
        <ContatoItem id={contato.item.value} nome={contato.item.value2} numero={contato.item.value3} 
        onDelete={removerContato}/>
      )}/>
    </View>
  );
}

  
  
const styles = StyleSheet.create(
	{
		telaPrincipalView: {
			padding: 50
		},
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