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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    zIndex: 1/*,
    backgroundColor: 'transparent'*/
  }
});


class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container} >
        <LocationField type='origin' updateLocation={this._updateLocation} />
        <LocationField type='destination' updateLocation={this._updateLocation} />
      </View>
    );
  }
}

module.exports = Form;
