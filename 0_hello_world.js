/**
 *  0_hello_world.js
 */

import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';


export default class HelloWorldApp extends Component {

    render() {

        return (

            <Text>Hello world!</Text>

        );

    }

}

// Skip this line if using Create React Native App
AppRegistry.registerComponent('HelloWorld', () => HelloWorldApp);

// The React native code can also be imported from another component with the following code:
// import HelloWorldApp from './HelloWorldApp';

/* EOF */
