
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
    <div class="nav_main">
        <p><a href="${rootPath}/pages/home/3_home.html">Ve<span>nom</span></a></p>
    </div>
        
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
                    <li><img src="${rootPath}/assets/images/profile_2.jpg" alt="profile_pic" width="40rem"
                            height="40rem"></li>
                </button>
                <div class="dropdown-content">
                    <a href="${rootPath}/pages/Myprofile/6_profile.html"><i class="fa fa-user-circle-o"
                            style="font-size:15px"></i>Profile</a>
                    <a id="med-dc" href="${rootPath}/pages/user_services/4_creat_post.html"><i class="fa fa-magic"
                            style="font-size:18px"></i>Create</a>
                    <a id="med-dc" href="${rootPath}/pages/user_services/5_notification.html"><i class="fa fa-bell"
                            style="font-size:13px"></i>Notification</a>
                    <a href="${rootPath}/pages/Myprofile/11_edit_profile.html"><i class="fa fa-gear"
                            style="font-size:15px"></i>Settings</a>
                    <a href="${rootPath}/index.html" id="logout_btn"><i class="fa fa-sign-out"
                            style="font-size:18px"></i>Log-Out</a>
                </div>
            </div>
        </ul>
    </div>
</div>
</header>`

// let imageURL = localStorage.getItem("imageURL");
//     let imgBox = document.getElementById("profile_bg");
//     profile_bg.style.backgroundImage = "url(" + imageURL + ")";

const loginUser = JSON.parse(localStorage.getItem("email_ID"));
// console.log(loginUser);
if(loginUser) {
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







