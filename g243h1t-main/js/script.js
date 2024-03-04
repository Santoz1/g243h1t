imprime = (msg) => console.log(msg);
fazerSorteio = () => {
    let num1 = document.getElementById("inicio").value;
    let num2 = document.getElementById("fim").value;
    let sorteio = math.random (inicio,fim+1);

    document.getElementById("resultado").innerHTML = sorteio;
                
}