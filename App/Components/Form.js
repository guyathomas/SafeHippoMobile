import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import LocationField from './LocationField'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    zIndex: 1
  }
});


class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('props in Form', this)
    return (
      <View style={styles.container} >
        <LocationField locationType='origin' updateLocation={this.props.updateLocation} />
        <LocationField locationType='destination' updateLocation={this.props.updateLocation} />
      </View>
    );
  }
}

module.exports = Form;
