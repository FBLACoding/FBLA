var objTeachers = [
    {
      username: "k6289715",
      password: "Ktjd1543 "
    
    },
    
    {
      username: "k3198567",
      password: "Ktjd6724"
    }
    
    
  ]

  function getAdminInfo() {
    
    for(i = 0; i < objTeachers.length; i ++) {

    if (username == objTeachers[i].username && password == objTeachers[i].password ) {
        console.log("correct");
        window.location.assign("https://sentry.io/answers/redirect-to-another-page-using-javascript/");
    }else {
        console.log("incorrect");
        document.getElementById("output").innerHTML = "wrong";
      }
}

}