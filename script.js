let searchBox = document.getElementById("search")
searchBox.onfocus = function () {
    searchBox.style.backgroundColor = "white"
    document.getElementById("search-d").style.backgroundColor = "white";
}
searchBox.onblur = function () {
    searchBox.style.backgroundColor = "#f5f5f6";
    document.getElementById("search-d").style.backgroundColor = "#f5f5f6";
}