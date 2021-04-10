function validate() {

    const V1 = parseInt(document.getElementById("V1").value);
    var V2 = parseInt(document.getElementById("V2").value);
    var v3 = V1 + V2;

    document.getElementById("cal").value = v3;
}