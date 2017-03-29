import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import LocationField from './LocationField'
import TakeMeHome from './TakeMeHome'
import RouteLink from './RouteLink';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'flex-start',
    flexDirection: 'column',
    zIndex: 1
  }, 
  homeContainer: {
    flexDirection: 'row'
  }
});


class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  showLink() {
    return this.props.url ? <RouteLink url={this.props.url} /> : <View />
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container} >
        <View>
        </View>
        <LocationField locationType='origin' updateLocation={this.props.updateLocation} />
        <LocationField locationType='destination' updateLocation={this.props.updateLocation} />
        <View style={styles.homeContainer} >
          <TakeMeHome getRoute={this.props.getRoute} />
          {this.showLink()}
        </View>

      </View>
    );
  }
}

module.exports = Form;
