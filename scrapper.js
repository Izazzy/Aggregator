const puppeteer = require("puppeteer");

const scrapeArticles = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Adjust selectors based on the target website's structure
    const articles = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("h2 a")).map((article) => ({
            title: article.innerText,
            link: article.href,
        }));
    });

    await browser.close();
    return articles;
};

module.exports = scrapeArticles;



// const puppeteer = require("puppeteer");

// async function scrapeWired() {
//     // Launch the browser
//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();

//     try {
//         // Navigate to the Wired homepage
//         await page.goto("https://www.wired.com/", { waitUntil: "networkidle2" });

//         // Wait for the articles to load
//         await page.waitForSelector("a.card-component__link");

//         // Extract article titles and links
//         const articles = await page.evaluate(() => {
//             const articleElements = document.querySelectorAll("a.card-component__link");
//             const articles = [];

//             articleElements.forEach((element) => {
//                 const title = element.querySelector(".card-component__title")?.textContent.trim();
//                 const link = "https://www.wired.com" + element.getAttribute("href");
//                 if (title && link) {
//                     articles.push({ title, link });
//                 }
//             });

//             return articles;
//         });

//         console.log("Scraped Articles:", articles);

//         // Return the scraped articles
//         return articles;
//     } catch (error) {
//         console.error("Error scraping Wired:", error);
//     } finally {
//         // Close the browser
//         await browser.close();
//     }
// }

// // Run the scraper
// scrapeWired().then((articles) => {
//     console.log("Scraping completed:", articles);
// });
