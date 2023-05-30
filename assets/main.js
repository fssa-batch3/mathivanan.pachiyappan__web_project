const blog_records = JSON.parse(localStorage.getItem("blog_records"));

if (!blog_records) {
  localStorage.setItem(
    "blog_records",
    JSON.stringify([
      {
        timestamp: "10 Apr 2023",
        post_id: "34883e34-b10f-4bb8-b85f-192237abcd75",
        title: "How to learn UI/UX Design? Volume(3)",
        category: "DESIGN",
        tags: [""],
        content: "UX is an exciting field to explore, even if the idea of starting a career in the field can be a bit daunting, especially if you don’t have any UX design experience. In the world of UX design, there’s so much to learn and take in! The idea of going from complete novice to professional seems impossible...",
        unique_id: "lindamerry18@gmail.com",
        name: "Linda Merry",
        image: { source: "/assets/images/img/post-7.jpg", alt: "post_image" },
        profile: {
          source: "../../assets/images/img/profile-1.jpg",
          alt: "profile_image",
        },
        profile_link: { href: "/pages/Myprofile/6_profile.html" },
      },
      {
        timestamp: "10 Apr 2023",
        post_id: "85c1e750-d0f3-46a7-883e-fdc7071b2abc",
        title: "The World of Networks \n Part-1",
        category: "TECH",
        tags: [""],
        content: "Communication has evolved greatly. Traditional communication methods such as mail have been overtaken by more sophisticated forms. Electronic Communication methods offer higher speeds; more efficiency, reliability, integrity, security; scale across larger geographical areas and require less resources to use...",
        unique_id: "jennirivera@gmail.com",
        name: "Jenni Rivera",
        image: { source: "/assets/images/img/post-8.jpg", alt: "post_image" },
        profile: {
          source: "../../assets/images/img/profile-2.jpg",
          alt: "profile_image",
        },
        profile_link: { href: "/pages/Myprofile/6_profile.html" },
      },
      {
        timestamp: "10 Apr 2023",
        post_id: "8067bf8a-9c28-43a4-89b7-74ed7ad484f0",
        title: "Apple iPhone 13 Pro, iPhone 13 Pro Max Launched",
        category: "MOBILE",
        tags: [""],
        content: "During its California Streaming event, Apple unveiled the iPhone 13 series that includes four smartphones: iPhone 13 Mini, iPhone 13, iPhone 13 Pro, and iPhone 13 Pro Max. The iPhone 13 Pro and the iPhone 13 Pro Max are the higher-end devices of the bunch. Both smartphones feature a design...",
        unique_id: "selenagomez62@gmail.com",
        name: "Selena Gomez",
        image: { source: "/assets/images/img/post-9.jpg", alt: "post_image" },
        profile: {
          source: "../../assets/images/img/profile-3.jpg",
          alt: "profile_image",
        },
        profile_link: { href: "/pages/Myprofile/6_profile.html" },
      },
      {
        timestamp: "10 Apr 2023",
        post_id: "34883e34-b10f-4bb8-b85f-192237aabd75",
        title: "How to learn UI/UX Design? Volume(2)",
        category: "DESIGN",
        tags: [""],
        content: "As a UX designer, you’ll rely heavily on tools, so start by familiarizing yourself with the essentials. Again, the toolset will vary from designer to designer—but you’ll definitely need tools for the following User research: Survey and polling tools such as SurveyMonkey and Typeform,...",
        unique_id: "lindamerry18@gmail.com",
        name: "Linda Merry",
        image: { source: "/assets/images/img/post-4.jpg", alt: "post_image" },
        profile: {
          source: "../../assets/images/img/profile-1.jpg",
          alt: "profile_image",
        },
        profile_link: { href: "/pages/Myprofile/6_profile.html" },
      },
      {
        timestamp: "10 Apr 2023",
        post_id: "85c1e750-d0f3-46a7-883e-fdc7071b2sdc",
        title: "Elements of a network \n Part-1",
        category: "TECH",
        tags: [""],
        content: "In order to understand networks we need to understand the elements of a network. There are four main elements that define how communication over networks works Rules or agreements to govern how the messages are sent, directed, received and interpreted – examples include protocols...",
        unique_id: "jennirivera@gmail.com",
        name: "Jenni Rivera",
        image: { source: "/assets/images/img/post-5.jpg", alt: "post_image" },
        profile: {
          source: "../../assets/images/img/profile-2.jpg",
          alt: "profile_image",
        },
        profile_link: { href: "/pages/Myprofile/6_profile.html" },
      },
      {
        timestamp: "10 Apr 2023",
        post_id: "8067bf8a-9c28-43a4-89b7-74ed7yr484f0",
        title: "Realme 10 Pro+ 5G Review: Excellent Performance",
        category: "MOBILE",
        tags: [""],
        content: "Realme is known for launching extremely value-for-money smartphones, especially in the mid-range segment. Today, the company has launched the Realme 10 Pro and the Realme 10 Pro+, which come with excellent specifications and a beautiful design. It also comes with Realme’s latest software,...",
        unique_id: "selenagomez62@gmail.com",
        name: "Selena Gomez",
        image: { source: "/assets/images/img/post-6.jpg", alt: "post_image" },
        profile: {
          source: "../../assets/images/img/profile-3.jpg",
          alt: "profile_image",
        },
        profile_link: { href: "/pages/Myprofile/6_profile.html" },
      },
      {
        timestamp: "10 Apr 2023",
        post_id: "34883e34-b10f-4bb8-b85f-192237dcab75",
        title: "How to learn UI/UX Design? Volume(1)",
        category: "DESIGN",
        tags: [""],
        content: "In addition to studying key UX design principles and methods, you can also work on developing your “designer’s eye.” Surround yourself with inspiration: check out portfolios on sites like bestfolios.com, the Adobe blog and Dribbble to see what other designers are up to...",
        unique_id: "lindamerry18@gmail.com",
        name: "Linda Merry",
        image: { source: "/assets/images/img/post-1.jpg", alt: "post_image" },
        profile: {
          source: "../../assets/images/img/profile-1.jpg",
          alt: "profile_image",
        },
        profile_link: { href: "/pages/Myprofile/6_profile.html" },
      },
      {
        timestamp: "10 Apr 2023",
        post_id: "85c1e750-d0f3-46a7-883e-fdc7071b2cad",
        title: "Optical Fibre Cable: Working, Applications & More",
        category: "TECH",
        tags: [""],
        content: "The need to stay always connected, for individuals as well as for enterprises, has set the demand rolling for high internet speeds with high quality and consistency. Further, innovations in the telecom sector have increased the deployment of broadband-based network architectures...",
        unique_id: "jennirivera@gmail.com",
        name: "Jenni Rivera",
        image: { source: "/assets/images/img/post-2.jpg", alt: "post_image" },
        profile: {
          source: "../../assets/images/img/profile-2.jpg",
          alt: "profile_image",
        },
        profile_link: { href: "/pages/Myprofile/6_profile.html" },
      },
      {
        timestamp: "10 Apr 2023",
        post_id: "8067bf8a-9c28-43a4-89b7-74ed7cd484f0",
        title: "Xiaomi Redmi Pad Review: The Best Budget Android Tablet",
        category: "MOBILE",
        tags: [""],
        content: "The tablet market was dwindling since the launch of low-cost smartphones with big screens. Another reason for the decline of Android tablets was Android’s poor user experience, and app design optimizations for larger screens were nowhere near Apple’s iPad. However, the COVID-19 pandemic created...",
        unique_id: "selenagomez62@gmail.com",
        name: "Selena Gomez",
        image: { source: "/assets/images/img/post-3.jpg", alt: "post_image" },
        profile: {
          source: "../../assets/images/img/profile-3.jpg",
          alt: "profile_image",
        },
        profile_link: { href: "/pages/Myprofile/6_profile.html" },
      },
    ])
  );
}

    // <!-- 
    //         data["image"]["alt"]
    //         data["image"]["source"]
    //         {
    //         names:
    //         image: {
    //         source:xxxx
    //         alt:xxxxx
    //         }
    //         } -->
    //     const blog_data = [
