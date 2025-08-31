let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")


function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning sir")
    }
    else if(hours>=12 && hours<=16){
        speak("Good afternoon Sir")
    }
    else{
        speak("Good Evening sir")
    }
}
/*window.addEventListener('load',()=>{
    wishMe()
})*/
let speechRecognition= window.speechRecognition  || window.webkitSpeechRecognition
let recognition = new  speechRecognition()
recognition.onresult=((event)=>{
    let currentIndex= event.resultIndex
    let transcript =event.results[currentIndex][0].transcript
    content.innerText=transcript 
    takeCommand(transcript.toLowerCase())
})
btn.addEventListener('click',()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello") || message.includes("hey")){
        speak("Hello sir, how can I help you?")
    }
    else if(message.includes("who are you") || message.includes("who created you")){
        speak("I am virtual assistant, Created by Dipankar ")
    }
    else if(message.includes("tell me about yourself")){
        speak("I am virtual assistant, Created by Dipankar ")
    }
    else if(message.includes("kya aap mere sath hindi mein baat kar sakte ho")){
        speak("Nahin main English samajhta hun aur jawab ki taur per main Hindi bolata hun")
    }
    else if(message.includes("open chatgpt")){
        speak("Opening chatGPT...")
        window.open("https://chatgpt.com/","_blank")
    }
    else if(message.includes("open youtube")){
        speak("Opening YouTube...")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("Opening Facebook...")
        window.open("https://www.facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("Opening Instragram...")
        window.open("https://www.instagram.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("Opening Google...")
        window.open("https://www.google.co.in/","_blank")
    }
    else if(message.includes("open whatsapp")){
        speak("Opening Whatsapp...")
        window.open("whatsapp://")
    }
    else if(message.includes("open whatsapp")){
        speak("Opening WhatsApp...")
        window.open("https://web.whatsapp.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("Opening Calculator...")
        window.open("calculator://")
    }
    else if(message.includes("time")){
       let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
       speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
     }
    else{
        speak(`That i found in internet regarding ${message.replace("master","")}`)
        window.open(`https://www.google.co.in/search?q=${message.replace("master","")}`)
    }


}

