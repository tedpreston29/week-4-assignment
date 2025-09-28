const reviewDisplay = document.getElementById("app");
const userSubmission = document.getElementById("filmRating");

const fetchReviews = async () => {
  const response = await fetch(`http://localhost:9999/userRating`);
  const reviews = await response.json();
  addReviews(reviews);
};

function addReviews(reviewsArray) {
  reviewsArray.forEach((reviewObject) => {
    const div = document.createElement("div");
    div.classList.add("review-container");
    console.log(reviewObject);

    const film = document.createElement("p");
    const comment = document.createElement("p");
    const rating = document.createElement("p");

    film.innerText = reviewObject.title;
    comment.innerText = reviewObject.comment;
    rating.innerText = reviewObject.rating;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", async () => {
      await fetch(`http://localhost:9999/userRating/${reviewObject.id}`, {
        method: "DELETE",
      });
      fetchReviews();
    });

    div.setAttribute("id", "review-container");
    div.append(film, comment, rating);
    div.append(deleteBtn);
    reviewDisplay.append(div);
  });
}

fetchReviews();

userSubmission.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(userSubmission);
  const reviewSubmitted = Object.fromEntries(data);
  console.log(reviewSubmitted);

  const response = await fetch(`http://localhost:9999/userRating`, {
    headers: {
      "content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(reviewSubmitted),
  });
});
