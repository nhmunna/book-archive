const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
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
        const noResultDiv = document.createElement('div');
        noResultDiv.textContent = '';
        noResultDiv.innerHTML = `
        <h1>Sorrrrryyy !!!! no result found.</h1>
        `;
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
                    <p class="card-title">${book.author_name}</p>
                    <p class="card-title">${book.first_publish_year ? book.first_publish_year : ''}</p>
                    <p class="card-title">${book.publisher ? book.publisher : ''}</p>
                </div>
            </div>
            `;
            searchResult.appendChild(div);
        });
    }
}