function pro(){
    word=document.getElementById("input").value;
    var synth=window.speechSynthesis;
    speech="The pronunciation of the given word is- "
    utterThis=new SpeechSynthesisUtterance(speech+word);
    synth.speak(utterThis);
}

console.log("ml5 version-", ml5.version);