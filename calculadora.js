function calculo() {
    var sal = document.getElementById("sal").value;
    var horas = document.getElementById("hor").value;
    var horex = document.getElementById("horex").value;
    var ind = document.getElementById("ind").value;
    var porc = ind/100;
    var result; 
    var cal;
    
    cal = (sal/horas) * horex;
    result = cal + (cal * porc);
    document.getElementById("result").innerHTML = result;
    document.getElementById("result").style.transform = "scale(1)";
    document.getElementById("limpar").style.transform = "scale(1)";
    document.getElementById("sal").value = "";
    document.getElementById("hor").value = "";
    document.getElementById("horex").value = "";
    document.getElementById("ind").value = "";
}

function limpar() {
    document.getElementById("limpar").style.transform = "scale(0)";
    document.getElementById("result").style.transform = "scale(0)";
    document.getElementById("peric").innerHTML = "";
    document.getElementById("insa").style.transform = "scale(0)";
    document.getElementById("result").innerHTML = "";
    document.getElementById("insa").innerHTML = "";
    document.getElementById("trans").innerHTML = "";
}
$(document).ready(function() {
    $("#switchlogo").click(function(){
        $(this).toggleClass("active");
        $("#switch").toggleClass("active");
        });
});

function periculosidade() {
    var sal = parseInt(document.getElementById("sal").value);
    var peric = sal * 0.3;
    var result = sal + peric;
    document.getElementById("result").style.transform = "scale(1)";
    document.getElementById("peric").style.transform = "scale(1)";
    document.getElementById("result").innerHTML = result;
    document.getElementById("peric").innerHTML = peric;
    document.getElementById("limpar").style.transform = "scale(1)";

    document.getElementById("sal").value = "";
}
$(document).ready(function() {
    $("#minimo").click(function(){
        $(this).toggleClass("active");
        if($(this).hasClass("active")) {
            $("#medio").prop("disabled",true);
            $("#maximo").prop("disabled",true);
        }
        else {
            $("#medio").prop("disabled",false);
            $("#maximo").prop("disabled",false);
        }
        });
    $("#medio").click(function(){
        $(this).toggleClass("active");
        if($(this).hasClass("active")) {
            $("#minimo").prop("disabled",true);
            $("#maximo").prop("disabled",true);
        }
        else {
            $("#minimo").prop("disabled",false);
            $("#maximo").prop("disabled",false);
        }
        }); 
    $("#maximo").click(function(){
        $(this).toggleClass("active");
        if($(this).hasClass("active")) {
            $("#medio").prop("disabled",true);
            $("#minimo").prop("disabled",true);
        }
        else {
            $("#medio").prop("disabled",false);
            $("#minimo").prop("disabled",false);
        }
        });
        $("#calculo").click(function(){
            if($("#minimo").hasClass("active")) {
                var sal = parseInt(document.getElementById("sal").value);
                var insa = sal * 0.1;
                var result = sal + insa;
                document.getElementById("sal").value = "";
                document.getElementById("result").style.transform = "scale(1)";
                document.getElementById("insa").style.transform = "scale(1)";
                document.getElementById("result").innerHTML = result;
                document.getElementById("insa").innerHTML = insa;
                document.getElementById("limpar").style.transform = "scale(1)";
            }
            if($("#medio").hasClass("active")) {
                var sal = parseInt(document.getElementById("sal").value);
                var insa = sal * 0.2;
                var result = sal + insa;
                document.getElementById("sal").value = "";
                document.getElementById("result").style.transform = "scale(1)";
                document.getElementById("insa").style.transform = "scale(1)";
                document.getElementById("result").innerHTML = result;
                document.getElementById("insa").innerHTML = insa;
                document.getElementById("limpar").style.transform = "scale(1)";
            }
            if($("#maximo").hasClass("active")) {
                var sal = parseInt(document.getElementById("sal").value);
                var insa = sal * 0.4;
                var result = sal + insa;
                document.getElementById("sal").value = "";
                document.getElementById("result").style.transform = "scale(1)";
                document.getElementById("insa").style.transform = "scale(1)";
                document.getElementById("result").innerHTML = result;
                document.getElementById("insa").innerHTML = insa;
                document.getElementById("limpar").style.transform = "scale(1)";
            }
        });
});
function transferencia() {
    var sal = parseInt(document.getElementById("sal").value);
    trans = sal * 0.25;
    result = trans + sal;
    document.getElementById("sal").value = "";
    document.getElementById("result").style.transform = "scale(1)";
    document.getElementById("trans").style.transform = "scale(1)";
    document.getElementById("result").innerHTML = result;
    document.getElementById("trans").innerHTML = trans;
    document.getElementById("limpar").style.transform = "scale(1)";
}