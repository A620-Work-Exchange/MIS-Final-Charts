$(document).keydown(function (event) {
    if (event.keyCode == 13) {
        login();
    }
});

$("#login").on('click', function () {
    login();
});


function login() {
    var user = $('#Username').val();
   // var password = $('#Password').val();
    console.log(user)
    if (user == "admin") {
        window.location.href = "admin.html"
    } else if (user == "whr") {
        window.location.href = "teacher.html"
    } else {
        window.location.href = "student.html"
    }
}