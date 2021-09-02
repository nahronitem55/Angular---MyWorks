var users = [
  { nickname: "Blackops", password: "16794" },
  { nickname: "Fahrenayt", password: "98467" },
  { nickname: "Danke", password: "65328" },
];

var comments = [
  { nickname: "Blackops", comment: "Really!" },
  { nickname: "Fahrenayt", comment: "Backdoor open!" },
  {
    nickname: "Danke",
    comment:
      "Debugging being the detective in crime movie where you are also the murderer",
  },
];

var nickname = prompt("nickname?");
var password = prompt("password?");

function usersControl(nickname, password) {
  console.log(nickname);
  console.log(password);
  for (i = 0; i < users.length; i++) {
    if (users[i].nickname == nickname && users[i].password == password) {
      return true;
    }
  }
  return false;
}

function welcome() {
  if (usersControl(nickname, password)) {
    console.log(comments);
    alert(comments);
  } else {
    console.log("Incorrect entr");
    alert("Incorrect entr");
  }
}

welcome(nickname, password);
const api="https://www.google.com" //constant variable