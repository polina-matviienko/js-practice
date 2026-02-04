// TODO: Get posts info
// console.log(posts);

const postContainer = document.querySelector(".cards");
const form = document.querySelector(".search-form");

form.addEventListener("submit", onSearchFormSubmit);

renderPosts(posts);

function renderPosts(posts = []) {
  if (posts.length === 0) {
    postContainer.innerHTML = "<p>Нічого не знайдено за вашим запитом 🔍</p>";
    return;
  }
  const markup = posts
    .map(
      ({
        id,
        title,
        body,
        reactions: { likes, dislikes },
        views,
        userId,
        coverImage,
        tags,
      }) => `<li class="card border-dark mb-3" data-userid="${userId}" data-postid="${id}">
            <img
              src="${coverImage}"
              class="card-img-top"
              alt="His mother had always taught him"
              height="500"
            />
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <hr />
              <div class="card-meta mb-3">
                <div class="card-meta-tags">
                  <p class="m-0 text-black-50 fw-lighter">
                    <i class="bi bi-tag"></i>
                  </p>
                  <ul class="tags-list">
                    ${createTags(tags)}
                  </ul>
                </div>

                <ul class="card-meta-likes">
                  <li class="text-black-50 fw-lighter">
                    <i class="bi bi-hand-thumbs-up"></i> <small>${likes}</small>
                  </li>
                  <li class="text-black-50 fw-lighter">
                    <i class="bi bi-hand-thumbs-down"></i> <small>${dislikes}</small>
                  </li>
                </ul>

                <p class="card-meta-views m-0 text-black-50 fw-lighter">
                  <i class="bi bi-eye"></i> <small>${views}</small>
                </p>
              </div>
              <hr />
              <p class="card-text">
                ${body}
              </p>
            </div>
          </li>`
    )
    .join("");

  postContainer.innerHTML = "";
  postContainer.insertAdjacentHTML("beforeend", markup);
}

function createTags(tags = []) {
  return tags
    .map(
      tag => `<li class="border border-dark rounded-1 text-center text-black-50 fw-lighter">
  <small>${tag}</small>
</li>`
    )
    .join("");
}

function onSearchFormSubmit(event) {
  event.preventDefault();
  const { target: form } = event;
  const {
    elements: {
      searchQuery: { value: query },
    },
  } = form;

  const searchedPost = searchPost(query);
  renderPosts(searchedPost);
}

function searchPost(searchQuery = "") {
  return posts.filter(
    ({ title, body }) =>
      title.includes(searchQuery) || body.includes(searchQuery)
  );
}
