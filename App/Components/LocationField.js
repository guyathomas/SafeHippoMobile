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
  inputWrapper: {
    flexDirection: 'row',
  }
})

class LocationField extends React.Component{
  constructor(props) {
    super(props)
  }
  
  _handleInput(locationData, details) {
    this.props.updateLocation(this.props.locationType, locationData);
  }

  render() {
    return (
      <View style={styles.inputWrapper}>
        <GooglePlacesAutocomplete
          placeholder= {this.props.locationType === 'origin' ? 'Where are you leaving from?' : 'Where are you going to?'}
          minLength={2} // minimum length of text to search
          autoFocus={false}
          fetchDetails={true}
          onPress={this._handleInput.bind(this)}
          // getDefaultValue={() => {
            // return ''; // text input default value
          // }}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: env.GOOGLE_KEY,
            language: 'en', // language of the results
            types: 'geocode', // default: 'geocode'
          }}
          styles={{
            container: {
              // backgroundColor: 'black'
            },
            description: { //Background of the text in the results
              // backgroundColor: 'white' //
            },
            textInputContainer: {
              // display:'none',
              backgroundColor: 'rgba(0,0,0,0)',
              borderTopWidth: 0,
              borderBottomWidth:0,
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              marginBottom: -10,
              paddingTop: 0
            },
            textInput: {
              //Entire container for text
              // backgroundColor: 'black',
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: '#5d5d5d',
              fontSize: 16,
              textAlign: 'center'
            },
            loader: {

            },
            listView: {
              //Entire cell of results
              marginRight: 10,
              marginLeft: 10,
              flexDirection: 'column',
              backgroundColor: 'white',
              marginTop: 20
            },
            predefinedPlacesDescription: {
              //Equivalent of description but for 'current location' & other preloaded locations

            },
            poweredContainer: {
              //The Google 'powered by' logo
              opacity: 0,
              height: 0
            },
            powered: {
              //Not sure
            }
          }}
          
          currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          currentLocationLabel="Current location"
          nearbyPlacesAPI='GoogleReverseGeocoding' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        />
      </View>
    );
  }
}

module.exports = LocationField;
