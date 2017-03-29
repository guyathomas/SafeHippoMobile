import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';


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
  }

  render() {
    return (
      <View style={styles.container} >
        <MapView
          style={ styles.map }
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

module.exports = RouteFinder;
