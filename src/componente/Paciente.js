import React from 'react';
import {Text, View} from 'react-native';

const Paciente = ({item, onPress}) => {
  const {paciente, propietario} = item;
  return (
    <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',marginVertical: 10, backgroundColor:'blue',padding:5}}>
      <Text style={{color:'#fff',}}>{paciente}</Text>
      <Text style={{color:'#fff',}}>{propietario}</Text>
      <Text style={{color:'#fff',}} onPress={onPress}>Eliminar</Text>
    </View>
  );
};

export default Paciente;
