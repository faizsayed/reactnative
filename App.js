import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView,
  TextInput,
  ActivityIndicator,
  DrawerLayoutAndroid,
  ImageBackground,
  ProgressBarAndroid,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R from your keyboard on AVD to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(Props){
    super(Props);
    //this.navigationView = this.navigationView.bind(this);
    this.state = {content: '', refreshing: false};
  }

  render() {
      var navigationView = (
        <View style={{flex: 1, backgroundColor: "#fff"}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </View>
      );
    
    return (
      <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}
          keyboardDismissMode= 'on-drag'>
          
      <ScrollView maximumZoomScale='10' minimumZoomScale="-10">
        <View style={styles.container}>
          <ProgressBarAndroid styleAttr="Horizontal" />
          <ProgressBarAndroid styleAttr="Horizontal" />
          <ProgressBarAndroid styleAttr="LargeInverse" />
          <ProgressBarAndroid styleAttr="Horizontal" color="limegreen" />
          <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.8} />
        </View>
        

        <View style={styles.container}>
          <View style={styles.container}>
            <TextInput style={styles.instructions2} placeholder="Type Something Here" onChangeText={(text) => this.setState({text})} />
            <Text style={styles.instructions3}>{this.state.text}</Text>
          </View>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions1}>To get started, edit App.js</Text>
          <Text style={styles.instructions2}>{instructions}</Text>
          <Text style={styles.instructions1}>{Platform.Version}</Text>
          <View style={styles.imageBox}>
           
          </View>
          <View style={[styles.instructions2 ,styles.horizontal]}>
            <ActivityIndicator size="large" color="red" />
            <ActivityIndicator size="small" color="#0000ff" />
          </View>
          <Button onPress={() => {Alert.alert('You Tapped the Button');}} title="Press Me " color="#9400d3" 
            accessibilityLabel="Learn more about this purple button"/>
          <Button title="I am Disabled Button " color="#9400d3" disabled={true} />
        </View>

        
      </ScrollView>
      
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    //overflow: 'scroll',
  },
  welcome: {
    flex: 2,
    backgroundColor: 'white',
    opacity: 0.5,
    fontSize: 50,
    textAlign: 'center',
    margin: 15,
    color: 'red'
  },
  instructions1: {
    flex: 2,
    backgroundColor: '#ffea9e',
    height: 50,
    fontSize: 25,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'blue',
    margin: 15,
    marginTop: 10,
  },
  instructions2: {
    flex: 3,
    backgroundColor: '#ffb7b5',
    opacity: 0.5,
    fontSize: 25,
    textAlign: 'center',
    color: 'magenta',
    margin: 15,
  },
  instructions3: {
    flex: 3,
    backgroundColor: '#ffb7b5',
    height: 50,
    opacity: 0.5,
    fontSize: 25,
    textAlign: 'center',
    color: 'magenta',
    margin: 15,
  },
  imageBox: {
    flex: 2,
    margin: 15,
    width: 300,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
  }
});