const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
const resultadoAmostrar = document.getElementById("resultado")

const texto = document.createElement("p")
texto.innerText = "Resultado:"
resultadoAmostrar.appendChild(texto)
const result = document.createElement("p")

function kata1() {
    let array = []
    for (let index = 1; index <= 25; index++) array.push(index)
    return array
}

function kata2() {
    return kata1().reverse()
}

function kata3() {
    let array = []
    for (let index = -1; index >= -25; index--) array.push(index)
    return array
}

function kata4() {
    return kata3().reverse()
}

function kata5() {
    let array = []
    for (let index = 25; index >= -25; index--) if(index % 2 != 0) array.push(index)
    return array    
}

function kata6() {
    let array = []
    for (let index = 3; index <= 100; index+=3) array.push(index)
    return array
}

function kata7() {
    let array = []
    for (let index = 7; index <= 100; index+=7) array.push(index)
    return array
}

function kata8() {
    let array = []
    for (let index = 1; index <= 100; index++){
        if(index % 3 == 0 || index % 7 == 0){
            array.push(index)
        }
    }
    return array.reverse()
}

function kata9() {
    let array = []
    for (let index = 5; index <= 100; index+=10) array.push(index)
    return array
}

function kata10() {
    return sampleArray
}

function kata11() {
    let array = []
    for(let index = 0; index < sampleArray.length; index++) if(sampleArray[index] % 2 == 0) array.push(sampleArray[index])
    return array
}

function kata12() {
    let array = []
    for(let index = 0; index < sampleArray.length; index++) if(sampleArray[index] % 2 != 0) array.push(sampleArray[index])
    return array
}

function kata13() {
    let array = []
    for(let index = 0; index < sampleArray.length; index++) if(sampleArray[index] % 8 == 0) array.push(sampleArray[index])
    return array
}

function kata14() {
    let array = []
    for(let index = 0; index < sampleArray.length; index++) array.push(sampleArray[index]**2)
    return array
}

function kata15() {
    let num = 0
    for(let cont = 1; cont <= 20; cont++) num+=cont
    return num
}

function kata16() {
    let num = 0
    for(let index = 0; index < sampleArray.length; index++) num+=sampleArray[index]
    return num
}

function kata17() {
    let num = sampleArray[0]
    for(let index = 0; index < sampleArray.length; index++) if(num > sampleArray[index]) num = sampleArray[index]
    return num
}

