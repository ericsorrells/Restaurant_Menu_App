# Up and Running
The following steps will help you get the application installed and running in a development environement:
1. Install node modules with: `yarn`
2. Start the application in the development environment by running the following command: `yarn dev`

# Running Tests
Tests can be run using the `yarn test` command

# Level 2: Add and Remove Menu Items
The application includes the concept of an 'admin' user, which has authorization to make changes to the menu. To implement the admin features, such as
the ability to create and delete items, add the following 'admin' query param to the URL: `/?admin=true`

