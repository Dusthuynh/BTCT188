// Nghia-search
window.onload = main;
function main(){
    var btnSearch = document.getElementsByClassName("fa-search")[0];
    var inputSearch = document.getElementById("input-search");
    inputSearch.addEventListener("keypress", function(e){
        if(e.keyCode === 13){
            e.preventDefault();
            btnSearch.click();
        }
    })
    btnSearch.onclick = submitSearch;
}

function submitSearch(){
    var inputSearch = document.getElementById("input-search");
    if(inputSearch.value.length > 0){
        document.getElementById("submitsearch").submit();
    }else alert("Hay nhap noi dung can tim!!!");
}