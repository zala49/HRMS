import React, {useState} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Login.css";

const Login = (props) => {
    const [name, setName] = useState({username:"", password:""});
    const[password, setPassword] = useState(false);
    // console.log(name)
    // const handleusername = (event) => {
    //     setName(event.target.value);
    // }
    // const handlepassword = (event) => {
    //     setName(event.target.value);
    // }
    /**
     * This function handles input values from user.
     * @param {*} event 
     */
    const handleInputChange = (event) =>{
        setName({...name,[event.target.name]:event.target.value})
    }
    
    /**
     * This function is used to show user password when clicked on show password button.
     */
    const showpassword = () => {
        setPassword(old => !old);
    }

    const hidepassword = () => {
        setPassword(false);
    }

    const viewpassword = () => {
        setPassword(true);
    }

    const handleSubmit = (event) => {
        console.log("Button Clicked", event);
        if (name.username === 'admin' && name.password === 'admin'){
            alert("Logged In Successfully.");
        }else{
            alert('Invalid Username or Password');
        }
    }
    return(
        <div className="formcontrol">
            <div className="form">
                <h3 className="formheading">HRMS Login</h3>
                <Form.Floating className="mb-3 input">
                    <input type="text" name="username" className="login" value={name.username} onChange={handleInputChange} placeholder="UserName"></input>
                </Form.Floating>
                <Form.Floating className="mb-3 input">
                    <input type={password ? "text" : "password"} name="password" className="login" value={name.password} onChange={handleInputChange} placeholder="Password"></input>
                </Form.Floating>
                    <button className="mb-3" onMouseUp={hidepassword} onMouseDown={viewpassword}>Show password</button>
                    {/* <button className="mb-3" onClick={showpassword}>Show Password</button> */}
                    <Button variant="success" className="mb-3 submit" onClick={handleSubmit}>Login</Button>
            </div>
        </div>
    )
}

export default Login
