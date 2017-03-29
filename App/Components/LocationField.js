import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');
import env from '../../env.js'
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputWrapper: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1
  }
})

class LocationField extends React.Component{
  constructor(props) {
    super(props)
  }
  
  _handleInput(locationData, details) {
    console.log('The locationData', locationData, details)
    console.log('The prosp', this.props)
    this.props.updateLocation(this.props.locationType, locationData);
  }

  render() {
    return (
      <View style={styles.inputWrapper}>
        <GooglePlacesAutocomplete
          placeholder='Search'
          minLength={2} // minimum length of text to search
          autoFocus={false}
          fetchDetails={true}
          onPress={this._handleInput.bind(this)}
          getDefaultValue={() => {
            return ''; // text input default value
          }}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: env.GOOGLE_KEY,
            language: 'en', // language of the results
            types: 'address', // default: 'geocode'
          }}
          styles={{
            textInputContainer: {
              backgroundColor: 'rgba(0,0,0,0)',
              borderTopWidth: 0,
              borderBottomWidth:0,
              paddingTop: 20,
              flex: 1,
              margin: 10
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: '#5d5d5d',
              fontSize: 16
            },
            listView: {
              backgroundColor: 'white',
              marginTop: 0
            }
          }}
          
          currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          currentLocationLabel="Current location"
          nearbyPlacesAPI='GoogleReverseGeocoding' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={{
            'address': '944 Market Street'
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }}
        />
      </View>
    );
  }
}

module.exports = LocationField;
