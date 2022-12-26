function voice() {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
      var recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.lang = 'en-US';
      recognition.start();

      recognition.onresult = function (e) {
        document.getElementById('userBox').value = e.results[0][0].transcript;
        recognition.stop();
      };

      recognition.onerror = function (e) {
        recognition.stop();
      };
    }
  }
function talk(){
                var know ={
                    "hi":"Hello",
                    "Hi":"Hello",
                    "How are you?":"Great !",
                    "how are you?":"Great !",
                    "Bye":"Have A Nice Day !",
                    "bye":"Have A Nice Day !",
                    "Hello":"Hi , Whats Up",
                    "hello":"Hi , Whats Up",
                    "letme login":"Yes , Enter the password",
                    "let me login":"Yes , Enter the password",
                    "Let me login":"Yes , Enter the password",
                    "PROFESSOR7":"Hey, 'SALAH' a Warm welcome to You , Access Granted!",
                    "whats new today?":"buckle up sit tight, i m gonna teach u some Precise Tips for Typing Speed Today!",
                    "Whats new today?":"buckle up sit tight, i m gonna teach u some Precise Tips for Typing Speed Today!",
                    "like on what topic?":"On consistancy Routine and Touch Typing... ",
                    "Like on what topic?":"On consistancy Routine and Touch Typing... ",
                    "ok so whats tip1?":"Focus on accuracy over speed!",
                    "Ok so whats tip1?":"Focus on accuracy over speed!",
                    "and tip2":"Set specific goals!,Stop with the hunt and peck",
                    "And tip2":"Set specific goals!,Stop with the hunt and peck",
                    "tip3":"Go slow and be deliberate See how many words you can type in a row without looking at your hands",
                    "Tip3":"Go slow and be deliberate See how many words you can type in a row without looking at your hands",
                    "thanks it helped me a lot!":"Its always pleasure helping u,Have A Nice Day !",
                    "Thanks it helped me a lot!":"Its always pleasure helping u,Have A Nice Day !",
                    "logout":"SALAH ALKASERI logged out Successfully!",
                    "Logout":"SALAH ALKASERI logged out Successfully!",
                };
                var user = document.getElementById('userBox').value;
                document.getElementById('chatLog').innerHTML = user + "<br>";
                if(user in know){
                    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
                }else{
                    document.getElementById('chatLog').innerHTML = "I do not understand .";
                }
            }