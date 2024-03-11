imprime = (msg) => console.log(msg);
fazerSorteio = () => {
    let num1 = document.getElementById("inicio").value;
    let num2 = document.getElementById("fim").value;
    let sorteio = math.random (inicio,fim+1);

    document.getElementById("resultado").innerHTML = sorteio;
                
}

function escolher_aba(bnt){
    for(let i = 1; i <= 4; i++){
        let id_btn = "btn"+1;
        let class_aba = "aba"+i;
        document.getElementById(id_btn).style.backgroundColor = "blue"
        document.getElementById(id_btn).disabled = false;
        document.getElementByid(id_btn).style.display = "none"
    }
    if(bnt == "1"){
        document.getElementById("btn1").style.backgroundColor = "red"
        document.getElementById("btn1").disabled = true;
        document.getElementByid("ab1").style.display = "block"
    }   
    if(bnt == "2"){
        document.getElementById("btn2").style.backgroundColor = "red"
        document.getElementById("btn2").disabled = true;
        document.getElementByid("ab2").style.display = "block"
    }
    if(bnt == "3"){
        document.getElementById("btn3").style.backgroundColor = "red"
        document.getElementById("btn3").disabled = true;
        document.getElementByid("ab3").style.display = "block"
    }
    if(bnt == "4"){
        document.getElementById("btn4").style.backgroundColor = "red"
        document.getElementById("btn4").disabled = true;
        document.getElementByid("ab4").style.display = "block"
    }
}