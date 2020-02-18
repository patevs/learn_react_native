/**
 *  hello_world.js
 */

/*************
 * * IMPORTS *
 *************/

import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

// The React native code can also be imported from another component with the following code:
// import HelloWorldApp from './HelloWorldApp';

/*********************
 * * COMPONENT CLASS *
 *********************/

class HelloWorldApp extends Component {
		// ..
    render() {

        return (

            <Text>Hello world!</Text>

        );

		}
		// ..
}

// Skip this line if using Create React Native App
AppRegistry.registerComponent('HelloWorld', () => HelloWorldApp);

/*************
 * * EXPORTS *
 *************/

// The following statement can be excluded if you declare the above class like:
// 	export default class HelloWorldApp ...

export default HelloWorldApp;

/* EOF */
