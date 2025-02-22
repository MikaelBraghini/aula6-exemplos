import React, { useState } from 'react'; // Importação do useState
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SectionList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native'; // Importação dos componentes necessários do React Native

const App = () => {
  // Definindo o estado dos componentes
  const [text, setText] = useState(''); // Estado para armazenar texto do TextInput
  const [imageWidth, setImageWidth] = useState(200); // Estado para a largura da imagem
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar a animação de carregamento
  const [sliderValue, setSliderValue] = useState(0); // Estado para o valor do slider (não utilizado no código)

  // Dados para exibição em FlatList
  const data = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ];

  // Dados para exibição em SectionList
  const sections = [
    {
      title: 'Section 1',
      data: [
        { id: '1', name: 'Item 1' },
        { id: '2', name: 'Item 2' },
      ],
    },
    { title: 'Section 2', data: [{ id: '3', name: 'Item 3' }] },
  ];

  // Função chamada ao pressionar o botão
  const handlePress = () => {
    setIsLoading(true); // Inicia o carregamento
    setTimeout(() => {
      setIsLoading(false); // Finaliza o carregamento após 2 segundos
      alert('Button pressed!'); // Exibe um alerta
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}> {/* Container com ScrollView para permitir rolagem */}
      <View style={styles.view}>
        <Text style={styles.text}>Hello React Native!</Text> {/* Texto exibido na tela */}
        
        {/* Exibe uma imagem com a largura controlada pelo estado */}
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
          style={[styles.image, { width: imageWidth }]} // A largura da imagem é ajustável
        />
        
        {/* Campo de texto que atualiza o estado 'text' */}
        <TextInput
          style={styles.textInput}
          placeholder="Enter text"
          value={text}
          onChangeText={setText} // Atualiza o estado com o texto inserido
        />
        
        {/* Botão que aciona a função handlePress */}
        <Button title="Press me" onPress={handlePress} />
        
        {/* TouchableOpacity que aumenta a largura da imagem ao ser pressionado */}
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => setImageWidth(imageWidth + 50)}
        >
          <Text style={styles.touchableOpacityText}>Increase Image Width</Text>
        </TouchableOpacity>
        
        {/* Indicador de carregamento (ActivityIndicator) exibido quando isLoading é true */}
        <ActivityIndicator size="large" color="#0000ff" animating={isLoading} />
        
        {/* Exibe o valor do slider (não utilizado, mas presente no estado) */}
        <Text>Slider Value: {sliderValue.toFixed(0)}</Text>
      </View>
      
      {/* Exibe uma lista simples com FlatList */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id} // Chave única para cada item da lista
        renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza o nome de cada item
      />
      
      {/* Exibe uma lista com seções usando SectionList */}
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id} // Chave única para cada item da lista
        renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza o nome de cada item
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text> // Renderiza o título da seção
        )}
      />
    </ScrollView>
  );
};

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  touchableOpacity: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  touchableOpacityText: {
    color: 'white',
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;