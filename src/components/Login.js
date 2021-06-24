// import React, { useState } from 'react'

// function Login() {
//     const adminUser = {
//         email: "user@user.com",
//         password: "123"
//     }

//     const [user, setUser] = useState({name: "", email: ""})

//     const Login = detials => {
//         console.log(detials)
//     }
    



//     return (
//         <div className="Login">
            
//         </div>
//     )
// }

// export default Login



// Redirect to Login After Logout
// Now we’ll do something very similar for the logout process.

//  Add the useHistory hook in the beginning of App component.

// COPYconst history = useHistory();
//  Import useHistory from React Router in the header of src/App.js.

// COPYimport { useHistory } from "react-router-dom";
//  Add the following to the bottom of the handleLogout function in our src/App.js.

// COPYhistory.push("/login");
// So our handleLogout function should now look like this.

// COPYasync function handleLogout() {
//   await Auth.signOut();

//   userHasAuthenticated(false);

//   history.push("/login");
// }
// This redirects us back to the login page once the user logs out.

// Now if you switch over to your browser and try logging out, you should be redirected to the login page.

// You might have noticed while testing this flow that since the login call has a bit of a delay, we might need to give some feedback to the user that the login call is in progress. Also, we are not doing a whole lot with the errors that the Auth package might throw. Let’s look at those next.

