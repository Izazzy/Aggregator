const express = require("express");
const cors = require("cors");
const scrapeArticles = require("./scraper");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// Endpoint to scrape articles
app.get("/articles", async (req, res) => {
    const url = "https://www.theverge.com"; // Change to desired website
    try {
        const articles = await scrapeArticles(url);
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: "Error fetching articles" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require("express");
// const axios = require("axios");
// const cheerio = require("cheerio");

// const app = express();
// const PORT = 3000;

// // Scraping function
// const scrapeWired = async () => {
//     const url = "https://www.wired.com/";
//     try {
//         // Fetch HTML content
//         const { data } = await axios.get(url, {
//             headers: {
//                 "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
//             },
//         });

//         // Load HTML into cheerio
//         const $ = cheerio.load(data);

//         // Store articles
//         const articles = [];
//         $("a.card-component__link").each((index, element) => {
//             const title = $(element).find(".card-component__title").text().trim();
//             const link = "https://www.wired.com" + $(element).attr("href");
//             if (title && link) {
//                 articles.push({ title, link });
//             }
//         });

//         return articles;
//     } catch (error) {
//         console.error("Error scraping Wired:", error);
//         return [];
//     }
// };

// // Route to display articles
// app.get("/articles", async (req, res) => {
//     const articles = await scrapeWired();
//     res.send(`
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Scraped Articles</title>
//             <style>
//                 body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
//                 a { text-decoration: none; color: #007BFF; }
//                 a:hover { text-decoration: underline; }
//                 ul { list-style: none; padding: 0; }
//                 li { margin: 10px 0; }
//             </style>
//         </head>
//         <body>
//             <h1>Scraped Articles from Wired</h1>
//             <ul>
//                 ${articles
//                     .map(
//                         (article) =>
//                             `<li><a href="${article.link}" target="_blank">${article.title}</a></li>`
//                     )
//                     .join("")}
//             </ul>
//         </body>
//         </html>
//     `);
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



// // const express = require("express");
// // const axios = require("axios");
// // const cheerio = require("cheerio");

// // const app = express();
// // const PORT = 3000;

// // // Function to scrape articles
// // const scrapeWired = async () => {
// //     const url = "https://www.wired.com/";
// //     try {
// //         // Fetch the HTML content of the website
// //         const { data } = await axios.get(url);

// //         // Load the HTML into cheerio for parsing
// //         const $ = cheerio.load(data);

// //         // Array to store scraped articles
// //         const articles = [];

// //         // Find article links and titles
// //         $("a.card-component__link").each((index, element) => {
// //             const title = $(element).find(".card-component__title").text().trim();
// //             const link = "https://www.wired.com" + $(element).attr("href");
            
// //             if (title && link) {
// //                 articles.push({ title, link });
// //             }
// //         });

// //         return articles;
// //     } catch (error) {
// //         console.error("Error scraping Wired:", error);
// //         return [];
// //     }
// // };

// // // Route to display scraped articles
// // app.get("/articles", async (req, res) => {
// //     const articles = await scrapeWired();
// //     res.send(`
// //         <!DOCTYPE html>
// //         <html lang="en">
// //         <head>
// //             <meta charset="UTF-8">
// //             <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //             <title>Scraped Articles</title>
// //             <style>
// //                 body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
// //                 a { text-decoration: none; color: #007BFF; }
// //                 a:hover { text-decoration: underline; }
// //                 ul { list-style: none; padding: 0; }
// //                 li { margin: 10px 0; }
// //             </style>
// //         </head>
// //         <body>
// //             <h1>Scraped Articles from Wired</h1>
// //             <ul>
// //                 ${articles
// //                     .map(
// //                         (article) =>
// //                             `<li><a href="${article.link}" target="_blank">${article.title}</a></li>`
// //                     )
// //                     .join("")}
// //             </ul>
// //         </body>
// //         </html>
// //     `);
// // });

// // // Start the server
// // app.listen(PORT, () => {
// //     console.log(`Server is running on http://localhost:${PORT}`);
// // });
