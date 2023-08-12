import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flexforTodo}>
        <TextInput style ={styles.inputText} placeholder='Write Your Todo Here!'/>
        <Button title='ADD TODO'  />
        
      </View>
      <View> 
        <Text>All Todo's is here</Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingRight: 50,
    paddingLeft: 15,
    
    
  },
  flexforTodo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  inputText: {
    borderColor: 'black',
    borderWidth: 2,
    width: "80%",
    padding: 10,
    marginRight: 10,
    
    
  }
 
});
