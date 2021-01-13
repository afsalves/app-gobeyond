
import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native'

//flex:1 para que a view pegue a tela toda 1 = 100%
const Home = () => {
    const { navigate} = useNavigation()

return(
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'} }> 
        <Text>Home Screen</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.button} onPress={() =>{navigate ('MyAccount')}}>
            <Text style={styles.buttonText}>Ir Para Perfil</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    width:100,
    height: 50,
    backgroundColor: '#4971fe',
    alignItems: 'center', //orienta por coluna
    justifyContent: 'center', //orienta por linha


  },

  buttonText: {
    color: '#FFF',
  }
})

export default Home