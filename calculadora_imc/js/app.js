const criaCalculadora = (t,m, a, bt,r) => {
            
    // Elementos no DOM:
    const display = document.getElementById(t)
    const massa = document.getElementById(m)
    const altura = document.getElementById(a)
    const btCalcular = document.getElementById(bt)
    const retorno = document.getElementById(r)

    // Inicialização do sistema.
    display.innerHTML = "---"
    btCalcular.addEventListener('click',function(){
        calcularIMC()
    })

    // Método principal.
    const calcularIMC = () => {
        if(verificaCampos()){
            let num = editaString(altura.value)
            let imc = parseInt(massa.value) / (num * num)
            imc = imc.toFixed(1)
            printaNaTela(imc)                    
        }
    }

    // Métodos auxiliares.
    const printaNaTela = (imc) => {
        display.innerHTML = imc
        retorno.innerHTML = avaliaImc(imc)
        limpaCampos()
    }

    const limpaCampos = () => {
        massa.value = ''
        altura.value = ''
    }

    const verificaCampos = () => {
        if(massa.value == "" || altura.value == ""){
            retorno.innerHTML = "Digite altura e/ou massa válidas!"
            display.innerHTML = "---"
            return false
        }else{
            return true
        }
    }

    const avaliaImc = (imc) => {
        if(imc < 18.5){
            return 'Abaixo do Peso'
        }else if(imc >= 18.5 && imc < 25){
            return 'Peso Normal'
        }else if(imc >= 25 && imc < 30){
            return 'Sobrepeso'
        }else if(imc >= 30 && imc < 35){
            return 'Obesidade Grau I'
        }else if(imc >= 35 && imc < 40){
            return 'Obesidade Grau II'
        }else if(imc >= 40){
            return 'Obesidade Mórbida'
        }
    }

    const editaString = (s) => {

        // Métodos internos.
        const seTemVirgula = (s) => {
            return s.includes(',')
        }

        const seTemPonto = (s) => {
            return s.includes('.')
        }

        const trocaVirgula = (s) => {
            let numComPonto = s.replace(',','.')
            return numComPonto
        }

        // Controle dos valores de retorno.
        if(seTemVirgula(s)){
            return parseFloat(trocaVirgula(s))
        }

        if(seTemPonto(s)){
            return parseFloat(s)
        }

    }       

    return{
        calcularIMC
    }

}

const calculadora = criaCalculadora('tela','massa','altura','calcular','retorno')