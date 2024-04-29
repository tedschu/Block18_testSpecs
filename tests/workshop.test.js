// WRITE YOUR TEST FUNCTION(S)

// To run test in terminal: npm run test 

const { create } = require("domain");
const {logIn} = require("../workshop.js");
const {createAccount} = require("../workshop.js");
const {googleAuth} = require("../workshop.js");




test('was logging in successful?', ()=>{
    expect(logIn("luke", "")).toBeFalsy();
    expect(logIn("", "pass")).toBeFalsy();
    expect(logIn("", "")).toBeFalsy();
    expect(logIn("luke", "pass")).toBeTruthy();


    // // checking for the exact same result
    // expect(logIn("ted", "pass")).not.toBeTruthy();
    // expect(logIn("ted", "pass")).toBeFalsy();
})


test('was creating an account successful?', ()=>{
    expect(createAccount("luke@gmail.com", "")).toBeFalsy();
    expect(createAccount("", "pass")).toBeFalsy();
    expect(createAccount("user@test.com", "pass")).toBeTruthy();


})


test('was google authentication successful?', ()=>{
    expect(googleAuth("luke@gmail.com", "")).toBeFalsy();
    expect(googleAuth("", "pass")).toBeFalsy();
    expect(googleAuth("user@gmail.com", "pass")).toBeTruthy();


})

// text("feature that we want to work", ()=>{

// //     see details function
// //     function called show details of single player
// //     showcase players name
// //     theres a picture value
// })