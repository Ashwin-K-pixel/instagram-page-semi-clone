const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "avatar-vangogh.jpg",
        post: "post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "avatar-courbet.jpg",
        post: "post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "avatar-ducreux.jpg",
        post: "post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let containerId = document.getElementById("whatever")

for (i = 0; i < 3; i++) {
    let profileHTML = `
    <section id="profile">
    <div class="profile">
        <img class="profile-img" src="${posts[i].avatar}" />
        <p class="username"> ${posts[i].name} </p>
        <p class="post-location"> ${posts[i].location} </p>
        <img class="post-img" src="${posts[i].post}" />
    </div>
    </section>

`

    let footerHTML = `
    <footer id="footer">
    <div class="icons-container">
        <img class="icon icon-like" src="images/icon-heart.png" alt="like icon">
        <img class="icon icon-comment" src="images/icon-comment.png" alt="comment icon">
        <img class="icon icon-dm" src="images/icon-dm.png" alt="share icon">
        <p class="footer-text like-text"> ${posts[i].likes} likes </p>
        <p class="footer-text comment-text"> ${posts[i].username} ${posts[i].comment} </p>
    </div>
    </footer>
    <hr />
`
    containerId.innerHTML += profileHTML + footerHTML 

}