function kata18() {
    let num = sampleArray[0]
    for(let index = 0; index < sampleArray.length; index++) if(num < sampleArray[index]) num = sampleArray[index]
    return num
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

const resultadoAmostrarBonus = document.getElementById("resultadoBonus")
const texto2 = document.createElement("p")
texto2.innerText = "Resultado Bonus:"
resultadoAmostrarBonus.appendChild(texto2)
const div = document.createElement("div")
resultadoAmostrarBonus.appendChild(div)

const botaokatabonus1 = document.getElementById("katab1")
botaokatabonus1.addEventListener("click", function() {
    div.innerText = ""
    for(let cont=1; cont<=20; cont++){
        const blocks = document.createElement("div")
        blocks.style.backgroundColor = "gray"
        blocks.style.height = "20px"
        blocks.style.width = "100px"
        blocks.style.marginBottom = "5px"
        div.appendChild(blocks)
    }
})

const botaokatabonus2 = document.getElementById("katab2")
botaokatabonus2.addEventListener("click", function() {
    div.innerText = ""
    let num = 105
    for(let cont=1; cont<=20; cont++){
        const blocks = document.createElement("div")
        blocks.style.backgroundColor = "gray"
        blocks.style.height = "20px"
        blocks.style.width = `${num}px`
        num+=5
        blocks.style.marginBottom = "5px"
        div.appendChild(blocks)
    }
})

const botaokatabonus3 = document.getElementById("katab3")
botaokatabonus3.addEventListener("click", function() {
    div.innerText = ""
    for(let cont=1; cont<=20; cont++){
        const blocks = document.createElement("div")
        blocks.style.backgroundColor = "gray"
        blocks.style.height = "20px"
        blocks.style.width = `${sampleArray[cont-1]}px`
        blocks.style.marginBottom = "5px"
        div.appendChild(blocks)
    }
})

const botaokatabonus4 = document.getElementById("katab4")
botaokatabonus4.addEventListener("click", function() {
    div.innerText = ""
    for(let cont=1; cont<=20; cont++){
        const blocks = document.createElement("div")
        if(cont % 2 == 0){
            blocks.style.backgroundColor = "gray"
        }else{
            blocks.style.backgroundColor = "red"
        }        
        blocks.style.height = "20px"
        blocks.style.width = `${sampleArray[cont-1]}px`
        blocks.style.marginBottom = "5px"
        div.appendChild(blocks)
    }
})
const botaokatabonus5 = document.getElementById("katab5")
botaokatabonus5.addEventListener("click", function() {
    div.innerText = ""
    for(let cont=1; cont<=20; cont++){
        const blocks = document.createElement("div")
        if(sampleArray[cont-1] % 2 == 0){
            blocks.style.backgroundColor = "red"
        }else{
            blocks.style.backgroundColor = "gray"
        }        
        blocks.style.height = "20px"
        blocks.style.width = `${sampleArray[cont-1]}px`
        blocks.style.marginBottom = "5px"
        div.appendChild(blocks)
    }
})
/* Aqui vai as funções dos botões*/

const katas1 = document.getElementById("kata1")
katas1.addEventListener("click", function() {
    result.innerText = `Kata1 = ${kata1()}`
    result.style.color= "rgb(0, 209, 209)"
    resultadoAmostrar.appendChild(result)
})
const katas2 = document.getElementById("kata2")
katas2.addEventListener("click", function() {
    result.innerText = `Kata2 = ${kata2()}`
    result.style.color= "rgb(204, 88, 88)"
    resultadoAmostrar.appendChild(result)
})
const katas3 = document.getElementById("kata3")
katas3.addEventListener("click", function() {
    result.innerText = `Kata3 = ${kata3()}`
    result.style.color= "rgb(255, 255, 101)"
    resultadoAmostrar.appendChild(result)
})
const katas4 = document.getElementById("kata4")
katas4.addEventListener("click", function() {
    result.innerText = `Kata4 = ${kata4()}`
    result.style.color= "greenyellow"
    resultadoAmostrar.appendChild(result)
})
const katas5 = document.getElementById("kata5")
katas5.addEventListener("click", function() {
    result.innerText = `Kata5 = ${kata5()}`
    result.style.color= "pink"
    resultadoAmostrar.appendChild(result)
})
const katas6 = document.getElementById("kata6")
katas6.addEventListener("click", function() {
    result.innerText = `Kata6 = ${kata6()}`
    result.style.color= "rgb(161, 61, 161)"
    resultadoAmostrar.appendChild(result)
})
const katas7 = document.getElementById("kata7")
katas7.addEventListener("click", function() {
    result.innerText = `Kata7 = ${kata7()}`
    result.style.color= "rgb(155, 55, 55)"
    resultadoAmostrar.appendChild(result)
})
const katas8 = document.getElementById("kata8")
katas8.addEventListener("click", function() {
    result.innerText = `Kata8 = ${kata8()}`
    result.style.color= "rgb(255, 188, 64)"
    resultadoAmostrar.appendChild(result)
})
const katas9 = document.getElementById("kata9")
katas9.addEventListener("click", function() {
    result.innerText = `Kata9 = ${kata9()}`
    result.style.color= "burlywood"
    resultadoAmostrar.appendChild(result)
})
const katas10 = document.getElementById("kata10")
katas10.addEventListener("click", function() {
    result.innerText = `Kata10 = ${kata10()}`
    result.style.color= "cornflowerblue"
    resultadoAmostrar.appendChild(result)
})
const katas11 = document.getElementById("kata11")
katas11.addEventListener("click", function() {
    result.innerText = `Kata11 = ${kata11()}`
    result.style.color= "#9bb862"
    resultadoAmostrar.appendChild(result)
})
const katas12 = document.getElementById("kata12")
katas12.addEventListener("click", function() {
    result.innerText = `Kata12 = ${kata12()}`
    result.style.color= "lightseagreen"
    resultadoAmostrar.appendChild(result)
})
const katas13 = document.getElementById("kata13")
katas13.addEventListener("click", function() {
    result.innerText = `Kata13 = ${kata13()}`
    result.style.color= "linen"
    resultadoAmostrar.appendChild(result)
})
const katas14 = document.getElementById("kata14")
katas14.addEventListener("click", function() {
    result.innerText = `Kata14 = ${kata14()}`
    result.style.color= "lightgreen"
    resultadoAmostrar.appendChild(result)
})
const katas15 = document.getElementById("kata15")
katas15.addEventListener("click", function() {
    result.innerText = `Kata15 = ${kata15()}`
    result.style.color= "rgb(181, 161, 115)"
    resultadoAmostrar.appendChild(result)
})
const katas16 = document.getElementById("kata16")
katas16.addEventListener("click", function() {
    result.innerText = `Kata16 = ${kata16()}`
    result.style.color= "rgb(204, 52, 82)"
    resultadoAmostrar.appendChild(result)
})
const katas17 = document.getElementById("kata17")
katas17.addEventListener("click", function() {
    result.innerText = `Kata17 = ${kata17()}`
    result.style.color= "cadetblue"
    resultadoAmostrar.appendChild(result)
})
const katas18 = document.getElementById("kata18")
katas18.addEventListener("click", function() {
    result.innerText = `Kata18 = ${kata18()}`
    result.style.color= "blanchedalmond"
    resultadoAmostrar.appendChild(result)
})