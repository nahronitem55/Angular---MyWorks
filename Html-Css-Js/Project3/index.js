    var users = [
    {nickname:"Blackops" , password:"16794"},
    {nickname:"Fahrenayt" , password:"98467"},
    {nickname:"Danke" , password:"65328"}
    ]
    
    var comments = [
    {nickname:"Blackops" , comment:"Really!"},
    {nickname:"Fahrenayt" , comment:"Backdoor open!"},
    {nickname:"Danke" , comment:"Debugging being the detective in crime movie where you are also the murderer"}
    ]
    
    var nickname = prompt("nickname?")
    var password = prompt("password?")
    
    function welcome(){
        if((nickname == users[0].nickname &&  password ==user[0].password)
        || (nickname == users[1].nickname &&  password ==user[1].password)) {
            console.log(comments)
            alert(comments)
        }
        else {
            console.log("Incorrect entr")
            alert("Incorrect entr")
        }
    }

    welcome(nickname,password)