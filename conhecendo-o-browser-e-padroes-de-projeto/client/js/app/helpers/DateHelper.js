class DateHelper {

    dataParaTexto(data) {
        return data.data.getDate() 
            + '/' + (data.data.getMonth() + 1)
            + '/' + data.data.getFullYear();
    }

    textoParaData(texto) {
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
}