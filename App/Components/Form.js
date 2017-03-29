import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import LocationField from './LocationField'
import TakeMeHome from './TakeMeHome'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    zIndex: 1
  }
});


class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container} >
        <View>
        </View>
        <LocationField locationType='origin' updateLocation={this.props.updateLocation} />
        <LocationField locationType='destination' updateLocation={this.props.updateLocation} />
        <TakeMeHome getRoute={this.props.getRoute} />
      </View>
    );
  }
}

module.exports = Form;
