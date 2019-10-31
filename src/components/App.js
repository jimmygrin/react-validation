import React, { useState } from "react"
import Validator from "validator"
import { ValidationError } from "jest-validate/build/utils"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Success from "./success"

function App() {

  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  // const [email, setEmail] = useState('')
  // const [emailError, setEmailError] = useState('')
  const [userName, setUserName] = useState('')
  const [userNameError, setUserNameError] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirm, setConfirm] = useState('')
  // const [website, setWebsite] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
      let err = false

    if (name == "") {
      err = true
      setNameError('Cannot be blank')
    } else {
      err = false
      setNameError('')
    }

    if (userName == "") {
      err = true
      setUserNameError('Cannot be blank')
    } else {
      err = false
      setNameError('')
    }

    // isFQDN(str [, options]) - website validator////

    // if (email !== "") {
    //   if (!validator.isEmail(email)){
    //     err = true
    //     setEmailError("Must be a valid email")
    //   } else {
    //     setEmailError("")
    //   } else {
    //     err = true
    //     setEmailError("Cannot be blank")
    //   }

    // if (website !== ""){
    //     if (!validator.)
    // }

      if (!err) {
       
        console.log("submitted")        
        
          return (
            <Router>
              <div>
            
            <Route exact path = "/success" component={Success} />
             
            </div>
            </Router>
        )
        
        


      } else {
        console.log("not submitted")
      }
      }

  return (
    <div id="container">
    <h1>Profile Form - All fields required</h1>

    <form id="myform" onSubmit={handleSubmit}>
        <label className="error"> {nameError} </label>
        <input
            className={nameError === "" ? "" : "error"} 
            onChange={e => setName(e.target.value)} 
            placeholder="Type your name"
            type="text" 
            value={name}
        ></input>
        {/* <label className="error"> {emailError} </label> 
        <input
            classEmail={emailError === "" ? "" : "error"} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="Type your email"
            type="text" 
            value={email}
        ></input>  */}
        
        <label className="error"> {userNameError} </label>
        <input
            className={userNameError === "" ? "" : "error"} 
            onChange={e => setUserName(e.target.value)} 
            placeholder="Type your user name"
            type="text" 
            value={userName}
        ></input>
        <label className="error"> {userNameError} </label>
        <input type="password" name="password" id="password" value="" placeholder="Type your password"></input>
        <label className="error"> {userNameError} </label>
        <input type="password" name="confirm" id="confirm" value="" placeholder="Re-type your password"></input> 
        <label className="error"> {userNameError} </label>
        <input type="url" name="website" id="website" value="" placeholder="Type your website"></input> 
        <input id="button" type="submit"></input> 
    </form>
 
</div>

  )
}

export default App
