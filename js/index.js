const loadAllCategory = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
    displayAllNewsCategory(data.data.news_category);
};


const displayAllNewsCategory = category => {
    const navMenu = document.getElementById("nav-menu");
    category.forEach(category => {
        const ul = document.createElement('li');
        ul.innerHTML = `
        <li>${category.category_name}</li>
        `;
        navMenu.appendChild(ul);
    });
};


loadAllCategory();

