import logo from "./../img/logo.svg";
import fbIcon from "./../img/fb-icon.svg";
import googleIcon from "./../img/google-icon.svg"
import Input from "./Input";
export default function SignInForm(){


    return(
    <form className="user-form">
            <img src={logo} alt="logo" id="logo" />
            <h1 className="form-header">Explore The Best Tours... Hurry up!!</h1>
            <Input item='email'/>
            <Input item="password"/>
            <a href="#" className="forget-pass">Forgot Password?</a>
            <button className="btn">Log in</button>
            <h4 className="or">or</h4>
            <div className="icons">
                <a href="http://facebook.com"><img src={fbIcon} alt="Facebook-icon" className="icon icon-fb" /></a>
                <a href="http://google.com">
                <img src={googleIcon} alt="Google-Icon" className="icon icon-google" /></a>
             </div> 
             
        <h4 className="unregistered">Don't have an account?<a href="#" className="link">Sign Up</a></h4>
        
    </form>

    )
}