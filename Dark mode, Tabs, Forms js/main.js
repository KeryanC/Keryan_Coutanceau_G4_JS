var dark = document.getElementById("dark")
var body = document.getElementById("body")
var header = document.getElementById("header")

var carte1 = document.getElementById("Carte1")
var carte2 = document.getElementById("Carte2")
var carte3 = document.getElementById("Carte3")

var carte_1 = document.getElementById("carte_1")
var carte_2 = document.getElementById("carte_2")
var carte_3 = document.getElementById("carte_3")

var carte_1_2 = document.getElementById("carte_1_2")
var carte_2_2 = document.getElementById("carte_2_2")
var carte_3_2 = document.getElementById("carte_3_2")

dark.addEventListener('click', function () {
    body.classList.toggle("dark")
    header.classList.toggle("dark")
})

carte1.addEventListener('click', function () {
    carte_1.classList.add("active")
    carte_2.classList.remove("active")
    carte_3.classList.remove("active")

    carte_1.classList.add("space")
    carte_2.classList.remove("space")
    carte_3.classList.remove("space")

    carte_1_2.classList.add("space")
    carte_2_2.classList.remove("space")
    carte_3_2.classList.remove("space")

    carte_1_2.classList.add("active")
    carte_2_2.classList.remove("active")
    carte_3_2.classList.remove("active")

})

carte2.addEventListener('click', function () {
    carte_2.classList.add("active")
    carte_3.classList.remove("active")
    carte_1.classList.remove("active")

    carte_2.classList.add("space")
    carte_1.classList.remove("space")
    carte_3.classList.remove("space")

    carte_2_2.classList.add("space")
    carte_1_2.classList.remove("space")
    carte_3_2.classList.remove("space")

    carte_2_2.classList.add("active")
    carte_1_2.classList.remove("active")
    carte_3_2.classList.remove("active")
})

carte3.addEventListener('click', function () {
    carte_3.classList.add("active")
    carte_2.classList.remove("active")
    carte_1.classList.remove("active")

    carte_3.classList.add("space")
    carte_2.classList.remove("space")
    carte_1.classList.remove("space")

    carte_3_2.classList.add("space")
    carte_2_2.classList.remove("space")
    carte_1_2.classList.remove("space")

    carte_3_2.classList.add("active")
    carte_2_2.classList.remove("active")
    carte_1_2.classList.remove("active")


})


