let blog_records = JSON.parse(localStorage.getItem("blog_records"));

if(!blog_records){
    localStorage.setItem("blog_records", JSON.stringify([{"timestamp":"10 Apr 2023","post_id":"34883e34-b10f-4bb8-b85f-192237ddbd75","title":"Make a Difference on DEV as a Tag Moderator","category":"","tags":[""],"content":"<span style=\"color: rgb(23, 23, 23); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 20px;\">Tag moderators play an important role in helping to organize and manage the content of our community. If you want to make a difference here on DEV and for the developer community, consider joining our team as a tag moderator. Here are a few benefits:</span>","unique_id":"tomholland@gmail.com","name":"TomHolland","image":{"source":"/assets/images/img/post-1.jpg","alt":"post_image"},"profile":{"source":"../../assets/images/profile_2.jpg","alt":"profile_image"},"profile_link":{"href":"/pages/Myprofile/6_profile.html"}},{"timestamp":"10 Apr 2023","post_id":"85c1e750-d0f3-46a7-883e-fdc7071b2aec","title":"aaaaaa","category":"","tags":[""],"content":"aaaaaaaaaaaaaaaa","unique_id":"mathizan16@gmail.com","name":"Mathivanan","image":{"source":"/assets/images/img/post-1.jpg","alt":"post_image"},"profile":{"source":"../../assets/images/profile_2.jpg","alt":"profile_image"},"profile_link":{"href":"/pages/Myprofile/6_profile.html"}},{"timestamp":"10 Apr 2023","post_id":"8067bf8a-9c28-43a4-89b7-74ed7da484f0","title":"bbbbbbbbbbbbbbbb","category":"","tags":[""],"content":"bbbbbbbbbbbbbbbbbbbbbbbbb","unique_id":"mathizan162@gmail.com","name":"Maruthan","image":{"source":"/assets/images/img/post-1.jpg","alt":"post_image"},"profile":{"source":"../../assets/images/profile_2.jpg","alt":"profile_image"},"profile_link":{"href":"/pages/Myprofile/6_profile.html"}}]))
}

let comment_records = JSON.parse(localStorage.getItem("comment_records"));

if(!comment_records){

    localStorage.setItem("comment_records", JSON.stringify([]))
}

let post_id = localStorage.getItem("post_id");

if(!post_id){
    localStorage.setItem("post_id", "[]");
}