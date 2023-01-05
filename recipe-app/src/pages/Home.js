// import {  signOut,onAuthStateChanged } from "firebase/auth";
// import { auth } from '../firebase';
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    // const handleLogout = () => {               
    //     signOut(auth).then(() => {
    //     // Sign-out successful.
    //     navigate("Home");
    //         console.log("Signed out successfully")
    //     }).catch((error) => {
    //     // An error happened.
    //     });
    // }

    // useEffect(()=>{
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //           // User is signed in, see docs for a list of available properties
    //           // https://firebase.google.com/docs/reference/js/firebase.User
    //           const uid = user.uid;
    //           // ...
    //           console.log("uid", uid)
    //         } else {
    //           // User is signed out
    //           // ...
    //           console.log("user is logged out")
    //         }
    //       });
    //     }, [])
         
 
    return(
        <>
            <nav>
                <h1>
                    Welcome to My Recipe Book
                </h1>

                <p>
                    To login click this button
                </p>
                <div> 
                    <button onClick={navigate('/Login')}>
                        Login
                    </button>
                </div>

                <p>
                To sign up click this button
                </p>
                <div>
                    <button onClick={navigate('/Login')}>
                        Sign Up
                    </button>
                </div>
 
                <div>
        			{/* <button onClick={handleLogout}>
                        Logout
                    </button> */}
        		</div>
            </nav>
        </>
    )
}
 
export default Home