class Produto{

    constructor(){
        this.carrinho = [];
    }

    lerDados(){
        let produto = {}
        produto.nome = document.getElementById("nomeus").innerHTML;
        return produto;
    }
    salvar(){
        let produto = this.lerDados();
        this.adicionar(produto);
        console.log(produto);
        alert("Produto adicionado ao carrinho");
    }
    
    adicionar(produto){
        this.carrinho.push(produto);
    }
}
var produto = new Produto();
