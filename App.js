import React, {Component} from "react";
import {View,Text,Image,Button,StyleSheet,TextInput} from "react-native";
import { Touchable, TouchableOpacity, render } from "react-native-web";

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      TextoFrase:'',
      img: require('./src/biscoito.png')
    };
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this)
    this.frase=[
      'Amanhã tem mais',
      'Deixe parar amanhã oque tem mais',
      'Desista, e vá dormir'
    ];
  }
  quebrarBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frase.length );

    this.setState({
      TextoFrase: ' "' + this.frase[numeroAleatorio] + '" ',
      img: require('./src/biscoitoAberto.png')
    });
  
  }
  render(){
    
    
return(
  <View style={styles.container}>
    <Image
    source={this.state.img}
    style={styles.img}
    />
    <Text style={styles.txt}>{this.state.TextoFrase}</Text>

    <TouchableOpacity style ={styles.btn} onPress={this.quebrarBiscoito}>
    <View style ={styles.btnarea}> 
    <Text style ={styles.Tbtn}>Quebrar Biscoito</Text>
    </View>
    </TouchableOpacity>
    
  </View>   
);

  }
}
const styles = StyleSheet.create({
container:{
  flex:1,
  alignItems: 'center',
    justifyContent: 'center'
},
img:{
width: 250,
height: 250,
},
txt:{
  color:"#DEA33E",
  fontStyle: "italic",
  textAlign: 'center',
  margin: 20
},
btn:{
width:230,
height:50,
borderWidth:2,
borderColor:"#DEA33E",
borderRadius:25,
},
btnarea:{
  flex:1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
},
Tbtn:{
  fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
}
})
export default App;