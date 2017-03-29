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
    alignItems: 'stretch'
  },
  linkText: {
    color: 'white'
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
        <Text>{this.props.url}</Text>
      </View>
    );
  }
}

module.exports = RouteLink;
