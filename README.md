# Widgets

This project is a Vue 3 application that displays a list of widgets fetched from an API. Each widget can be customized and updated through the UI.

## Features

- Fetch widgets from a remote API
- Display widgets in a responsive layout
- Update widget properties such as linking, color, and activation status
- Use of Pinia for state management
- Type-safe schema validation with Zod

## Project Structure

- `src/`: Contains the application's source code
  - `assets/css/`: Contains the application's CSS files
    - `base.css`: Base CSS file with global styles and variables
  - `components/`: Contains Vue components
    - `GSCheckbox.vue`: Checkbox component
    - `GSColor.vue`: Color selection component
    - `GSInfo.vue`: Info tooltip component
    - `GSToggleSwitch.vue`: Toggle switch component
    - `WidgetHeader.vue`: Header component for widgets
    - `WidgetItem.vue`: Component for displaying and interacting with a single widget
  - `composables/`: Contains reusable composable functions
    - `getBackgroundColor.ts`: Function to get the background color based on the widget color
    - `getForegroundColor.ts`: Function to get the foreground color based on the widget color
  - `schema/`: Contains Zod schemas
    - `Widget.ts`: Defines the schema and types for widgets
  - `stores/`: Contains Pinia stores
    - `widgetStore.ts`: Store for managing widget state
  - `App.vue`: Main application component
  - `main.ts`: Entry point for the application

## Setup and Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
   This will start the Vite development server. Open your browser and navigate to `http://localhost:5173/` to see the application.

## Usage

### Update Widgets

- **Link to Public Profile**: Toggle the checkbox to link or unlink the widget.
- **Badge Color**: Select a color from the available options.
- **Activate Badge**: Toggle the switch to activate or deactivate the widget.

Changes are immediately reflected in the application state.

## Technology Choices

- **Pinia for State Management**: Pinia is a lightweight and intuitive state management library for Vue 3. It provides a simple API for managing state and actions.
- **Zod for Schema Validation**: Zod is a TypeScript-first schema declaration and validation library. It ensures that the data fetched from the API conforms to the expected structure, providing type safety and reducing runtime errors.
- **Responsive Design**: The application is designed to be responsive, ensuring a good user experience on both desktop and mobile devices.

## Additional Scripts

- **Build the project**:

  ```sh
  npm run build
  # or
  yarn build
  # or
  pnpm build
  ```

  This will create a production-ready build of the application.

- **Preview the build**:

  ```sh
  npm run preview
  # or
  yarn preview
  # or
  pnpm preview
  ```

  This will start a local server to preview the production build.

- **Run unit tests**:

  ```sh
  npm run test
  # or
  yarn test
  # or
  pnpm test
  ```

  This will run the unit tests using Vitest.

- **Lint the code**:

  ```sh
  npm run lint
  # or
  yarn lint
  # or
  pnpm lint
  ```

  This will lint the code using ESLint and automatically fix any issues.

- **Format the code**:

  ```sh
  npm run format
  # or
  yarn format
  # or
  pnpm format
  ```

  This will format the code using Prettier.

## Conclusion

This project demonstrates a modern Vue 3 application with state management, schema validation, and a responsive design. The provided instructions should help you set up, run, and use the service effectively.
