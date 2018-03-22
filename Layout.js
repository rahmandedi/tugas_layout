import React from 'react';
import {AppRegistry, StyleSheet, View, Text} from 'react-native';
export default class Layout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text}> Universitas Pendidikan Ganesha</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Slider</Text>
        </View>
        <View style={styles.box3}>
          <View style={styles.minibox} />
          <View style={styles.minibox} />
          <View style={styles.minibox} />
          <View style={styles.minibox} />
        </View>
        <View style={styles.box4}>
          <View style={styles.minibox} />
          <View style={styles.minibox} />
          <View style={styles.minibox} />
          <View style={styles.minibox} />
        </View>
        <View style={styles.box5}>
          <View style={styles.minibox} />
          <View style={styles.minibox} />
          <View style={styles.minibox} />
          <View style={styles.minibox} />
        </View>
        <View style={styles.box6}>
          <Text style={styles.text}> Pendidikan Teknik Informatika </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: 'white',
      flex:1,
      flexDirection:'column'
    },
    box1:{
      flex: 1,
      backgroundColor: '#1E90FF',
      flexDirection : 'row',
      justifyContent: 'center',
      alignItems: 'center'

    },
    box2:{
      flex: 2,
      backgroundColor: '#808080',
      flexDirection : 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    box3: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: 'powderblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  },
  box4: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: 'powderblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  },
  box5: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: 'powderblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
    box6:{
      flex: 1,
      backgroundColor: '#1E90FF',
      flexDirection : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    text: {
      fontSize:20,
      color: 'white'
    },
    minibox: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 5
  }
});
