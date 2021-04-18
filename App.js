/*
// viet theo function
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, Text, View 
} from 'react-native';


export default function App() {
  debugger
  return (
    <View style={styles.container}>
      <Text>Open ds App.js to start working on dsad aphihi!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

// viet theo class
import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  StyleSheet, Text, View
} from 'react-native'; 

class Demo1 extends Component {
  constructor(props){
    console.log('constructor');
    super(props);
  }

  UNSAFE_componentWillMount(){
    // hàm cũ sử dụng componentWillMount
    console.log('componentWillUnmounts');
  }

  render(){
    console.log('render');
    return(
      // start style trong react 
      // <View style={ style.body }>
      //   {/* <StatusBar hidden="true"/> ẩn thanh bar trên cùng của phone */} 
      //   {/* <Text style={{marginTop:100}}>Nguyen sy hiepns</Text> */}
      //   {/* <Text style={ style.container }>Nguyen sy hiepns</Text> */}
      //   {/* <Text style={ style.container }>Phan thi thu huyen </Text> */}
      // </View>
      // end style trong react

      // start thực hành flex
        // <View style={style.flex}>
        //     <View style={style.flex_1}>
        //     </View>
        //     <View style={style.flex_2}>

        //     </View>
        // </View>
      // end thực hành flex

      // thực hành flex vẽ bàn phím máy tính
        // <View style={ styleMT.body }>
        //   <View style={styleMT.dong}>
        //     <View style={styleMT.cot}>
        //       <Text>1</Text>
        //     </View>
        //     <View style={styleMT.cot}>
        //       <Text>2</Text>
        //       <Text>ABC</Text>
        //     </View>
        //     <View style={styleMT.cot}>
        //       <Text>3</Text>
        //     </View>
        //   </View>

        //   <View style={styleMT.dong}>
        //     <View style={styleMT.cot}>
        //       <Text>1</Text>
        //     </View>
        //     <View style={styleMT.cot}>
        //       <Text>2</Text>
        //     </View>
        //     <View style={styleMT.cot}>
        //       <Text>3</Text>
        //     </View>
        //   </View>

        //   <View style={styleMT.dong}>
        //     <View style={styleMT.cot}>
        //       <Text>1</Text>
        //     </View>
        //     <View style={styleMT.cot}>
        //       <Text>2</Text>
        //     </View>
        //     <View style={styleMT.cot}>
        //       <Text>3</Text>
        //     </View>
        //   </View>

        //   <View style={styleMT.dong}>
            
        //     <View style={styleMT.cot}>
        //       <Text>1</Text>
        //     </View>
        //     <View style={styleMT.cot}>
        //       <Text>2</Text>
        //     </View>
        //     <View style={styleMT.cot}>
        //       <Text>3</Text>
        //     </View>
        //   </View> 
        // </View>
      // end thực hành vẽ bàn phím máy tính
      <TestComponent/>
    );
  }

  componentDidMount(){
    console.log('componentDidMount');
  }
}

export default class  TestComponent extends Component {
  render(){
    return(
      <View>
        <Text>ooki</Text>
      </View>
    );
  }
}


const styleMT = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    margin: 50
  },

  dong: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black"
  },
  cot: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },

});

const style  = StyleSheet.create({
  body: {
    backgroundColor: 'pink',
    width: 200,
    height: 300,
    marginTop: 100,
    paddingTop: 50,
    padding: 10,
  },

  container: {
    backgroundColor: 'yellow',
    paddingTop: 100,
    color: 'red'
  },

  flex_1:{
    backgroundColor: 'red',
    flex: 1
  },

  flex_2: {
    backgroundColor: 'yellow',
    flex: 1
  }, 

  flex: {
    backgroundColor: 'pink',
    flex: 1,
    flexDirection: 'row',
  }
});

AppRegistry.registerComponent('Demo1', () => Demo1);