# Macro Calculator

The macro calculator app is built for one user type: someone interested in calculating macronutrient needs everyday. Here is the link to the deployed site [https://macro-calculator.netlify.com/](https://macro-calculator.netlify.com/).

After submitting preliminary information through the sign up flow (e.g. age, height, weight, exercise goals), the user is directed to the login page. When a user logs into the app, they will be directed to the home page (or profile page) which will display the user's recommended daily caloric intake and macro nutrient breakdown (i.e. how many grams of protein, carbs, and fat should be consumed in a day). There is a page which allows the user to update her current weight or weight goal. Finally, there is a snack and meal page which gives the user three choices: 4 meals a day, 3 meals a day, and 3 meals and 2 snacks a day. Based on the user's selection, a result will be shown that informs the user that they can eat x nubmer of grams of protein, carbs, and fat at each meal (or snack).

Team Contribution:
Communicated with the team daily through Slack, Trello, and individual Zoom calls. Worked with Java backend engineer to troubleshoot CORS issue (until he left on Monday night for the week) and with UI engineers to go over the basics of React.

React Fundamentals:
Created both functional and class components as required and used array method to dynamically render elements (e.g. the PieChart element in the home page component).

React Composition:
I used Redux to manage the state of the application and localstorage techniques that subscribe the store to changes in the UI. I used render props to create the PrivateRoute component which prevents users from accessing internal pages until they have successfully logged in. Higher order components are used to connect components to the Redux store. I also used HOCs to style the NavLinks provided by React Router using styled components.

SPA - AJAX:
Created a functioning SPA using React Router while incorporating all of the CRUD operations. POST - register user and login user
PUT - Update user attributes (goal or weight)
GET - Get data for individual user after the user has been created on initial page load.
DELETE - Delete individual user's account.
