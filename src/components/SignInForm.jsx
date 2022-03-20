import logo from "./../img/logo.svg";
import Input from "./Input";
export default function SignInForm(){


    return(
    <form className="user-form">
            <img src={logo} alt="logo" id="logo" />

            <Input item='email'/>
            <Input item="password"/>
        

    </form>

    )
}