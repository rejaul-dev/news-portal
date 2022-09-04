const loadCategories = async () => {
      const response = await fetch(
        "https://openapi.programming-hero.com/api/news/categories"
    );
    const data = await response.json();
    displayCategories(data.data.news_category);
    
}

const displayCategories = (categories) => {
    const menu = document.getElementById("all-category");
    categories.forEach(item => {
        // console.log(item);
        const ul = document.createElement("ul");
        ul.classList.add("nav");
        ul.innerHTML = `
        <li class="nav-item">
        <a class="nav-link" onclick="loadCategoryDetails('${item.category_id}')" href="#">${item.category_name}</a>
        </li>
    `;  
    menu.appendChild(ul);
        
    });
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
    cardContainer.textContent = '';
    details.forEach(details => {
        const detailDiv = document.createElement('div');
        detailDiv.innerHTML = `
        <h1>Hello</h1>
        
        `
        cardContainer.appendChild(detailDiv);
    })

}


// loadCategoryDetails();
loadCategories();































// const setAllMenu = async () => {
//     const data = await loadAllCategory();

//     const menu = document.getElementById("all-category");
    
//     for (const categories of data) {

//         // console.log(categories.category_name);

    //     const ul = document.createElement("ul");
    //     ul.classList.add('nav');
    //     ul.innerHTML = `
    //     <li class="nav-item">
    //     <a class="nav-link" onclick="loadAllCategory('${categories.category_name.category_id}')"  href="#">${categories.category_name}</a>
    //     </li>
    
    
    // `;
//         menu.appendChild(ul)
//     }
    

   
// }

// setAllMenu(); 
// loadAllCategory();


