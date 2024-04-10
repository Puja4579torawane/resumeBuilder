
let register = () => {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let emailRegex =/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/;
    if (!emailRegex.test(email.value)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Password should be at least 8 characters long
    if (password.value.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            let user = {
                username: username.value,
                email: email.value,
                password: password.value
            }

            firebase.database().ref(`firebase-harshad/${res.user.uid}`).set(user)
                .then(() => {
                    alert("new user is registered")
                    window.location = "login.html"
                })
        })
        .catch((err) => {
            console.log("err=>", err)
            alert("user already exists!!!");
        })
}


let login = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let emailRegex =/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/;
    if (!emailRegex.test(email.value)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Password should be at least 8 characters long
    if (password.value.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            firebase.database().ref(`firebase-harshad/${res.user.uid}`).once('value', (data) => {
                alert("successfully logged in")
                console.log(data.val())
                window.location = "index.html"
            })
        })
        .catch((err) => {
            console.log('err=>', err)
            alert("Login failed!!!!");
        })

}



// let abc = new Promise(() => {

// })


// abc
//     .then(() => {

//     })
//     .catch(() => {

//     })