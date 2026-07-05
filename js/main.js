const posts = [
  {
    title: "Upcoming Feast Day Mass and Communion Service",
    description: "Join our parish for the special feast day mass, followed by communion and a community reception.",
    author: "Fr. John",
    category: "Mass & Sacraments",
  },
  {
    title: "Parish Prayer Group Meets This Sunday",
    description: "Gather with fellow parishioners for prayer, scripture reflection, and support for this week's intentions.",
    author: "Sr. Maria",
    category: "Prayer",
  },
  {
    title: "Support the Parish Donation Drive",
    description: "Learn how your donations help our church renovations, food outreach, and youth ministry programs.",
    author: "Parish Council",
    category: "Charity",
  },
  {
    title: "Meet with the Priest for Spiritual Guidance",
    description: "Schedule a time to speak with our parish priest about confession, communion preparation, and family blessings.",
    author: "Fr. John",
    category: "Community",
  },
];

const comments = [
  {
    name: "Anita",
    message: "Praying for the parish family and for a successful Sunday mass celebration.",
  },
  {
    name: "Ramesh",
    message: "I would like to volunteer for the donation drive and help organize the next community meal.",
  },
];

function renderPosts(targetId) {
  const container = document.getElementById(targetId);
  if (!container) return;
  container.innerHTML = posts
    .map(
      (post) => `
      <article class="card">
        <h3>${post.title}</h3>
        <p>${post.description}</p>
        <p><strong>${post.category}</strong> · ${post.author}</p>
      </article>`
    )
    .join("");
}

function renderComments() {
  const container = document.getElementById("comment-list");
  if (!container) return;
  container.innerHTML = comments
    .map(
      (comment) => `
      <div class="comment-card">
        <strong>${comment.name}</strong>
        <p>${comment.message}</p>
      </div>`
    )
    .join("");
}

function setupCommentForm() {
  const form = document.getElementById("comment-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = document.getElementById("comment-name");
    const textInput = document.getElementById("comment-text");
    if (!nameInput || !textInput) return;
    const name = nameInput.value.trim();
    const message = textInput.value.trim();
    if (!name || !message) return;
    comments.unshift({ name, message });
    nameInput.value = "";
    textInput.value = "";
    renderComments();
  });
}

function setupNewsletterForm() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("newsletter-email");
    if (!emailInput) return;
    emailInput.value = "";
    alert("Thanks for subscribing! We will keep you posted.");
  });
}

function init() {
  renderPosts("posts-preview");
  renderPosts("blog-posts");
  renderComments();
  setupCommentForm();
  setupNewsletterForm();
}

window.addEventListener("DOMContentLoaded", init);
