# Up and Running
## Starting the Application:
The following steps will help you get the application installed and running in a development environment:
1. Install node modules with: `yarn`
2. Start the application in the development environment by running the following command: `yarn dev`

# Running Tests
Tests can be run using the `yarn test` command

# Level 2: Add and Remove Menu Items
The application includes the concept of an 'admin' user, which has authorization to make changes to the menu. To implement the admin features, such as
the ability to create and delete items, add the following 'admin' query param to the URL: `/?admin=true`

# Level 3: Inline Editing
This application will allow a user to make inline edits to each menu items. In order to make edits, the `/?admin=true` URL param will need to be set. After the user is recognized as an 'admin', inline edits can be made by clicking on the elements to be changed. Images can be changed by clicking on the image itself.

# Level 4: Multiple Menu Management
The instructions didn't specify the types of alternate menus that might exist, so the app was created with 'lunch' and 'dinner' menus. Each item is tied to a specific menu. The dropdown can be used to filter items based on menu type.
