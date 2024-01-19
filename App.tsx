
import React from "react";
import { StyleSheet, View } from "react-native";

const App = () => {
  return (
    <View style={styles.main}>
      {/* <Text style={{fontSize:30,backgroundColor:'purple',textAlign:'center',color:'cyan'}}>!! Responsive Layout With Flex !!</Text> */}
      
      <View style={styles.box1}>
        <View style={styles.InnerBox1}></View>
        <View style={styles.InnerBox2}></View>
        <View style={styles.InnerBox2}></View>
      </View>
      
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
  },
  box1: {
    backgroundColor: 'red',flexDirection: 'row',
    flex: 2
  },
  box2: {
    backgroundColor: 'green',
    flex: 1
  },
  box3: {
    backgroundColor: 'blue', // Change the color if needed
    flex: 1
  },
  InnerBox1: {
    flex: 1,
    backgroundColor: 'skyblue',
    margin: 10
  },
  InnerBox2: {
    flex: 1,
    backgroundColor: 'lightblue',
    margin: 10
  },
  InnerBox3: {
    flex: 1,
    backgroundColor: 'purple',
    margin: 10
  }
});

export default App;
