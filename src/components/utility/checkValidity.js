const checkValidity = (value, rules) => {
    let formIsValid = true;

    if (rules.required && rules.email) {
        formIsValid = value.trim() /* remove whitespaces */ !== "" && formIsValid;
    } 
    
    if (rules.minLength) {
        formIsValid = value.length >= rules.minLength && formIsValid;
    } 
    
    if (rules.maxLength) {
        formIsValid = value.length <= rules.maxLength && formIsValid;
    } 
    
    if (rules.email) {
        formIsValid = /.+@.+\.[A-Za-z]+$/.test(value) && formIsValid
    }

    if (rules.phone) {
        formIsValid = value.includes("421") || value.includes("420")
        formIsValid = value.length <= rules.maxLength && formIsValid;
        formIsValid = value.length >= rules.minLength && formIsValid;
    }

    return formIsValid;
}

export default checkValidity;