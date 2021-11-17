
let btn = document.getElementById('calcular');
btn.addEventListener('click',()=>{
    let regex = '/^[0-9]+$/ ';
    if (regex.match(n1) && regex.match(n2) && regex.match(n3)){
        let n1 = document.getElementById('n1').value;
        let n2 = document.getElementById('n2').value;
        let n3 = document.getElementById('n3').value;
        
        console.log(n1, n2, n3);
        alert(`El mayor es: ${Math.max(n1,n2,n3)}`);
     } else {
       alert ("Todos los valores deben ser numéricos");
    }
    
})





if(Number.isInteger(n1)){
    document.getElementById('n1Entero').value = "Es entero";
    alert(`n1 es entero`)
}
if(Number.isInteger(n2)){
    document.getElementById('n2Entero').value = "Es entero";
    alert(`n2 es entero`)
}
if(Number.isInteger(n3)){
    document.getElementById('n3Entero').value = "Es entero";
    alert(`n3 es entero`)
}