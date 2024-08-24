async function news() {
  try {
    let a = document.querySelector(".news_content");

    // Add event listener to the button
    document
      .querySelector("button")
      .addEventListener("click", async function () {
        // Get the value from the input field
        let news_search = document.getElementById("news_search").value;

        // Construct the URL with the input value
        const url = `https://newsapi.org/v2/top-headlines?q=${news_search}&apiKey=fb569b0521af4e8fbfb303fff21b249b`;

        // Fetch data from the News API
        const res = await fetch(url);
        const data = await res.json();
        const result = data.articles;
        console.log(result);
        console.log(result);
        a.innerHTML = "";

        // Display articles
        result.forEach((e) => {
          const news_article = document.createElement("div");
      
            news_article.innerHTML = `
            <h2>Title: ${e.title}</h2>
            <p>${e.description}</p>
            <p>${e.content}</p>
            <p>Published At: ${e.publishedAt}</p>
            <p>author : ${e.author}</p>
            <a href="${e.url}" target="_blank">Read more</a>
        `;
    
      
          a.appendChild(news_article);
        });
      });
  } catch (error) {
    console.log(error);
  }
}

news();
