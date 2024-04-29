// Using Jest as a test suite to help run tests
// Tests should be written to test a few scenarios to ensure you're getting the ouptuts you need

// .toBe is for checking if values equal within a function
// .toEqual is more to check within objects (ex. data within an object)
    // can do .not.toBe or .not.toEqual to flip it (e.g. you DON'T expect it to be X case)




    //works
    function logIn(username, password){

        // if the user does not input a username or password, the function should return false, otherwise should return true if both values have some information inside
    
        if(username.length===0||password.length===0){
            return false
        }else if(username==="luke"&&password==="pass"){
            return true
        } else{
            return false
        }
    }
    


    function createAccount(email, password){
        if(email===0 || password===0) {
            return false
        } else if(email === "user@test.com" && password === "pass") {
            return true
        } 
        else {
            return false
        }

    }

    function googleAuth(email, password){
        if(email===0 || password===0) {
            return false
        } else if(email === "user@gmail.com" && password === "pass") {
            return true
        } 
        else {
            return false
        }

    }


    
    module.exports = {logIn, createAccount, googleAuth}
    
