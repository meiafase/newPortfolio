let html = document.getElementById("htmlDiv");
let css = document.getElementById("cssDiv");
let js = document.getElementById("jsDiv");
let php = document.getElementById("phpDiv");
let c = document.getElementById("cDiv");
let mysql = document.getElementById("mysqlDiv");

function menuDropDown() {
    var x = document.getElementById("menuId");
    if (x.className === "") {
      x.className += "responsive";
    } else {
      x.className = "item-menu";
    }
  }

html.addEventListener("mouseover", function( event ) {
    var div = document.getElementById("divResultado");
    
    div.innerHTML = "<p>HTML é o bloco de construção " + 
                    "mais básico da Web. Ele define o " + 
                    "significado e a estrutura do conteúdo da web.</p>";
});
html.addEventListener("mouseout", function( event ) {
    var div = document.getElementById("divResultado");
    
    div.innerHTML = "<p>°passe o mouse para ver a descrição°</p>";
});

css.addEventListener("mouseover", function( event ) {
    var div = document.getElementById("divResultado");
    
    div.innerHTML = "<p>CSS é uma linguagem de folha de estilo " +
                    "usada para descrever a apresentação " +
                    "de um documento escrito em uma linguagem "+ 
                    "de marcação como HTML.</p>";
});
css.addEventListener("mouseout", function( event ) {
    var div = document.getElementById("divResultado");
    
    div.innerHTML = "<p>°passe o mouse para ver a descrição°</p>";
});

js.addEventListener("mouseover", function( event ) {
    var div = document.getElementById("divResultado");
    
    div.innerHTML = "<p>JavaScript é uma linguagem de programação que " +
                    "é uma das principais tecnologias da " +
                    "World Wide Web, juntamente com HTML e CSS.</p>";
});
js.addEventListener("mouseout", function( event ) {
    var div = document.getElementById("divResultado");
    
    div.innerHTML = "<p>°passe o mouse para ver a descrição°</p>";
});

php.addEventListener("mouseover", function( event ) {
    var div = document.getElementById("divResultado");
    
    div.innerHTML = "<p>PHP é uma linguagem de script " +
                    "de propósito geral voltada para o desenvolvimento web.</p>";
});
php.addEventListener("mouseout", function( event ) {
    var div = document.getElementById("divResultado");
    
    div.innerHTML = "<p>°passe o mouse para ver a descrição°</p>";
});

c.addEventListener("mouseover", function( event ) {
    var div = document.getElementById("divResultado");
    
    div.innerHTML = "<p>C é uma linguagem de programação de computador, " +
                    "os recursos do C refletem claramente os recursos das CPUs de destino</p>";
});
c.addEventListener("mouseout", function( event ) {
    var div = document.getElementById("divResultado");
    
    div.innerHTML = "<p>°passe o mouse para ver a descrição°</p>";
});

mysql.addEventListener("mouseover", function( event ) {
    var div = document.getElementById("divResultado");
    
    div.innerHTML = "<p>MySQL é um sistema de gerenciamento " +
                    "de banco de dados relacional de código aberto.</p>";
});
mysql.addEventListener("mouseout", function( event ) {
    var div = document.getElementById("divResultado");
    
    div.innerHTML = "<p>°passe o mouse para ver a descrição°</p>";
});



