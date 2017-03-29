import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  TextInput,
  Text
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10
  },
  button: {
    alignItems: 'center'
  }, 
  buttonText: {
    backgroundColor: '#27A1AB',
    color: 'white',
    fontSize: 22,
    padding: 10
  }
});


class TakeMeHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container} >
        <TouchableHighlight onPress={this.props.getRoute}>
          <View style={styles.button} >
            <Text style={styles.buttonText}>Take Me Home</Text>  
          </View>  
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = TakeMeHome;
