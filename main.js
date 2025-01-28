// function myFunction() {
//     const userName = prompt("Ism kiriting");
//     const newTag = document.createElement("h1");
//     newTag.textContent = userName;
//     document.body.appendChild(newTag);
// }
// myFunction()



// const experession = function(){
//     console.log("aaaaaa");
// }
// experession()

function dark() {
    document.documentElement.style.setProperty('--bg-color', '#000000');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
    document.documentElement.style.setProperty('--button-bg-color', '#ffffff');
    document.documentElement.style.setProperty('--button-text-color', '#000000');

}

function light() {
    document.documentElement.style.setProperty('--bg-color', '#e5e5e5');
    document.documentElement.style.setProperty('--text-color', '#000000');
    document.documentElement.style.setProperty('--button-bg-color', '#FB982F');
    document.documentElement.style.setProperty('--button-text-color', '#000000');

}