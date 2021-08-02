const geraTabela = () => {
    const tela = document.getElementsByClassName('screen')[0];
    for (let linha = 0; linha < 11; linha++) {
        let lin = document.createElement('tr')
        for(let coluna = 0; coluna < 28; coluna++) {
            let celula = document.createElement('td');
            let valor = document.createTextNode('T');
            celula.appendChild(valor)
            lin.appendChild(celula)
        }
        tela.appendChild(lin)
    }
}

geraTabela();