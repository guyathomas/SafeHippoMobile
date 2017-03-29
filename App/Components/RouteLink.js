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
    marginTop: 20,
    alignSelf: 'stretch',
    marginRight: 10,
    backgroundColor: '#47CFEA'
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
