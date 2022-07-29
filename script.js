const ratingCard = document.getElementById("rating-card");
const ratingList = document.querySelector(".rating-list");
const ratingOptions = ratingList.querySelectorAll(".rating-list__item");
const submitButton = document.getElementById("submitRating");
let rating;

// Rating experience
ratingOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // enable submit button
    submitButton.disabled = false;
    // clear other choices
    ratingOptions.forEach((otherOption) => {
      otherOption.classList.remove("selected");
    });
    // register new choice
    option.classList.toggle("selected");
    rating = option.dataset.grade;
  });
});

// End state

submitButton.addEventListener("click", () => {
  ratingCard.innerHTML = `
  <section class="state fade-in">
  <img
  class="decorative-img"
  src="./images/illustration-thank-you.svg"
  alt="Decorative element"
/>
<p class="accent centered">You selected ${rating} out of 5</p>
<p class="card__title centered">Thank you!</p>
<p class="card__desc centered margin-s">
  We appreciate you taking the time to give a rating. If you ever need
  more support, don’t hesitate to get in touch!
</p>
</section>
  `;
});
