<h1 align="center" >
    <img src="./.github/logo.svg" width = "100px">
    
</h1>

<h1 align="center"> RENTX 🚘❤️ </h1>

<h2 align="center"> 
  The best car for you is here.
  Comfort, safety and practicality 🤩
</h2>

<h3 align="center">
  This app has developed using React Native with Expo Bare Workflow.
</h3>

# Cloning this repository

```
git clone https://github.com/RennanD/rentx-mobile.git
```

# ❗️ Requisites

For this aplication we need have installed:

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/) (Optional)
- [Expo cli](https://docs.expo.io/get-started/installation/) (Optional)

### Obs.:
If you don't use expo to runing this app, install the mobile environments
SDK's, following the documentation

- [React Native Environment](https://react-native.rocketseat.dev/)

## 💻 Mobile Application

<h1 align="center">
  <img alt="WebApp" src="./.github/smartphone.svg" width = "120px">
</h1>

<h3 align="center">
  Now you can choose the car that suits you. 😎
</h3>

<p>
  In this project we use:
</p>

- [Expo With Bare Workflow](https://docs.expo.io/bare/exploring-bare-workflow/) as React Native framework.
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) and [Lottie](https://github.com/lottie-react-native/lottie-react-native) for animations.
- [styled-components](https://styled-components.com/) for styles.


### ⚡️ Start

First, start our fake api:

In file `package.json`  and script `server`, adding your machine ip in host flag.
Example: `"server": "json-server ./src/services/server.json --host xxx.xxx.xx.x --port 3333 --delay 800"`

Now in `src/services/api.ts`, do the same thing adding your machine ip in `baseURL`.
Example: `baseURL: 'http://xxx.xxx.xx.x:3333',`

Then open new terminal window and run: 
```
yarn server 

# or

npm run server
```

To start application, run:

```
cd rentx-mobile
yarn
expo start

# or

cd rentx-mobile
npm install
expo start
```
## To run this app in a emulator/simulator

### IOS 🍎

In Expo server interface, click in `Run on iOS simulator`

### Android 👾

In Expo server interface, click in `Run on Android device/emulator`

## To run this app in a physical device

First, download Expo go in your device.
  - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US)
  - [IOS](https://apps.apple.com/br/app/expo-go/id982107779)

After, scan QrCode in Expo server interface

## Runing without Expo 🍎👾

with the native sdks installed, let's run the following commands

### Android 👾
```
cd rentx-mobile
yarn
yarn android

# or

cd rentx-mobile
npm install
npm run android
```

Obs.: In linux, you must open metro bundler in a new tab

```
cd rentx-mobile
yarn
yarn start

# or

cd rentx-mobile
npm install
npm run start
```

### IOS 👾 (Mac user only)
```
cd gofinances-mobile
yarn
yarn ios

# or

cd gofinances-mobile
npm install
npm run start
```

# App Demo 


<h1 align="center">
  <img alt = "The app" src = "./.github/rentx.gif" width = "400px" />
</h1>
