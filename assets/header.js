const rootPath = window.location.origin;

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
                    <span><i class="fa fa-search" style="color: #000; background-color: white"></i></span>
                </form>
            </li>
            <li><a href="./pages/Reg/2_login.html" id="login_btn">Login</a></li>
        </ul>
    </div>
</div>
</header>`;

const AfterLogin = `<header>
<div class="header">
    
        
    <div class="navigation_link">
        <ul>
            <form>
                <input type="text" placeholder="Search...." /><span><i class="fa fa-search" style="color: #000; background-color: white; padding: 0.2rem;"></i></span>
              </form>
            </li>
            <li id="med-blk"><a href="${rootPath}/pages/user_services/4_creat_post.html">Create</a></li>
            <div id="notific_bell">
            </div>
            <div class="dropdown">
                <button class="dropbtn">
                    <li class="profile_img" id="profile_img"></li>
                </button>
                <div class="dropdown-content" id="drop_down">
                    
                    <a id="med-dc" href="${rootPath}/pages/user_services/4_creat_post.html"><i class="fa fa-magic"
                            style="font-size:18px"></i>Create</a>
                    <a id="med-dc" href="${rootPath}/pages/user_services/5_notification.html"><i class="fa fa-bell"
                            style="font-size:13px"></i>Notification<span id="notificMobile" class="notific_count"></span></a>
                    
                    <a href="${rootPath}/index.html" id="logout_btn"><i class="fa fa-sign-out"
                            style="font-size:18px"></i>Log-Out</a>
                </div>
            </div>
        </ul>
    </div>
</div>
</header>`;

const loginUser = JSON.parse(localStorage.getItem("email_ID"));
// console.log(loginUser);
if (loginUser) {
  document.body.insertAdjacentHTML("afterbegin", AfterLogin);
  const userLoginElement = document.getElementById("login_btn");
  userLoginElement?.addEventListener(
    "click",
    () => (document.body.innerHTML = beforeLogin)
  );
  const userLogoutElement = document.getElementById("logout_btn");
  userLogoutElement?.addEventListener("click", () => {
    localStorage.removeItem("email_ID");
    document.body.innerHTML = beforeLogin;
  });
} else {
  document.body.insertAdjacentHTML("afterbegin", beforeLogin);
  const userLoginElement = document.getElementById("logout_btn");
  userLoginElement?.removeEventListener(
    "click",
    () => (document.body.innerHTML = AfterLogin)
  );
  localStorage.removeItem("email_ID");
}

const userData = JSON.parse(localStorage.getItem("email_ID"));
const userRecords = JSON.parse(localStorage.getItem("user_records"));
const profileImage = userRecords.find(
  (e) => e.user_email == loginUser
)?.user_profile;
const profImg = document.getElementById("profile_img");
profImg.style.backgroundImage = `url(${profileImage})`;

// Create the <a> element
var linkElement = document.createElement("a");
linkElement.setAttribute(
  "href",
  `${rootPath}/pages/user_services/5_notification.html?user_ID=${userData}`
);
// linkElement.href = rootPath + "/pages/user_services/5_notification.html?user_ID=${userData}";

// Create the <li> element
var listItemElement = document.createElement("li");
listItemElement.id = "med-blk";

// Create the <i> element
var iconElement = document.createElement("i");
iconElement.className = "fa fa-bell";
iconElement.style.color = "#000";

// Create the <span> element
var countElement = document.createElement("span");
countElement.id = "notific";
countElement.className = "notific_count";
countElement.innerText = "0";

// Append the <i> and <span> elements to the <li> element
listItemElement.appendChild(iconElement);
listItemElement.appendChild(countElement);

// Append the <li> element to the <a> element
linkElement.appendChild(listItemElement);

// Append the <a> element to the desired parent element in the DOM
var parentElement = document.getElementById("notific_bell");
parentElement.appendChild(linkElement);

const profileLink = document.getElementById("drop_down");

const url = `${rootPath}/pages/Myprofile/6_profile.html?user_ID=${userData}`;
const aTag = document.createElement("a");
const iTag = document.createElement("i");

aTag.setAttribute("href", url);
iTag.classList.add("fa", "fa-user-circle-o");
iTag.style.fontSize = "15px";
aTag.appendChild(iTag);
aTag.appendChild(document.createTextNode("Profile"));

// Create the div element
const divElement = document.createElement("div");
divElement.classList.add("nav_main");

// Create the anchor element and set its href attribute
const anchorElement = document.createElement("a");
anchorElement.setAttribute(
  "href",
  `${rootPath}/pages/home/3_home.html?user_ID=${userData}`
);

// Create the "Venom" text and add it as a child of the anchor element
const spanElement = document.createElement("span");
spanElement.textContent = "nom";
anchorElement.appendChild(document.createTextNode("Ve"));
anchorElement.appendChild(spanElement);

// Add the anchor element as a child of the div element
const paragraphElement = document.createElement("p");
paragraphElement.appendChild(anchorElement);
divElement.appendChild(paragraphElement);

document.querySelector("div.header").prepend(divElement);

const notific_card = JSON.parse(localStorage.getItem("comment_records"));
const getCmtPostlng = notific_card.filter((e) => e.user_email !== userData);
const notific_length = document.getElementById("notific");
notific_length.innerText = getCmtPostlng.length;
if (getCmtPostlng.length <= 0) {
  notific_length.style.display = "none";
}

const editProfile = document.getElementById("drop_down");

const a_Tag = document.createElement("a");
const i_tag = document.createElement("i");

a_Tag.setAttribute(
  "href",
  `${rootPath}/pages/Myprofile/11_edit_profile.html?user_ID=${userData}`
);
i_tag.classList.add("fa", "fa-gear");
i_tag.style.fontSize = "15px";
a_Tag.appendChild(i_tag);
a_Tag.appendChild(document.createTextNode("Settings"));

editProfile.prepend(a_Tag);
profileLink.prepend(aTag);
