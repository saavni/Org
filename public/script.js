var logSign = document.querySelector('#logSign');
var regScreen = document.querySelector('.regScreen');
var logScreen = document.querySelector('.logScreen');


var main = document.querySelector('#main');
logSign.addEventListener('click', function () {
    logScreen.style.display = 'flex';
    main.style.overflowY = 'hidden';
})

var logclose = document.querySelector('.close #loginclose');
var regclose = document.querySelector('.close #regclose');

logclose.addEventListener('click', function () {
    logScreen.style.display = 'none';
    main.style.overflowY = 'scroll';
})

regclose.addEventListener('click', function () {
    regScreen.style.display = 'none';
    main.style.overflowY = 'scroll';
})

const togglePassword = document.querySelectorAll(".eye");
const passwords = document.querySelectorAll(".password");

togglePassword.forEach((elem) => {
    elem.addEventListener("click", function () {
        // toggle the type attribute
        const logtype = passwords[0].getAttribute("type") === "password" ? "text" : "password";
        passwords[0].setAttribute("type", logtype);
        const regtype = passwords[1].getAttribute("type") === "password" ? "text" : "password";
        passwords[1].setAttribute("type", regtype);

        // toggle the icon
        document.querySelector('#logdets .eye-show').classList.toggle("hide");
        document.querySelector('#logdets .eye-hide').classList.toggle("hide");
        document.querySelector('#password-div .eye-show').classList.toggle("hide");
        document.querySelector('#password-div .eye-hide').classList.toggle("hide");
    });
})

var newUser = document.querySelector('#newUser');
newUser.addEventListener('click', function () {
    logScreen.style.display = 'none';
    regScreen.style.display = 'flex';
})

var notifFlag = 0;

var notifs = document.querySelectorAll('.initial-state');
notifs.forEach(function (notif, index) {
    notif.setAttribute('id', `notif-${index}`);
    notif.addEventListener('click', function () {
        var expandbtn = document.querySelector(`#notif-${index} ion-icon`);
        var foodCatg = document.querySelectorAll('.food-catg');
        var itemDesc = document.querySelectorAll('.item-desc');
        foodCatgText = document.querySelectorAll('.food-catg h4');
        if (notifFlag === 0) {
            itemDesc[index].style.display = 'flex';
            document.querySelectorAll(`#notifs #notif-${index} h4`).forEach(function (elem) {
                elem.style.opacity = 1;
            });
            // console.log(itemDesc[1])
            expandbtn.style.opacity = '1';
            expandbtn.setAttribute('name', 'chevron-up-outline');
            notif.style.height = '40vh';
            foodCatg.forEach(function (fooca) {
                fooca.style.marginRight = '30px';
            })
            notifFlag = 1;
        }
        else {
            itemDesc[index].style.display = 'none';
            document.querySelectorAll(`#notifs #notif-${index} h4`).forEach(function (elem) {
                elem.style.opacity = 0;
            });
            expandbtn.style.opacity = '0.5';
            expandbtn.setAttribute('name', 'chevron-down-outline');
            notif.style.height = '15vh';
            foodCatg.forEach(function (fooca) {
                fooca.style.marginRight = '30px';
            })
            notifFlag = 0;
        }
    })
})

