async function fetchPosts() {
  try {
    const postsResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = await postsResponse.json();

    const postsContainer = document.getElementById("posts");

    posts.slice(0, 20).forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `
                <div class="title">Title: ${post.title}</div>
                <div class="description">${post.body.substring(0, 100)}...</div>
            `;
      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

fetchPosts();
