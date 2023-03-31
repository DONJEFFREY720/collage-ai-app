var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition()

function start() {
     document.getElementById("textbox").innerHTML=""
     recognition.start()
}

recognition.onresult = function(event){
    console.log(event)
    var content = event.results[0][0].transcript
     console.log(content)
     document.getElementById("textbox").innerHTML=content

     if(content=="take my selfie" || "make a collage"){
          speak();
     }
     
}

function speak() {
     var Synth = window.speechSynthesis;
     speak_data = "Taking Photos for Collage in 5 , 10 and 15 seconds"
     utterThis = new SpeechSynthesisUtterance(speak_data);
     Synth.speak(utterThis);
     Webcam.attach(camera)
}

Webcam.set({
     width:500,
     height:400,
     image_format : 'png',
     png_quality : 90,
});

camera = document.getElementById("camera")