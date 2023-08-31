window.addEventlistener("load", () =>{
const progress = document.getElementById("progress");
})

function update(){
progress.style.width = ´${((window.scrollY) / (document.body.scrollHeight - window.innerHeigth) *)}
}