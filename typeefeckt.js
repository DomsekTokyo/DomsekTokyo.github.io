let text = document.querySelector(".typer")
let current = []
let i = 0
let j = 0
let isDeleting = false



const fraze = [
    "Jsem programátor.",
    "Dělám weby.",
    "Dělám aplikace.",
    "Dělám malé hry.",
    "Pracuji s excelem.",

]

function loop(){
    text.innerHTML = fraze[0]


    if(i < fraze.length){
        if(!isDeleting && j<= fraze[i].length){
            current.push(fraze[i][j])
            j++;
            text.innerHTML = current.join("")
        }
    }
    if(isDeleting && j <= fraze[i].length){
        current.pop()
        j--
        text.innerHTML = current.join("")
    }
    if(j==fraze[i].length){

       isDeleting = true
        setTimeout(loop, 1500);
        return;
    }

    if(isDeleting &&  j === 0 ){
        current = []
        isDeleting = false
        i++
        if(i === fraze.length){
            i = 0
        }
    }


    const time = 100
    setTimeout(loop, time)
}
loop()