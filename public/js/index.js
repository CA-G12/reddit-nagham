const posts = document.querySelector("#postInput");
const content = document.querySelector(".login-signup");
const left = document.querySelector(".LTcolumn");

const headerInformation = (info) => {
  if (info.msg) {
    console.log("Error Messege");
  } else {
    content.textContent = "";
    content.innerHTML = `
    <div class="userInfo">
    <a href="/logout" class="logout btn">Logout</a></li>
    <div class="userNameImage">
        <div class="userName">${info.user_fullname}</div>
        <div class="userImg"><img src="${info.user_img}" alt=""></div>
    </div>
</div>
    `;
  }
};

fetch("/isloged")
  .then((data) => data.json())
  .then(headerInformation);

posts.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("/addPost", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.msg) {
        // console.log(data.msg);
        window.location.href = "../pages/loginPage.html";
      } else {
        console.log("success");
        window.location.href = "../pages/postPage.html";
      }
    });
});

const showPosts = (data) => {
  const gather = document.createElement("div");
  gather.classList.add("gatharing");
  const votes = document.createElement("div");
  votes.classList.add("votes");
  left.appendChild(votes);
  votes.appendChild(gather);
  const vote = document.createElement("div");
  vote.classList.add("vote");
  gather.appendChild(vote);
  const upVote = document.createElement("i");
  upVote.innerHTML = '<i class="fa-regular fa-arrow-up upVoteButton"></i>';
  // console.log(data.post_id);

  upVote.addEventListener("click", (e) => {
    fetch("/isloged")
      .then((information) => information.json())
      .then((information) => {
        if (information.msg) {
          window.location.href = "../pages/loginPage.html";
        } else {
          fetch("/voting", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              user_id: information,
              post_id: data.post_id,
            }),
          });
        }
      });
  });

  vote.appendChild(upVote);
  const numOfVotes = document.createElement("p");
  fetch("/votesCount", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      post_id: data.post_id
    })
  })
    .then((result) => result.json())
    .then((result) => (numOfVotes.textContent = result.rows[0].count));
  vote.appendChild(numOfVotes);
  const downVote = document.createElement("i");
  downVote.innerHTML =
    '<i class="fa-regular fa-arrow-down downVoteButton"></i>';
  vote.appendChild(downVote);
  const postContent = document.createElement("div");
  postContent.classList.add("postContent");
  gather.appendChild(postContent);
  const userInfo = document.createElement("div");
  userInfo.classList.add("owner");
  votes.appendChild(userInfo);
  const userImg = document.createElement("img");
  userImg.classList.add("userimg");
  userImg.src = `${data.user_img}`;
  userInfo.appendChild(userImg);
  const userName = document.createElement("a");
  userName.textContent = `${data.user_fullname}`;
  userInfo.appendChild(userName);
  postContent.appendChild(userInfo);
  const post = document.createElement("p");
  post.innerHTML = `${data.post_text}`;
  postContent.appendChild(post);
  const action = document.createElement("div");
  action.classList.add("actions");
  postContent.appendChild(action);
  action.innerHTML = `<button class="postbtn"><i class="fa-regular fa-comment"></i> comments</button>
  <button class="postbtn"><i class="fa-regular fa-bookmark"></i> save</button>
  <button class="postbtn"><i class="fa-thin fa-gift"></i> award</button>
  <button class="postbtn"><i class="fa-light fa-share"></i> share</button>
  <button class="postbtn"><i class="fa-regular fa-ellipsis"></i></button>`;
};

fetch("getAllPosts")
  .then((data) => data.json())
  .then((data) =>
    data.rows.forEach((ele) => {
      showPosts(ele);
    })
  );
