# Job Search App - JobIt

This is a job search app built with Expo and React Native, which allows users to search for jobs using the RapidAPI job search service. It provides a simple and intuitive interface for users to find relevant job listings based on their search criteria.

## Features

- Search for jobs based on keywords, location, and other filters.
- View detailed job listings with information such as job title, company, location, and description.
- Save favorite jobs for later reference.
- Apply for jobs directly from the app.

## Installation

Follow these steps to set up and run the app locally:

1. Clone this repository:

   ```bash
   git clone https://github.com/Jasleen8801/jobit.git
   ```

2. Navigate to the project dependencies:

    ```bash
    cd jobit
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your RapidAPI key:

    ```bash
    RAPID_API_KEY=your_rapidapi_key_here
    ```

5. Start the app:

    ```bash
    npm start
    ```

4. Use the Expo Go app on your mobile device to scan the QR code displayed in the terminal or open the app in an iOS or Android emulator.


## Configuration

The app uses the `react-native-dotenv` package to load environment variables. Make sure to set the `RAPID_API_KEY` variable in your `.env` file with your RapidAPI key.

# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)