let height = prompt("Укажите свой рост: ")
let sex = prompt("Укажите свой пол ( Мужчина, Женщина): ")

let weightM = height - 110
let weightF = height - 100

let resultM = toString(weightM)
let resultF = toString(weightF)

if (sex = "Мужчина")
    alert ("Вес подходящий по вашему росту: " + weightM + " кг")
else if (sex = "Женщина")
    alert ("Вес подходящий по вашему росту: " + weightF + " кг")