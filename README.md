# ReactNative-Firebase-Proj
A social network to help women who are in and out of the cycle of violence with the help of AI, advanced tools and a forum
A React Native application developed using **Expo Go**, **JavaScript**, and **Firebase**. This app is designed to run on both Android and iOS devices, providing real-time data synchronization, authentication, and storage using Firebase services.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Firebase Configuration](#firebase-configuration)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)

## Project Overview

This project is a cross-platform mobile application built with React Native and Expo Go, utilizing Firebase for backend services like authentication, Firestore for data storage, and Firebase Storage for file uploads. It demonstrates core app features such as user login, real-time database integration, and profile management.

## Features

- **Cross-Platform Support**: Runs on Android and iOS via Expo Go.
- **Firebase Authentication**: User sign-in and registration using Firebase.
- **Real-Time Data**: Sync data with Firestore and display live updates.
- **Profile Management**: Users can upload profile pictures and update personal details.
- **Push Notifications**: Enable push notifications using Firebase Cloud Messaging (FCM).
- **File Storage**: Store and retrieve images using Firebase Storage.

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js**: Download and install from [Node.js website](https://nodejs.org/).
- **Expo CLI**: Install globally by running:
  ```bash
  npm install -g expo-cli
  ```

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/your-project.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd your-project
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Run the project**:
   ```bash
   expo start
   ```

5. Scan the QR code with your phone using the **Expo Go** app to preview the app.

## Firebase Configuration

To set up Firebase, follow these steps:

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new Firebase project.
3. Add iOS and Android apps to your Firebase project and follow the instructions to download the `google-services.json` (for Android) and `GoogleService-Info.plist` (for iOS).
4. Install Firebase in your React Native project:
   ```bash
   npm install firebase
   ```

5. In the project, configure Firebase:

```javascript
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
```

6. **Place your Firebase config** in the corresponding environment files (`google-services.json` for Android, `GoogleService-Info.plist` for iOS).

## Available Scripts

- **expo start**: Starts the project and opens the development server.
- **expo build:android**: Build a production-ready Android APK.
- **expo build:ios**: Build a production-ready iOS bundle (requires Apple credentials).

## Dependencies

- **expo**: Development framework for React Native.
- **firebase**: Backend-as-a-service for authentication, real-time data, storage, and notifications.
- **react-native**: The framework for building native apps using React.
- **expo-image-picker**: For image upload functionality.

To install these dependencies, run:

```bash
npm install firebase react-native expo expo-image-picker
```

## user UI screens
![image](https://github.com/user-attachments/assets/16a89c94-a3fa-4429-a5c5-35ff29ed414f)
![image](https://github.com/user-attachments/assets/ed48a1e7-b17c-4cdb-bf4d-40bc0210eb69)
![image](https://github.com/user-attachments/assets/fabff0d8-485c-4aa3-b52e-6bb3e4f4844d)
![image](https://github.com/user-attachments/assets/486b76f9-878b-4f77-9330-4604305056ce)



