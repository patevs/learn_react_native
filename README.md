# Learn React Native

> Resources and code snippets related to my learning of the `React Native` framework.

---

**React Native** is an open-source mobile application framework created by Facebook.
It is used to develop applications for *Android*, *iOS*, *Web*, and *UWP* by enabling
developers to use `React` along with native platform capabilities.

---

## Links & Resouces

* [`react-native`](https://github.com/facebook/react-native)
  * [Website](https://facebook.github.io/react-native/)
  * [Documentation](https://facebook.github.io/react-native/docs/getting-started.html)
    * [Running on Device](https://reactnative.dev/docs/running-on-device)
  * [`awesome-react-native`](https://github.com/jondot/awesome-react-native)

[](.)

* [`react`](https://github.com/facebook/react)
  * [Website](https://reactjs.org/)
  * [Documentation](https://reactjs.org/docs/getting-started.html)

### Example Projects

* [`devhub`](https://github.com/devhubapp/devhub) TweetDeck for GitHub - Filter Issues, Activities & Notifications - Web, Mobile & Desktop
* [`nzcovidtracer-app`](https://github.com/minhealthnz/nzcovidtracer-app) Front-end of the NZ COVID Tracer app.
* [`react-native-universal-monorepo`](https://github.com/mmazzarolo/react-native-universal-monorepo) React Native boilerplate supporting multiple platforms: Android, iOS, macOS, Windows, web, browser extensions, Electron.

---

## Expo CLI Quickstart

* [`expo-cli`](https://github.com/expo/expo-cli)
  * [npmjs/expo-cli](https://www.npmjs.com/package/expo-cli)
  * [Website](https://expo.io/)
  * [Documentation](https://docs.expo.io/versions/latest/workflow/expo-cli/)

Assuming that you have [Node 10 LTS](https://nodejs.org/en/download/) or greater installed, you can use `npm` to install the Expo CLI command line utility:

```bash
$ npm install --global expo-cli
# or shorthand
$ npm i -g expo-cli
# verify installation
$ expo --version
```

Then run the following commands to create a new React Native project called "AwesomeProject":

```bash
expo init AwesomeProject

cd AwesomeProject
npm start # you can also use: expo start
```

This will start a development server for you.

---

## React Native CLI Quickstart

Requires:

* `NodeJS` 8.3 or newer
* `Python2`
* `JDK8`
* [`Android Studio`](https://developer.android.com/studio/index.html)
  * Android SDK
  * Android SDK Platform
  * Performance (Intel ® HAXM)
  * Android Virtual Device

### Create a New Application

React Native has a built-in command line interface, which you can use to generate a new project. You can access it without installing anything globally using `npx`, which ships with Node.js. Let's create a new React Native project called "AwesomeProject":

```bash
npx react-native init AwesomeProject
```

Run `npx react-native run-android` inside your React Native project folder:

```bash
cd AwesomeProject
npx react-native run-android
```

---

## Start Android Emulator from Command Line

* [Emulator Command Line](https://developer.android.com/studio/run/emulator-commandline)
* [Launch Android Emulator](https://stackoverflow.com/questions/4974568/how-do-i-launch-the-android-emulator-from-the-command-line)

---
