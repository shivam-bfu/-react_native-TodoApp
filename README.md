This project is built with React Native (v0.80.1), Redux Toolkit, TypeScript, and other libraries.
Follow these steps to get it running on your machine.

✅ 1. Prerequisites
Before you start, make sure you have:

Node.js v18 or higher (check with node -v)

npm (v9+) or Yarn

JavaScript & native build tools:

Android: Android Studio & SDK (emulator or device with USB debugging)

iOS: Xcode & CocoaPods (only on macOS)

Follow the official React Native environment setup guide (choose “React Native CLI Quickstart”).

📥 2. Clone the repo
bash
Copy
Edit
git clone <your-repo-url> todoApp
cd todoApp
📦 3. Install dependencies
bash
Copy
Edit
# Using npm
npm install

# OR using Yarn
yarn install
This installs:

Core React Native packages

Redux, i18n, AsyncStorage, SelectDropdown, etc.

Development tools: TypeScript, ESLint, Jest, Prettier, etc.

⚙️ 4. iOS setup (macOS only)
If you’re building for iOS, install CocoaPods dependencies:

bash
Copy
Edit
cd ios
pod install
cd ..
⚠️ Make sure you have CocoaPods installed:

bash
Copy
Edit
sudo gem install cocoapods
▶️ 5. Running the app
Start the Metro bundler in one terminal:

bash
Copy
Edit
npm start
# or
yarn start
Then, in another terminal, build & run your app:

Android
bash
Copy
Edit
npm run android
# or
yarn android
Make sure your emulator is running or a device is connected.

iOS
bash
Copy
Edit
npm run ios
# or
yarn ios
Note: First build might take a few minutes.

🧪 6. Testing
Run the test suite (using Jest):

bash
Copy
Edit
npm test
# or
yarn test
✏️ 7. Linting & formatting
Check code style with ESLint:

bash
Copy
Edit
npm run lint
# or
yarn lint
Format code with Prettier (optional):

bash
Copy
Edit
npx prettier --write .
🚀 You're ready!
Open App.tsx to start coding and make it your own!
With Fast Refresh, your changes appear instantly.


