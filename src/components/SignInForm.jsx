import logo from "./../img/logo.svg";
import fbIcon from "./../img/fb-icon.svg";
import googleIcon from "./../img/google-icon.svg"
import Input from "./Input";
export default function SignInForm(){


    return(
    <form className="user-form">
            <img src={logo} alt="logo" id="logo" />

            <Input item='email'/>
            <Input item="password"/>
            <button className="btn">Log in</button>
            <a href="#" className="forget-pass">Forgot Password</a>
            <h4 className="or">or</h4>
            <div className="icons">
                <img src={fbIcon} alt="Facebook-icon" className="icon icon-fb" />
                <img src={googleIcon} alt="Google-Icon" className="icon icon-google" />
                
             </div> 
             
        <h4 className="unregistered">Don't have an account?  a   <a href="#" className="link">Sign Up</a></h4>
            

            
        

    </form>

    )
}