//     {
//         "name": "Linda Merry",
//         "image": {
//             "source":"../../assets/images/img/post-1.jpg",
//             "alt": "post_1"
//         } ,
//         "profile": {
//             source:"../../assets/images/img/profile-1.jpg",
//             alt: "profile_1"
//         } ,
//         "link": { href : "../posts/8-1_post.html"
//         },
//         "profile_link": { href : "../others-profile/6-1_profile.html"
//         },
//         "title":"How to learn UI/UX Design? Volume(3)",
//         "sub_title":"Design",
//         "timestamp": "12 Feb 2022",
//         "text": "UX is an exciting field to explore, even if the idea of starting a career in the field can be a bit daunting, especially if you don’t have any UX design experience. In the world of UX design, there’s so much to learn and take in! The idea of going from complete novice to professional seems impossible..."
//     },
//     {
//         "name": "Jenni Rivera",
//         "image": {
//             source:"../../assets/images/img/post-2.jpg",
//             alt: "post_2"
//         } ,
//         "profile": {
//             source:"../../assets/images/img/profile-2.jpg",
//             alt: "profile_2"
//         } ,
//         "link": { href : "../posts/9-1_post.html"
//         },
//         "profile_link": { href : "../others-profile/6-2_profile.html"
//         },
//         "title":"The World of Networks by Jenni Part-1",
//         "sub_title":"Tech",
//         "timestamp": "10 Feb 2022",
//         "text": "Communication has evolved greatly. Traditional communication methods such as mail have been overtaken by more sophisticated forms. Electronic Communication methods offer higher speeds; more efficiency, reliability, integrity, security; scale across larger geographical areas and require less resources to use..."
//     },
//     {
//         "name": "Selena Gomez"   ,
//         "image": {
//             source:"../../assets/images/img/post-3.jpg",
//             alt: "post_3"
//         } ,
//         "profile": {
//             source:"../../assets/images/img/profile-3.jpg",
//             alt: "profile_3"
//         } ,
//         "link": { href : "../posts/10-1_post.html"
//         },
//         "profile_link": { href : "../others-profile/6-3_profile.html"
//         },
//         "title":"Apple iPhone 13 Pro, iPhone 13 Pro Max Launched",
//         "sub_title":"Mobile",
//         "timestamp": "05 Feb 2022",
//         "text": "During its California Streaming event, Apple unveiled the iPhone 13 series that includes four smartphones: iPhone 13 Mini, iPhone 13, iPhone 13 Pro, and iPhone 13 Pro Max. The iPhone 13 Pro and the iPhone 13 Pro Max are the higher-end devices of the bunch. Both smartphones feature a design..."
//     },

