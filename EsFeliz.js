function EsFeliz(numero){
    let suma = 0;
    let digitos = numero.toString().split('');
    let v = false
    while(suma !== 1){
        suma = 0;
        for(let i = 0; i < digitos.length;i++){
            suma += Math.pow(parseInt(digitos[i]), 2);
        }
        if(suma === 4){
            return false;
        }
        if(suma == 1){
            v = true;
        }
        digitos = suma.toString().split('');
    }
    return v;
}