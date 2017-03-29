import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import Form from './Form'


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

class RouteFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: { lat: 37.78825, lon: -122.4324 },
      destination: { lat: 37.79825, lon: -122.4724 }
    }
  }

  _updateLocation(locationType, data) {
    if (locationType === 'origin') {
      console.log('The new origin is', data)
    } else if (locationType === 'destination') {
      console.log('The new destination is', data)
    } else {
      console.log('The locationTypetype was invalid', locationType)
    }
  }

  render() {
    const center = {
      lat: (this.state.origin.lat + this.state.destination.lat) / 2,
      lon: (this.state.origin.lon + this.state.destination.lon) / 2
    }
    const deltas = {
      lat: Math.abs(this.state.origin.lat - this.state.destination.lat),
      lon: Math.abs(this.state.origin.lon - this.state.destination.lon)
    }

    return (
      <View style={styles.container} >
        <Form updateLocation={this._updateLocation.bind(this)/>
        <MapView
          style={ styles.map }
          initialRegion={{
            latitude: center.lat,
            longitude: center.lon,
            latitudeDelta: deltas.lat,
            longitudeDelta: deltas.lon,
          }}
        />
      </View>
    );
  }
}

module.exports = RouteFinder;