//     {
//         "name": "Linda Merry",
//         "image": {
//             source:"../../assets/images/img/post-4.jpg",
//             alt: "post_4"
//         } ,
//         "profile": {
//             source:"../../assets/images/img/profile-1.jpg",
//             alt: "profile_1"
//         } ,
//         "link": { href : "../posts/8-2_post.html"
//         },
//         "profile_link": { href : "../others-profile/6-1_profile.html"
//         },
//         "title":"How to learn UI/UX Design? Volume(2)",
//         "subtitle":"Design",
//         "timestamp": "30 Jan 2022",
//         "text": "As a UX designer, you’ll rely heavily on tools, so start by familiarizing yourself with the essentials. Again, the toolset will vary from designer to designer—but you’ll definitely need tools for the following User research: Survey and polling tools such as SurveyMonkey and Typeform,..."
//     },
//     {
//         "name": "Jenni Rivera",
//         "image": {
//             source:"../../assets/images/img/post-5.jpg",
//             alt: "post_2"
//         } ,
//         "profile": {
//             source:"../../assets/images/img/profile-2.jpg",
//             alt: "profile_2"
//         } ,
//         "link": { href : "../posts/9-2_post.html"
//         },
//         "profile_link": { href : "../others-profile/6-2_profile.html"
//         },
//         "title":"Elements of a network by Jenni Part-1",
//         "sub_title":"Tech",
//         "timestamp": "24 Jan 2022",
//         "text": "In order to understand networks we need to understand the elements of a network. There are four main elements that define how communication over networks works Rules or agreements to govern how the messages are sent, directed, received and interpreted – examples include protocols..."
//     },
//     {
//         "name": "Selena Gomez"   ,
//         "image": {
//             source:"../../assets/images/img/post-6.jpg",
//             alt: "post_6"
//         } ,
//         "profile": {
//             source:"../../assets/images/img/profile-3.jpg",
//             alt: "profile_1"
//         } ,
//         "link": { href : "../posts/10-2_post.html"
//         },
//         "profile_link": { href : "../others-profile/6-3_profile.html"
//         },
//         "title":"Realme 10 Pro+ 5G Review: Excellent Performance",
//         "sub_title":"Mobile",
//         "timestamp": "18 Jan 2022",
//         "text": "Realme is known for launching extremely value-for-money smartphones, especially in the mid-range segment. Today, the company has launched the Realme 10 Pro and the Realme 10 Pro+, which come with excellent specifications and a beautiful design. It also comes with Realme’s latest software,..."
//     },

