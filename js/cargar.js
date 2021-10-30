function cargar(){
    var frame = $('#frame');
    var fond= document.getElementById('fondo');
    var titul= document.getElementById('titulo');
    var ti2= document.getElementById('titulo2');
    var pa= document.getElementById('pa');
    var eco= document.getElementById('eco');
    var eco2= document.getElementById('eco2');
    var eco3= document.getElementById('eco3');
    var eco4= document.getElementById('eco4');
    var bha= document.getElementById('bha');
    var clo= document.getElementById('clo');
    var url = "conci.html";
    fond.style.display = 'none';
    titul.style.display = 'none';
    ti2.style.display = 'none';
    pa.style.display = 'none';
    eco.style.display= 'inline';
    eco2.style.display= 'inline';
    bha.style.display= 'none';
    clo.style.display= 'none';
    eco3.style.display= 'none';
    eco4.style.display= 'none';
    frame.attr('src',url).show();
}

function cargar2(){
    var frame = $('#frame');
    var im= document.getElementById('img1');
    var im2= document.getElementById('img2');
    var fondo= document.getElementById('fondo');
    var titulo= document.getElementById('titulo');
    var ti2= document.getElementById('titulo2');
    var pa= document.getElementById('pa');
    var eco= document.getElementById('eco');
    var bha= document.getElementById('bha');
    var eco2= document.getElementById('eco2');
    var eco3= document.getElementById('eco3');
    var eco4= document.getElementById('eco4');
    var clo= document.getElementById('clo');
    var url = "actual.html";
    fondo.style.display= 'none';
    titulo.style.display= 'none';
    ti2.style.display = 'none';
    pa.style.display = 'none';
    eco.style.display= 'none';
    bha.style.display= 'none';
    clo.style.display= 'none';
    eco2.style.display= 'none';
    eco3.style.display= 'inline';
    eco4.style.display= 'inline';
    frame.attr('src',url).show();
}

function cargar3(){
    var frame = $('#frame');
    var im= document.getElementById('img1');
    var im2= document.getElementById('img2');
    var fondo= document.getElementById('fondo');
    var titulo= document.getElementById('titulo');
    var ti2= document.getElementById('titulo2');
    var pa= document.getElementById('pa');
    var eco= document.getElementById('eco');
    var bha= document.getElementById('bha');
    var clo= document.getElementById('clo');
    var eco2= document.getElementById('eco2');
    var eco3= document.getElementById('eco3');
    var eco4= document.getElementById('eco4');
    var url = "startup.html";
    fondo.style.display= 'none';
    titulo.style.display= 'none';
    ti2.style.display = 'none';
    pa.style.display = 'none';
    eco.style.display= 'none';
    bha.style.display= 'inline';
    clo.style.display= 'inline';
    eco2.style.display= 'none';
    eco3.style.display= 'none';
    eco4.style.display= 'none';
    frame.attr('src',url).show();
}