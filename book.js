const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    // document.getElementById('error').style.display = 'none';
    if (searchText === '') {
        const noResultEmpty = document.getElementById('search-result');
        noResultEmpty.textContent = '';
        // noResultEmpty.innerText = '';
        const div = document.createElement('div');
        div.innerHTML = `<h1>Sorrrrryyy !!!! no result found.</h1>`;
        noResultEmpty.appendChild(div);
    }
    else {
        // load data
        const url = `http://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(response => response.json())
            .then(data => displaySearchResult(data.docs))
    }
}


const displaySearchResult = books => {
    console.log(books);
    const searchResult = document.getElementById('search-result');
    // searchResult.innerText = '';
    searchResult.textContent = '';
    const resultNum = document.getElementById('result-num');
    resultNum.textContent = '';
    const numDiv = document.createElement('div');
    numDiv.innerHTML = `
    <h5>Total search number is ${books.length}</h5>
    `;
    resultNum.appendChild(numDiv);
    if (books.length === 0) {
        // const noResult = document.getElementById('no-result');
        // noResult.textContent = '';
        const noResultDiv = document.createElement('div');
        noResultDiv.textContent = '';
        noResultDiv.innerHTML = `
        <h1>Sorrrrryyy !!!! no result found.</h1>
        `;
        // noResult.appendChild(noResultDiv);
        searchResult.appendChild(noResultDiv);
    }
    else {
        books.forEach(book => {
            console.log(book);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" width="200">
                    <h5 class="card-title">${book.title}</h5>
                    <h3 class="card-title">${book.author_name}</h3>
                    <h3 class="card-title">${book.first_publish_year ? book.first_publish_year : ''}</h3>
                </div>
            </div>
            `;
            searchResult.appendChild(div);
        });
    }
}

// const loadMealDetail = mealId => {
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => displayMealDetail(data.meals[0]))
// }

// const displayMealDetail = meal => {
//     console.log(meal);
//     const mealDetails = document.getElementById('meal-details');
//     mealDetails.textContent = '';
//     const div = document.createElement('div');
//     div.classList.add('card');
//     div.innerHTML = `
//     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${meal.strMeal}</h5>
//             <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
//             <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
//         </div>
//     `;
//     mealDetails.appendChild(div);
// }