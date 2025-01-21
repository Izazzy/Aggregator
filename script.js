async function fetchArticles() {
    const proxy = "http://localhost:8080/"; // Local CORS Anywhere proxy
    const url = proxy + "https://www.wired.com/";

    try {
        // Fetch HTML content using the proxy with required headers
        const response = await fetch(url, {
            headers: {
                "origin": "http://localhost", // Required header for CORS Anywhere
            },
        });

        // Parse the response as text
        const text = await response.text();

        // Parse the HTML using DOMParser
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");

        // Scrape articles
        const articles = [];
        const links = doc.querySelectorAll("a[data-analytics-link='article']"); // Adjust selector if needed
        links.forEach((link) => {
            const title = link.textContent.trim();
            const href = link.href;
            articles.push({ title, href });
        });

        // Add articles to the DOM
        const list = document.getElementById("articles");
        articles.forEach((article) => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${article.href}" target="_blank">${article.title}</a>`;
            list.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching articles:", error);
    }
}

// Call the function to fetch and display articles
fetchArticles();



// async function fetchArticles() {
//     const proxy = "http://localhost:8080/";
//     const url = proxy + "https://www.wired.com/";

//     try {
//         // Fetch HTML content using the proxy
//         const response = await fetch(url);
//         const text = await response.text();

//         // Parse the HTML using DOMParser
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(text, 'text/html');

//         // Scrape articles
//         const articles = [];
//         const links = doc.querySelectorAll('a[data-analytics-link="article"]'); // Adjust selector if needed
//         links.forEach(link => {
//             const title = link.textContent.trim();
//             const href = link.href;
//             articles.push({ title, href });
//         });

//         // Add articles to the DOM
//         const list = document.getElementById('articles');
//         articles.forEach(article => {
//             const li = document.createElement('li');
//             li.innerHTML = `<a href="${article.href}" target="_blank">${article.title}</a>`;
//             list.appendChild(li);
//         });
//     } catch (error) {
//         console.error('Error fetching articles:', error);
//     }
// }

// // Call the function to fetch and display articles
// fetchArticles();



// async function fetchArticles() {
//     const proxy = "https://cors-anywhere.herokuapp.com/";
//     const url = proxy + "https://www.wired.com/";
//     fetch(url)
//     .then(response => response.text())
//     .then(data => {
//         console.log(data); // Process the fetched HTML
//     })
//     .catch(err => console.error('Error:', err));

//     // const url = 'https://wired.com/'; // Target URL
//     try {
//         // Fetch HTML content from the site (CORS restrictions may block this)
//         const response = await fetch(url, { mode: 'no-cors' });
//         const text = await response.text();

//         // Parse the HTML using DOMParser
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(text, 'text/html');

//         // Scrape articles
//         const articles = [];
//         const links = doc.querySelectorAll('a[data-analytics-link="article"]');
//         links.forEach(link => {
//             const title = link.textContent.trim();
//             const href = link.href;
//             articles.push({ title, href });
//         });

//         // Add articles to the DOM
//         const list = document.getElementById('articles');
//         articles.forEach(article => {
//             const li = document.createElement('li');
//             li.innerHTML = `<a href="${article.href}" target="_blank">${article.title}</a>`;
//             list.appendChild(li);
//         });
//     } catch (error) {
//         console.error('Error fetching articles:', error);
//     }
// }

// // Call the function to fetch and display articles
// fetchArticles();
