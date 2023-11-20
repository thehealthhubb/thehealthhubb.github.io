document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "e7c93b542c5f4b4ebbb294808d98604c"; // Replace with your News API key
  const newsContainer = document.getElementById("news-container");

  // Fetch news articles from the API for India
  fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Check if articles are available
      if (data.articles && Array.isArray(data.articles)) {
        // Display each article
        data.articles.forEach((article) => {
          // Check if essential properties are not null
          if (article.title && article.description && article.url) {
            const articleElement = document.createElement("div");
            articleElement.classList.add("newscard");
            articleElement.innerHTML = `
                            <h2>${article.title}</h2>
                            <p>${article.description}</p>
                            <a href="${article.url}" target="_blank">Read more</a>
                        `;
            newsContainer.appendChild(articleElement);
          }
        });
      } else {
        newsContainer.innerHTML = "No news articles available.";
      }
    })
    .catch((error) => {
      console.error("Error fetching news:", error);
      newsContainer.innerHTML = "Error fetching news. Please try again later.";
    });
});
