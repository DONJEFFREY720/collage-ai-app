var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();
var img_id =""

function start()
{
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

function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your Selfie to make Collage in 5 10 and 15 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    Webcam.attach(camera)

    setTimeout(function(){  
         img_id = "selfie1"
          take_snapshot();

            speak_data = "Taking your next Selfie at 10 seconds";
            var utterThis = new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);

    },5000)

    setTimeout(function(){
         img_id = "selfie2"
          take_snapshot();
      
        speak_data = "Taking your next Selfie at 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

   },10000)

   setTimeout(function(){
    img_id = "selfie3"
    take_snapshot();
    
    speak_data = "Taking Last photo";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

},15000)
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});






function take_snapshot()
{
console.log(img_id);
Webcam.snap (function(data_uri) {

if(img_id=="selfie1"){
    console.log(img_id)
document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'">';
}

if(img_id=="selfie2"){
    console.log(img_id)
document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'">';
}

if(img_id=="selfie3"){
    console.log(img_id)
document.getElementById("rslt3").innerHTML = '<img id="selfie3" src="'+data_uri+'">';
}

});}