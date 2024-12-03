# Employee-Management

This application involves **CRUD** operation to manage **Employee Name**, **Gender**, **Department**, **Date of Joining** and **Email Id**.

## Installation

### for zipped file

- unzip the file
- open with code editor
- open code terminal and run `npm install` to install the node modules.
- run `npm start` to start the application in the default browser.

### from GitHub repo
- clone the repository
- run command `npm install`
- run command `npm start`

## App controls

- A **Form** to add a new Employee containing a Submit button and a Reset button.
  - Submit button to add a new employee after all details filled.
  - Reset button to empty or reset all values inside form.
- A **Table** to view all employees detail with fields Employee Name, Gender, Department, Date of Joining, Email Id and Actions.
  - Actions contains two icons- **Edit** and **Delete**
  - On clicking Edit icon will let to edit employee details and shows an alert if date and email has incorrect format.
  - On clicking Delete icon will let to delete a employee detail

## Technologies Used

- **_React_** with **_Typescript_**.
- **_Tailwind CSS_** for style.
- **_Redux_** for state management.
- **_React-icons_** library to get icons.
