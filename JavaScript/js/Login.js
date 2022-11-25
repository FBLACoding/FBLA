

var objStudents = [
    {
      username: "k1219852",
      password: "Ktlg8394",
      points: 0
    },
    
    {
      username: "k1234567",
      password: "Ktjd1234",
      points:0
    }
    
    
  ]
 
  
  
  
  function dataTypesPrint() {
    for(let i = 0; i < a.length; i++) {
   document.getElementById("ya").innerHTML = a[i];
  }
    
  }
  
  function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("The user name is " + username + " The password is " + password);
    
    for (i = 0; i < objStudents.length; i++) {
      if(username == objStudents[i].username && password == objStudents[i].password ) {
        console.log("correct");
        window.location.assign("https://sentry.io/answers/redirect-to-another-page-using-javascript/");
      }
    }

    
    
  }
  