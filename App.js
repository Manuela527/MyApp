import React, {useState} from 'react';
//import {Button} from 'react-native';

import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import Formulario from './src/componente/Formulario';
import Paciente from './src/componente/Paciente';

// // eslint-disable-next-line react-hooks/rules-of-hooks
// const [modalVisible, setModalVisible] = useState(false);

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const Eliminar = (paciente) => {
    let listado = pacientes;
    listado.slice(paciente, 1)
    setPacientes(listado)
    return false
  }

  return (
    <SafeAreaView style={styles.contenido}>
      <Text style={styles.titulo}>
        Administracion de citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        style={styles.btnNuevaCita}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.btnTextoNuevaCita}>Nueva cita</Text>
      </Pressable>

      {pacientes.length === 0 ? (
        <Text style={styles.sinPacientes}>No existe pacientes</Text>
      ) : (
        <FlatList
          style={styles.lista}
          data={pacientes}
          renderItem={({item}) => {
            return <Paciente item={item} key={item.id} onPress={() => Eliminar(item.id)}/>;
          }}
          keyExtractor={item => item.id}
        />
       
      )}
      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setPacientes={setPacientes}
        pacientes={pacientes}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#013D3D',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '900',
    color: '#FFFF',
  },
  tituloBold: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: '#2FF5F5',
  },
  btnNuevaCita: {
    backgroundColor: '#4CDD09',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  sinPacientes: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: '#FFFF',
  },
  lista: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'white',
  },
  btnEditar: {
    marginVertical: 50,
    backgroundColor: '#4CDD09',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnEditarTexto: {
    textAlign: 'center',
    color: '#FFFF',
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: 16,
  },
});
export default App;
