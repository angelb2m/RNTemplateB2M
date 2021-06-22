import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from 'templateb2m/src/res/colors';

class MainScreen extends Component {

  state = {
    variableStare: ""
  }


  componentDidMount() {

    //this.props.navigation.addListener("focus", this.getFavorites);

  }

  componentWillUnmount() {
    //this.props.navigation.removeListener("focus", this.getFavorites);
  }

  render() {
    return (
      <View style={styles.container}>

        <Text>Hola Mundo</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1
  }
});

export default MainScreen;