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
    justifyContent: 'flex-start',
    flexDirection: 'column',
    zIndex: 1
  },
  fieldWrapper: {
    
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
        <View>
        </View>
        <LocationField locationType='origin' updateLocation={this.props.updateLocation} />
        {<LocationField locationType='destination' updateLocation={this.props.updateLocation} />}
      </View>
    );
  }
}

module.exports = Form;
