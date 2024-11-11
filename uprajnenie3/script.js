function showMessageExternal() {
    alert("Съобщението е показано от външен JavaScript!");
}
document.getElementById("externalButton").addEventListener("click", showMessageExternal);
