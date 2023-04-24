let rootPath = window.location.origin;

const beforeLogin = `<header>
<div class="header">
    <div class="nav_main">
        <p><a href="#">Ve<span>nom</span></a></p>
    </div>

    <div class="navigation_link">
        <ul>
            <li>
                <form>
                    <input type="text" placeholder="Search...." />
                    <span><i class="fa fa-search" style="color: #000;"></i></span>
                </form>
            </li>
            <li><a href="./pages/Reg/2_login.html" id="login_btn">Login</a></li>
        </ul>
    </div>
</div>
</header>`

const AfterLogin = `<header>
<div class="header">
    
        
    <div class="navigation_link">
        <ul>
            <form>
                <input type="text" placeholder="Search...." /><span><i class="fa fa-search" style="color: #000;"></i></span>
              </form>
            </li>
            <li id="med-blk"><a href="${rootPath}/pages/user_services/4_creat_post.html">Create</a></li>
            <a href="${rootPath}/pages/user_services/5_notification.html">
                <li id="med-blk"><i class="fa fa-bell" style="color: #000;"></i><span id="notific" class="notific_count">0</span></li>
            </a>
            <div class="dropdown">
                <button class="dropbtn">
                    <li class="profile_img" id="profile_img"></li>
                </button>
                <div class="dropdown-content" id="drop_down">
                    
                    <a id="med-dc" href="${rootPath}/pages/user_services/4_creat_post.html"><i class="fa fa-magic"
                            style="font-size:18px"></i>Create</a>
                    <a id="med-dc" href="${rootPath}/pages/user_services/5_notification.html"><i class="fa fa-bell"
                            style="font-size:13px"></i>Notification</a>
                    
                    <a href="${rootPath}/index.html" id="logout_btn"><i class="fa fa-sign-out"
                            style="font-size:18px"></i>Log-Out</a>
                </div>
            </div>
        </ul>
    </div>
</div>
</header>`


const loginUser = JSON.parse(localStorage.getItem("email_ID"));
// console.log(loginUser);
if (loginUser) {
    document.body.insertAdjacentHTML("afterbegin", AfterLogin);
    const userLoginElement = document.getElementById("login_btn");
    userLoginElement?.addEventListener("click", () => document.body.innerHTML = beforeLogin);
    const userLogoutElement = document.getElementById("logout_btn");
    userLogoutElement?.addEventListener("click", () => {
        localStorage.removeItem("email_ID");
        document.body.innerHTML = beforeLogin;
    });
} else {
    document.body.insertAdjacentHTML("afterbegin", beforeLogin);
    const userLoginElement = document.getElementById("logout_btn");
    userLoginElement?.removeEventListener("click", () => document.body.innerHTML = AfterLogin);
    localStorage.removeItem("email_ID");
}

let userRecords = JSON.parse(localStorage.getItem("user_records"));
let profileImage = userRecords.find((e) => e.user_email == loginUser)?.user_profile;
let profImg = document.getElementById("profile_img");
profImg.style.backgroundImage = "url(" + profileImage + ")";


let profileLink = document.getElementById("drop_down");

let userData = JSON.parse(localStorage.getItem("email_ID"));
let url = `${rootPath}/pages/Myprofile/6_profile.html?user_ID=${userData}`;
let aTag = document.createElement("a");
let iTag = document.createElement("i");

aTag.setAttribute("href", url);
iTag.classList.add("fa", "fa-user-circle-o");
iTag.style.fontSize = "15px";
aTag.appendChild(iTag);
aTag.appendChild(document.createTextNode("Profile"));

// Create the div element
const divElement = document.createElement('div');
divElement.classList.add('nav_main');

// Create the anchor element and set its href attribute
const anchorElement = document.createElement('a');
anchorElement.setAttribute("href", `${rootPath}/pages/home/3_home.html?user_ID=${userData}`);

// Create the "Venom" text and add it as a child of the anchor element
const spanElement = document.createElement('span');
spanElement.textContent = 'nom';
anchorElement.appendChild(document.createTextNode('Ve'));
anchorElement.appendChild(spanElement);

// Add the anchor element as a child of the div element
const paragraphElement = document.createElement('p');
paragraphElement.appendChild(anchorElement);
divElement.appendChild(paragraphElement);

document.querySelector("div.header").prepend(divElement);

let notific_card = JSON.parse(localStorage.getItem("comment_records"));
let notific_length = document.getElementById("notific");
notific_length.innerText = notific_card.length;
if (notific_card.length <= 0) {
    notific_length.style.display = 'none';
}

let editProfile = document.getElementById("drop_down");

let a_Tag = document.createElement("a");
let i_tag = document.createElement("i");

a_Tag.setAttribute("href", `${rootPath}/pages/Myprofile/11_edit_profile.html?user_ID=${userData}`);
i_tag.classList.add("fa", "fa-gear");
i_tag.style.fontSize = "15px";
a_Tag.appendChild(i_tag);
a_Tag.appendChild(document.createTextNode("Settings"));

editProfile.prepend(a_Tag);
profileLink.prepend(aTag);
