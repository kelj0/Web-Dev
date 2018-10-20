function clean() {
    document.form.textfield.value="";
}

function insert(n){
    var v = document.form.textfield.value;
    document.form.textfield.value=v+n;
}

function calc(){
    document.form.textfield.value=eval(document.form.textfield.value);
}

function delChar(){
    var v = document.form.textfield.value;
    document.form.textfield.value=v.slice(0,-1);
}