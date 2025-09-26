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
    console.log(reviewObject);

    const film = document.createElement("p");
    const comment = document.createElement("p");
    const rating = document.createElement("p");

    film.innerText = reviewObject.title;
    comment.innerText = reviewObject.comment;
    rating.innerText = reviewObject.rating;

    div.setAttribute("id", "review-container");
    div.append(film, comment, rating);
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
