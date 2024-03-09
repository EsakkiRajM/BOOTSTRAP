let div = document.createElement("div");
let divOutput = document.createElement("div");
let divList = document.createElement("div");
let nav = document.createElement("nav");
let ul = document.createElement("ul");
ul.classList.add("pagination");

divList.appendChild(nav);
nav.appendChild(ul);
div.append(divOutput, divList);

let currentPage = 1;
let totalPages = 100; // Assuming there are 100 total pages
let visiblePageLinks = 10; // Number of visible page links

let paginationOutput = (pageNumber) => {
    fetch(`https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json`)
        .then(response => response.json())
        .then(data => {
            let startIndex = (pageNumber - 1);
            let endIndex = pageNumber;
            let pageRecords = data.slice(startIndex, endIndex);

            divOutput.innerHTML = ""; // Clear previous content

            pageRecords.forEach(record => {
                let recordDiv = document.createElement("div");
                recordDiv.textContent = `ID: ${record.id},
Name: ${record.name}, 
Email: ${record.email}`;
                recordDiv.classList.add("m-1");
                divOutput.appendChild(recordDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
};

let paginationLinks = () => {
    ul.innerHTML = ""; // Clear previous pagination links

    let startPage = Math.max(1, currentPage - Math.floor(visiblePageLinks / 2));
    let endPage = Math.min(totalPages, startPage + visiblePageLinks - 1);
    console.log(endPage);

    for (let i = startPage; i <= endPage; i++) {
        let li = document.createElement("li");
        li.classList.add("page-item");

        let a = document.createElement("a");
        a.classList.add("page-link");
        a.href = "#";
        a.innerHTML = i;

        a.addEventListener('click', function () {
            currentPage = i;
            paginationOutput(currentPage);
            paginationLinks();
        });

        li.appendChild(a);
        ul.appendChild(li);
    }
}

paginationLinks(); // Call the function to generate pagination links

nav.classList.add("d-flex", "justify-content-center", "align-items-center");
divList.classList.add("m-5");
divOutput.classList.add("d-flex", "justify-content-center", "align-items-center");
// Append div to the body
document.body.appendChild(div);
