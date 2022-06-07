# **Socializr project**



### **Socializr endpoints**
Method | Path | Purpose | 
------------- | ------------- | ------------ 
GET  | /  | homepage
GET  | /auth/logon | Render a page with a login form
POST | /auth/login | Accept and process information from the login form
GET  | /signup/register | Render a page with a sign-up form
POST | /signup/register | Accept and process information from the registration form
GET	 | /profile	 | Render profile page/form
POST | /profile	| Accepts and processes profile form
GET	 | /Newsfeed |	Renders post from newest to oldest
POST | /user/post	| Process data submitted from form text and or images.
GET |	/newsfeed	| Renders newsfeed based on user
GET |	/events	| Renders events to page.


### *Built using the following* ###
Package | Install Command | documentation
--- | --- | ---
[bcryptjs](https://www.npmjs.com/package/bcryptjs) | npm install bcryptjs | GitHub: https://github.com/dcodeIO/bcrypt.js  <br />other Documentation: [a-quick-guide-for-authentication-using-bcrypt-on-express-nodejs](https://medium.com/@mridu.sh92/a-quick-guide-for-authentication-using-bcrypt-on-express-nodejs-1d8791bb418f)
[react-modal](https://github.com/reactjs/react-modal) | npm install --save react-modal | GitHub: https://github.com/reactjs/react-modal


