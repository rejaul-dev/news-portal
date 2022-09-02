const loadAllNewsCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await res.json();
  displayAllNewsCategory(data.data.news_category);
};

loadAllNewsCategory();



const displayAllNewsCategory = (category) => {
  const navMenu = document.getElementById("nav-menu");
  category.forEach((category) => {
    const ul = document.createElement("li");
    ul.innerHTML = `
        <li>${category.category_name}</li>
        `;
    navMenu.appendChild(ul);
  });
};

const loadNewsInCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/category/01"
  );
  const data = await res.json();
  displayNewsInCategory(data.data);
};

const displayNewsInCategory = (news) => {
//   console.log(news);
    const cardContainer = document.getElementById("card-container");
    news.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
        <div class="card card-side shadow-xl mt-12 p-4">
              <img src="${news.thumbnail_url}" alt="Movie" />
            <div class="card-body">
              <h2 class="card-title">${news.title}</h2>
              <p>${news.details}</p>
              <div class="card-actions justify-end">
                <p>${news.author.name}</p>
                <button class="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        `;
        cardContainer.appendChild(newsDiv);
    })
    
};

loadNewsInCategory();

