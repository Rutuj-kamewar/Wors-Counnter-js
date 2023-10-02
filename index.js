let text = document.getElementById("message")
let word = document.getElementById("word")
let char = document.getElementById("char")

text.addEventListener("input" , function(){
    let t = (this.value)
    let c = (this.value).length;
    console.log(c)
    char.innerHTML = c
    t = t.trim()
    t = t.split(" ")
    t = t.filter(function(e){
        return e != "";
    })
    let w = t.length
    word.innerHTML = w
})