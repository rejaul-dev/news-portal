const loadCategories = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  displayCategories(data.data.news_category);
};

const displayCategories = (categories) => {
  const menu = document.getElementById("all-category");
  categories.forEach((item) => {
    // console.log(item);
    const ul = document.createElement("ul");
    // ul.classList.add("nav");
    ul.innerHTML = `
          <li>
        <a onclick="loadCategoryDetails('${item.category_id}')" href="#">${item.category_name}</a>
        </li>
    `;
    menu.appendChild(ul);
  });
};

{
  /* <li><a onclick="loadCategoryDetails('${item.category_id}') ${item.category_name}></a></li> */
}

const loadCategoryDetails = async (category_id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`
  );
  const data = await response.json();
  displayCategoryDetails(data.data);
};

const displayCategoryDetails = async (details) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.textContent = "";
  details.forEach((details) => {
    const detailDiv = document.createElement("div");
    detailDiv.innerHTML = `
        <div class="card card-side shadow-xl p-8">
            <img src="${details.thumbnail_url}" alt="Movie" />
            <div class="card-body">
              <h2 class="card-title">${details.title}</h2>
              <p>${details.details}</p>
              <div class="card-actions justify-end">
              <div class=" rounded-full">
                <button class="btn btn-primary">Show More</button>
              </div>
            </div>
          </div>
        
        `;
    cardContainer.appendChild(detailDiv);
  });
};

loadCategoryDetails('01');
loadCategories();
