const loadCategories = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  try {
    const data = await response.json();
    displayCategories(data.data.news_category); 
  }
  catch (error) {
    console.loh(error);
  }
  

};

const displayCategories = (categories) => {
  const menu = document.getElementById("all-category");
  categories.forEach((item) => {
    const ul = document.createElement("li");
    ul.innerHTML = `
      <li class="nav-item">
      <a class="nav-link active" onclick="loadCategoryDetails('${item.category_id}')" aria-current="page" href="#">${item.category_name}</a>
      </li>
    `;
    menu.appendChild(ul);
  });
};

const loadCategoryDetails = async (category_id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`
  );
  try {
    const data = await response.json();
    displayCategoryDetails(data.data);
  }
  catch {
    console.log(error);
  }
  
};

const displayCategoryDetails = async (details) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.textContent = "";
  details.forEach((details) => {
    const detailDiv = document.createElement("div");
    detailDiv.innerHTML = `
       <div class="col">
          <div class="card p-4">
            <img src="${details.thumbnail_url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title fw-bold">${details.title.slice(0, 50)}...</h5>
              <p class="card-text">${details.details.slice(0, 120)}...</p>
            </div>
          </div>
        </div>
        `;
    cardContainer.appendChild(detailDiv);
  });
};

loadCategoryDetails('08');
loadCategories();
