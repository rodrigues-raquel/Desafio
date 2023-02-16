const adicionar = () => {
    let fruta = document.getElementById('fruta').value;

    if(fruta == ""){
        alert("Informe uma fruta para adicionar")
    }
    else{
        let lista = document.getElementById('list')       
        lista.innerHTML += `<li>${fruta}<input type="submit" value="X" onclick="deletar(this)"/></li>`
    }
    document.getElementById('fruta').value = "";
}

const deletar = (v1) =>{
    let teste = document.getElementById("list");
    teste.removeChild(v1.parentElement);
}