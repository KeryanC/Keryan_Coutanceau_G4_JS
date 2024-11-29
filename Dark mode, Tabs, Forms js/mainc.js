var submit = document.getElementById("submit")
var pseudo = document.getElementById("pseudo")
var email = document.getElementById("email")
var mdp = document.getElementById("mdp")
var vmdp = document.getElementById("vmdp")
var condition = document.getElementById("condition")

var ok = document.getElementById("Ok")
var pasok = document.getElementById("pasOk")
var paspseudo = document.getElementById("paspseudo")
var pasemail = document.getElementById("pasemail")
var pasmdp = document.getElementById("pasmdp")
var pasvmdp = document.getElementById("pasvmdp")
var pascondi = document.getElementById("pascondi")
let passCheck = new RegExp (
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
)

submit.addEventListener('click', function (event) {
    event.preventDefault();

    if (pseudo.value.length >= 6 && mdp.value.length >= 8 && vmdp.value === mdp.value && condition.checked === true && email.value != "") {
        ok.classList.add("active")
        pasok.classList.remove("active")
    }
    else {
        pasok.classList.add("active")
        ok.classList.remove("active")
    }

    if (pseudo.value.length < 6) {
        pseudo.classList.add("input-red")
        pseudo.classList.remove("input-green")
        paspseudo.classList.add("active")
    }
    else {

        pseudo.classList.add("input-green")
        pseudo.classList.remove("input-red")
        paspseudo.classList.remove("active")

    }
    if (mdp.value.length < 8 || passCheck.test(mdp.value) == false) {
        mdp.classList.add("input-red")
        mdp.classList.remove("input-green")
        pasmdp.classList.add("active")

    }
    else {

        mdp.classList.add("input-green")
        mdp.classList.remove("input-red")
        pasmdp.classList.remove("active")
    }

    if (vmdp.value === mdp.value) {
        vmdp.classList.remove("input-red")
        vmdp.classList.add("input-green")
        pasvmdp.classList.remove("active")
    }
    else {

        vmdp.classList.remove("input-green")
        vmdp.classList.add("input-red")
        pasvmdp.classList.add("active") 
    }

    if (email.value == "" ) {
        email.classList.remove("input-green")
        email.classList.add("input-red")
        pasemail.classList.add("active")
    }
    else {
        email.classList.remove("input-red")
        email.classList.add("input-green")
        pasemail.classList.remove("active")
    }
    if (condition.checked === true) {
        condition.classList.remove("input-red")
        condition.classList.add("input-green")
        pascondi.classList.remove("active")
        console.log("ok")
    }
    else {

        condition.classList.remove("input-green")
        condition.classList.add("input-red")
        pascondi.classList.add("active")
        console.log("pas ok")
    }



})

var dark = document.getElementById("dark")
var body = document.getElementById("body")
var header = document.getElementById("header")

dark.addEventListener('click', function () {
    body.classList.toggle("dark")
    header.classList.toggle("dark")
})