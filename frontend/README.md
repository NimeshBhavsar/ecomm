# eCommerce Application

This project is a basic implementation of an eCommerce application using React and the latest version of `v18` along with `react-router-dom v6`. The goal is to create a simple, well-designed, well-commented, and tested codebase.

## Youtube Video Link
⬇️⬇️click to view the video⬇️⬇️
[![Watch the video](https://img.youtube.com/vi/FuJxDyHbFqY/maxresdefault.jpg)](https://www.youtube.com/embed/FuJxDyHbFqY)

## Functionalities

1. **User Authentication:**
   - Users can register and log in to the application.

2. **Product Viewing:**
   - Authenticated users can view all available products.

3. **Cart Management:**
   - Users can add products to their shopping cart.
   
4. **Favorites:**
   - Users can mark products as their favorites.

## Setup Instructions

Follow these steps to set up and run the application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/NimeshBhavsar/ecomm.git
   cd eco
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   
   Mode to backend folder and install node libraries
   ```bash
   cd ./backend
   npm install
   ```
   then run server by this command
   ```bash
   node index.js
   ```
   this will run server on port 5000

4. Start the React app:
   ```bash
   cd ./frontend
   npm start
   ```
   incase of an error try using this command:
   ```bash
   $env:NODE_OPTIONS = "--openssl-legacy-provider"
   ```
   

5. Open your browser and navigate to `http://localhost:3000` to use the application.

## Improvements

Some potential improvements for this submission could include:

- **Responsive Design:** Ensure the application is fully responsive for various screen sizes. However it is still responsive for mobile version of larger screen

- **Enhanced User Experience:** Implement more user-friendly features, such as error handling and feedback messages.

- **Security:** Implement secure authentication practices and protect sensitive user data.

## Future Considerations

If allocated more time, the following additions could be made:

- **Add users:** Allow user signups

- **Order Processing:** Implement a checkout process and order tracking.

- **User Profile:** Allow users to manage their profiles, including order history and personal details.

## Hosted Repository

The hosted repository for this project can be found on [GitHub](https://github.com/NimeshBhavsar/ecomm).

Feel free to reach out for any further information or assistance. Happy coding!
