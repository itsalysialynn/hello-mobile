# Environment Setup

This guide covers the essential steps for setting up your development environment to run a React Native project on Android (using Android Studio) and iOS (using Xcode).

## Requirements

- macOS for iOS development (Xcode is only available on macOS)
- Windows, Linux, or macOS for Android development (Android Studio)

## 1. Install Dependencies

```sh
brew install watchman
brew install rbenv
brew install nvm
brew install cocoapods
```

## 2. Set Ruby Version

```sh
rbenv install 3.2.2 && rbenv use 3.2.2
```

## 3. Set Node Version

```sh
nvm install . && nvm use .
```

## 4. Install NPM Dependencies

```sh
yarn
```

## 5. Install Bundler

```sh
gem install bundler
```

## 6. Bundle Install Gems

```sh
bundle install
```

## 7. Install Cocopods

```sh
cd ios && pod install
```

# Getting Started

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.
