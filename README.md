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

![תמונה של WhatsApp‏ 2024-08-17 בשעה 19 20 31_7642f97e](https://github.com/user-attachments/assets/7e5c278e-5b5c-493c-8b54-3613497f6ca1)
![תמונה של WhatsApp‏ 2024-08-17 בשעה 19 20 31_3e650e5a](https://github.com/user-attachments/assets/7a3b3e1b-a137-48dc-a926-dee7dc8c08ef)
![תמונה של WhatsApp‏ 2024-08-17 בשעה 19 20 31_bc488582](https://github.com/user-attachments/assets/2d138398-a13c-4ccc-a147-d2709fa459b2)
![תמונה של WhatsApp‏ 2024-08-17 בשעה 19 19 24_dfa976c2](https://github.com/user-attachments/assets/bc38e82b-a6ad-4ca4-99ed-798c32c2ab44)
![תמונה של WhatsApp‏ 2024-08-17 בשעה 19 19 22_6bea2b04](https://github.com/user-attachments/assets/2e095adf-1f4b-4fdb-a501-a938acf5c9ed)
![תמונה של WhatsApp‏ 2024-08-17 בשעה 19 19 21_c81083ac](https://github.com/user-attachments/assets/a14ebe1b-faa0-4141-b194-15cd638e32c8)
![תמונה של WhatsApp‏ 2024-08-17 בשעה 19 19 16_e19b49e8](https://github.com/user-attachments/assets/f76be396-1c02-4d2c-9728-504a9f580f82)
![תמונה של WhatsApp‏ 2024-08-17 בשעה 19 19 17_2f2ed193](https://github.com/user-attachments/assets/a5841a67-8af9-4e28-acf5-ece250fc7cea)
![תמונה של WhatsApp‏ 2024-08-17 בשעה 19 19 18_76e2de8a](https://github.com/user-attachments/assets/e3a0df1c-3758-487a-90eb-fe9aaaeb0226)

