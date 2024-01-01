import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import Imagen from './assets/Imagen';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const initialState = {
    email:'',
    nombre:'',
    password:''
  }
  const [formState, setFormState] = useState(initialState)

  const onResetForm = () => {
    setFormState( initialState );
}
  
  const handleChangeText = (value, name)=> {
    setFormState({...formState, [name]:value })
  }

  const isPasswordValid = (password) => {
    // La expresión regular verifica que la contraseña tenga al menos una letra mayúscula,
    // al menos un número, al menos un símbolo y tenga un mínimo de 8 caracteres.
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(.{8,})$/;
    return passwordRegex.test(password);
  };
  
  const isEmailValid = (email) => {
    // Expresión regular para validar una dirección de correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };
  
  const onSubmit = () => {
    // Validar email
    if (!isEmailValid(formState.email)) {
      alert('Por favor, ingresa una dirección de correo electrónico válida');
      return;
    }
  
    // Validar contraseña
    if (!isPasswordValid(formState.password)) {
      alert(
        'La contraseña debe contener al menos una letra mayúscula, un número, un símbolo y tener al menos 8 caracteres'
      );
      return;
    }
  
    console.log('Datos del formulario:', formState);
    onResetForm();
  };
  return (

    <View style={styles.container}>

      <Imagen/>
      <View style={styles.target}>
        <Text style={styles.titulo}>Get Started Free</Text>
        <Text style={styles.subtitulo}>Free Forever. No Credit Card Needed</Text>

        <Text style={styles.label}>Email Address</Text>

            <TextInput
              placeholder='yourname@gmail.com'
              onChangeText={(value)=>handleChangeText(value, 'email')}
              value={formState.email}
              style={styles.TextInput}
            />

        <Text style={styles.label}>Your Name</Text>
       
            <TextInput
              placeholder='yourname'
              onChangeText={(value)=>handleChangeText(value, 'nombre')}
              value={formState.nombre}
              style={styles.TextInput}
            />
          
        
        <Text style={styles.label}>Password</Text>
        
    <TextInput
      placeholder='******'
      onChangeText={(value)=>handleChangeText(value, 'password')}
      value={formState.password}
      style={styles.TextInput}
    />
    {/* <View style={styles.btn}>
            <Button  title="Submit" onPress={onSubmit} />
    </View> */}

    <TouchableOpacity style={styles.ContainerButton} onPress={onSubmit}>
      <LinearGradient
        style={styles.button}
        colors={['#c25454','#9f40d9']}
        start={{x:1, y:0}}
        end={{x:0, y:1}}
      >
        <Text style={styles.textBtn}>Sign in</Text>
      </LinearGradient>
    </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151316',
  },
  target:{
    backgroundColor:'rgba(255,255,255,0.1)',
    width:'100%',
    // border-radius:'20px',
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:35,
    color:'#fff',
    fontWeight: 'bold',
  },
  subtitulo:{
    fontSize:12,
    color:'#f2f2f2',
  },
  label:{
    fontSize:12,
    color:'#f2f2f2',
    marginRight:"auto",
    marginTop:10
  },
  TextInput:{
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width:'90%',
    height:50,
    marginTop:20,
    // border-radius:8,
    color:'gray'
  },
  ContainerButton:{
    width:'90%',
    padding:5
  },
  textBtn:{
    fontSize:14,
    color:'white',
    textAlign:'center',
    alignContent:'center'
  },
  button:{
    width:'100%',
    height:50,
    marginTop:10,
    // border-radius: '10px',
    alignItems:'center',
    justifyContent:'center'
  }
});
