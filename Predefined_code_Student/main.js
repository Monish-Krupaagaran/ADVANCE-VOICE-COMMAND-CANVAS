x = 0
y = 0

draw_circle = ""
draw_rectangle = ""

var speech_recognition = window.webkitSpeechRecognition
var recognition = new speech_recognition()

function start() {

    document.getElementById("status").innerHTML = "Pls speak"
    recognition.start()
}

recognition.onresult = function(event) {

    console.log(event)
    var content = event.results[0][0].transcript
    document.getElementById("status").innerHTML = " You spoke : " + content
    
    if(content == "circle") {

        x = Math.floor(Math.random()*800)
        y = Math.floor(Math.random()*500)
        document.getElementById("status").innerHTML = " Drawing a circle " 
        draw_circle = "set"
    }

    if(content == "rectangle") {

        x = Math.floor(Math.random()*800)
        y = Math.floor(Math.random()*500)
        document.getElementById("status").innerHTML = " Drawing a rectangle " 
        draw_rectangle = "set"
    }

}

function setup() {

    canvas = createCanvas(900,600)
}

function draw() {

    if(draw_circle == "set") {

        circle(x,y,100)
        document.getElementById("status").innerHTML = " Circle is drawn"
        draw_circle = ""
     }

     if(draw_rectangle == "set") {

        rect(x,y,100,50)
        document.getElementById("status").innerHTML = " Rectange is drawn"
        draw_rectangle = ""
     }
}