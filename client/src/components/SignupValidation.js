
//do validations
const SignupValidation = (signup) => {
    let errors = {};

    if(!signup.email){
        errors.email = "Email address is required."
    } else if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(signup.email)){
        errors.email = "Email address is not valid."
    }

    if(!signup.firstName){
        errors.firstName = "First name is required."
    }

    if(!signup.lastName){
        errors.lastName = "Last name is required."
    }

    if(!signup.password)
    {
        errors.password = "Password is required."
    }
    else if(!signup.password.lenght == 5)
    {
        errors.password = "Password must be at least 5 characters."
    }
    if(!signup.passwordComfirmation){
        errors.passwordComfirmation = "password confirmation is required"
    }
    else if(signup.password !== signup.passwordComfirmation)
    {
        errors.passwordComfirmation = "Password Comfirmation does not match the password."
    }
    if(!signup.dateofBirth)
    {
        errors.dateofBirth = "Date of Birth is required."
    }

    return errors;
}

export default SignupValidation;