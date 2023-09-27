function hideLoading() {
    const loadingDiv = document.getElementById("loading");
    const mainContentDiv = document.getElementById("main-content");

    loadingDiv.style.display = "none";
    mainContentDiv.style.display = "block";
}

setTimeout(hideLoading, 5000); 

// var loading=document.getElementById("loading");
// window.addEventListener("load", function(){
//     loading.style.display = "none"
// })
// setTimeout(hideLoading, 5000); 