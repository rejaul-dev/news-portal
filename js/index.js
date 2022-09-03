const loadAllCategory = async () => {
      const response = await fetch(
        "https://openapi.programming-hero.com/api/news/categories"
    );
    const data = await response.json();
    return data.data.news_category;
    
}

const setAllMenu = async () => {
    const data = await loadAllCategory();

    const menu = document.getElementById("all-category");
    
    for (const categories of data) {

        // console.log(categories.category_name);

        const ul = document.createElement("ul");
        ul.classList.add('nav');
        ul.innerHTML = `
        <li class="nav-item">
        <a class="nav-link"href="#">${categories.category_name}</a>
        </li>
    
    
    `;
        menu.appendChild(ul)
    }
    

   
}

// loadAllCategory()
setAllMenu(); 