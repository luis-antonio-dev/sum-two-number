import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.line}>
        <TextInput placeholder="number 1" style={styles.input} value={number1.toString()} onChangeText={value => setNumber1(Number.parseFloat(value ? value : '0'))} />
        <Text style={[styles.label, { textAlign: 'center' }]}>+</Text>
        <TextInput placeholder="number 2" style={styles.input} value={number2.toString()} onChangeText={value => setNumber2(Number.parseFloat(value ? value : '0'))} />
        <Text style={[styles.label, { textAlign: 'center' }]}> = </Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => setResult(number1 + number2)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Somar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  line: {
    fontSize: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20
  },
  input: {
    fontSize: 20,
    width: 120,
    height: 50,
  },
  label: {
    fontSize: 20,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    fontSize: 20,
    paddingRight: 20,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    padding: 10,
    color: '#fff',
  }
});
