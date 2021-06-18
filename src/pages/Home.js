import React, {useState} from 'react';
import {View, 
  Text, 
  StyleSheet, 
  TextInput,
  Platform,
  TouchableOpacity} from 'react-native';

export function Home(){
  const [newSkill, setNewSkill] = useState();
  const [mySkills, setMySkills]= useState([]);

  function handleAddNewSkill(){
    setMySkills(oldState => [...oldState, newSkill])
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, @Renata
      </Text>
      <TextInput 
      style={styles.input}
      placeholder="New skill"
      placeholderTextColor="#555"
      onChangeText={setNewSkill}
      />
      <TouchableOpacity 
      style={styles.button}
      activeOpacity={.7}
      onPress={handleAddNewSkill}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginVertical: 50}]}>
        My Skills
      </Text>
      { 
        mySkills.map(skill => (
          <TouchableOpacity key={skill} style={styles.buttonsSkill}>
            <Text style={styles.skill}>
              {skill}
            </Text>
        </TouchableOpacity>
       
       ))
         }
      
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
    
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input:{
    backgroundColor: "#1f1e25",
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,

  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 15
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
},
skill: {
  color: '#fff',
  fontSize: 22,
  fontWeight: 'bold',
},
buttonsSkill:{
  padding: 15,
  backgroundColor: "#1F1E25",
  borderRadius: 50,
  alignItems: 'center',
  marginVertical: 10
}
})