//     {
//         "name": "Linda Merry",
//         "image": {
//             source:"../../assets/images/img/post-7.jpg",
//             alt: "post_7"
//         } ,
//         "profile": {
//             source:"../../assets/images/img/profile-1.jpg",
//             alt: "profile_1"
//         } ,
//         "link": { href : "../posts/8-3_post.html"
//         },
//         "profile_link": { href : "../others-profile/6-1_profile.html"
//         },
//         "title":"How to learn UI/UX Design? Volume(1)",
//         "sub_title":"Design",
//         "timestamp": "12 Jan 2022",
//         "text": "In addition to studying key UX design principles and methods, you can also work on developing your “designer’s eye.” Surround yourself with inspiration: check out portfolios on sites like bestfolios.com, the Adobe blog and Dribbble to see what other designers are up to..."
//     },
//     {
//         "name": "Jenni Rivera",
//         "image": {
//             source:"../../assets/images/img/post-8.jpg",
//             alt: "post_8"
//         } ,
//         "profile": {
//             source:"../../assets/images/img/profile-2.jpg",
//             alt: "profile_2"
//         } ,
//         "link": { href : "../posts/9-3_post.html"
//         },
//         "profile_link": { href : "../others-profile/6-2_profile.html"
//         },
//         "title":"Optical Fibre Cable: Working, Applications & More",
//         "sub_title":"Tech",
//         "timestamp": "10 Jan 2022",
//         "text": "The need to stay always connected, for individuals as well as for enterprises, has set the demand rolling for high internet speeds with high quality and consistency. Further, innovations in the telecom sector have increased the deployment of broadband-based network architectures..."
//     },
//     {
//         "name": "Selena Gomez"   ,
//         "image": {
//             source:"../../assets/images/img/post-9.jpg",
//             alt: "post_9"
//         } ,
//         "profile": {
//             source:"../../assets/images/img/profile-3.jpg",
//             alt: "profile_3"
//         } ,
//         "link": { href : "../posts/10-3_post.html"
//         },
//         "profile_link": { href : "../others-profile/6-3_profile.html"
//         },
//         "title":"Xiaomi Redmi Pad Review: The Best Budget Android Tablet",
//         "sub_title":"Mobile",
//         "timestamp": "05 Jan 2022",
//         "text": "The tablet market was dwindling since the launch of low-cost smartphones with big screens. Another reason for the decline of Android tablets was Android’s poor user experience, and app design optimizations for larger screens were nowhere near Apple’s iPad. However, the COVID-19 pandemic created..."
//     },
// ]
