Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camara = document.getElementById("camera");
Webcam.attach('#camara');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
    });
}

<script>src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"</script> 

console.log('ml5 version:', ml5.version);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3uf8oGLT7/',modelLoaded)

function modelLoaded(){
    console.log('Model Loaded!');
}