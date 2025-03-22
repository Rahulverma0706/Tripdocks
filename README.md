# TipTap Editor

## Description
This project is a rich text editor built using TipTap. It includes formatting options such as **Bold**, *Italic*, and _Underline_, along with a dynamic variable insertion feature triggered by `{{`.

## Features
- **Text Formatting:** Bold, Italic, and Underline.
- **Variable Insertion:** Typing `{{` opens a popover menu with selectable variables.
- **Export Content:** Export content as JSON or plain text.
- **Styled Variable Tokens:** Inserted variables appear as distinct tokens with a remove option.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Rahulverma0706/Tripdocks.git
   ```
2. Navigate to the project directory:
   ```sh
   cd my-editor-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Deployment
- The application can be deployed on **Vercel** or **Heroku**.
- Ensure the build process is completed using:
   ```sh
   npm run build
   ```
- Deploy using Vercel:
   ```sh
   vercel --prod
   ```

## Screenshots
![Screenshot 2025-03-22 231900](https://github.com/user-attachments/assets/2fc16d3b-69b1-4445-843a-465b660f6380)
![Screenshot 2025-03-22 231949](https://github.com/user-attachments/assets/5a8db389-544a-4f97-b649-c8163669930f)
![Screenshot 2025-03-22 232023](https://github.com/user-attachments/assets/eb908418-62d9-4ec1-bc49-5e8a9fda1cd9)
![Screenshot 2025-03-22 232044](https://github.com/user-attachments/assets/04a88a8e-1cd5-43a4-b688-e000a99c3016)


## Technologies Used
- **React**
- **TipTap Editor**
- **JavaScript**
- **CSS**

## Usage
1. Start typing inside the editor.
2. Click **B, I, U** to format selected text.
3. Type `{{` to trigger the popover for variable insertion.
4. Click **Export Content** to log JSON and text output in the console.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT License

