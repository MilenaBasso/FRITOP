function procurar() {
var id = document.getElementById('id');
    var produtos = [
    {"id1": "12345678"},
    {"id2": "23456789"},
    {"id3": "34567890"}
]

if (produtos) {
    var encontre = id.find(produtos);
    window.alert("OI VAQUITAAAAAAAAAAAA")
} else {
window.alert("ID incorreto. Produto não encontrado.");
}
}