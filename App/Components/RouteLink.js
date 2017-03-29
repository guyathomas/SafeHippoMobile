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
    marginRight: 10,
    backgroundColor: '#47CFEA',
    alignSelf: 'stretch',
    justifyContent: 'center'
    // alignItems: 'center'
  },
  linkText: {
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center'
  }
});


class RouteLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('this.props.url in RouteLink', this.props.url)
    return (
      <View style={styles.container} >
        <Text style={styles.linkText} >{this.props.url}</Text>
      </View>
    );
  }
}

module.exports = RouteLink;
