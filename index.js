import express from "express";
import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public/" });
  // res.render("index.ejs", {
  //   pageKey: "62d13972090db0bb7d5d75a7",
  //   title: "Free Music Distribution Services | MADverse: Promote Music",
  //   content: "Discover MADverse, a free music distribution platform to promote your music effortlessly. Join now for music promotion, distribution, and more."
  // });
});
app.get("/impact", (req, res) => {
  res.sendFile("impact.html", { root: "public/" });
  // res.render("impact.ejs", {
  //   pageKey: "6643a6f62df9d8a7451a68a8",
  //   title: "MADverse | IMPACT",
  //   content: "Music distribution, promotion, splitting royalties, monetisation, and more. Join the revolution and discover a wider audience with MADverse.",
  // });
});
app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: "public/" });
  // res.render("about.ejs", {
  //   pageKey: "62d13972090db075f45d75bc",
  //   title: "MADverse | Your One-Stop Music Distribution & Promotion Hub",
  //   content: "Join a vibrant community of independent artists. MADverse offers music distribution, promotion, and artist collaboration in one place.",
  // });
});
app.get("/blog", (req, res) => {
  res.sendFile("blog.html", { root: "public/" });
  // res.render("blog.ejs", {
  //   pageKey: "62d13972090db064c35d75be",
  //   title: "MADverse Blog | Uncover Music Trends for Independent Artists",
  //   content: "Explore tips, tricks, and the dynamic music world. Grow as an independent artist with MADverse Blog insights and guidance.",
  // });
});
app.get("/pricing", (req, res) => {
  res.sendFile("pricing.html", { root: "public/" });
  // res.render("pricing.ejs", {
  //   pageKey: "63f90dbf4467b50afc67d2d6",
  //   title: "Find Your Ideal Music Distribution Service | MADverse",
  //   content: "Explore MADverse - Your music journey companion. We offer tailored plans beyond free distribution, designed for your success.",
  // });
});
app.get("/madverse-features", (req, res) => {
  res.sendFile("madverse-features.html", { root: "public/" });
  // res.render("madverse-features.ejs", {
  //   pageKey: "6435c836191078d95c4f0cb6",
  //   title: "MADverse | Effortless Digital Music Distribution Service",
  //   content: "Revolutionize your music journey with MADverse: distribution, promotion, royalty splitting, monetization, and more. Join us now!",
  // });
});
app.get("/madverse-sync", (req, res) => {
  res.sendFile("madverse-sync.html", { root: "public/" });
  // res.render("madverse-sync.ejs", {
  //   pageKey: "64b05921f4368b0861319d3c",
  //   title: "MADverse | Sync",
  //   content: "Music distribution, promotion, splitting royalties, monetisation, and more. Join the revolution and discover a wider audience with MADverse.",
  // });
});
app.get("/madverse-sync-for-artists", (req, res) => {
  res.sendFile("madverse-sync-for-artists.html", { root: "public/" });
  // res.render("madverse-sync-for-artists.ejs", {
  //   pageKey: "64b1a312f510a34fa545fc99",
  //   title: "Empower Your Music Career with Promotion | MADverse",
  //   content: "Join MADverse for music distribution, promotion, royalty splitting, monetization, and more. Explore new audiences and revolutionize your music journey.",
  // });
});
app.get("/blog-post-categories/articles", (req, res) => {
  res.sendFile("blog-post-categories/articles.html", { root: "public/" });
  // res.render("blog-post-categories/articles.ejs", {
  //   pageKey: "62d13972090db066ac5d75c9",
  //   title: "Articles - Blockchain X - Webflow Ecommerce website template",
  //   content: "Revolutionize the crypto industry with Blockchain X, our premium crypto and DeFi Webflow Template created for modern startups building on the blockchain to disrupt the industry.",
  // });
});
app.get("/blog-post-categories/resources", (req, res) => {
  res.sendFile("blog-post-categories/resources.html", { root: "public/" });
  // res.render("blog-post-categories/resources.ejs", {
  //   pageKey: "62d13972090db066ac5d75c9",
  //   title: "Resources - Blockchain X - Webflow Ecommerce website template",
  //   content: "Revolutionize the crypto industry with Blockchain X, our premium crypto and DeFi Webflow Template created for modern startups building on the blockchain to disrupt the industry.",
  // });
});
app.get("/blog-post-categories/news", (req, res) => {
  res.sendFile("blog-post-categories/news.html", { root: "public/" });
  // res.render("blog-post-categories/news.ejs", {
  //   pageKey: "62d13972090db066ac5d75c9",
  //   title: "News - Blockchain X - Webflow Ecommerce website template",
  //   content: "Revolutionize the crypto industry with Blockchain X, our premium crypto and DeFi Webflow Template created for modern startups building on the blockchain to disrupt the industry.",
  // });
});
app.get("/blog/avoiding-music-takedowns-the-pitfalls-of-artificial-promotion", (req, res) => {
  res.sendFile("blogs/avoiding-music-takedowns-the-pitfalls-of-artificial-promotion.html", { root: "public/" });
  // res.render("blog/avoiding-music-takedowns-the-pitfalls-of-artificial-promotion.ejs", {
  //     pageKey: "62d13972090db066ac5d75c9",
  //     title: "News - Blockchain X - Webflow Ecommerce website template",
  //     content: "Revolutionize the crypto industry with Blockchain X, our premium crypto and DeFi Webflow Template created for modern startups building on the blockchain to disrupt the industry.",
  //   });
});
app.get("/blog/decoding-user-generated-playlisting", (req,res) => {
  res.sendFile("blogs/decoding-user-generated-playlisting.html", { root: "public/" });
});
app.get("/blog/pitch-your-music-to-indie-spotify-curators-101", (req,res) => {
  res.sendFile("blogs/pitch-your-music-to-indie-spotify-curators-101.html", { root: "public/" });
});
app.get("/blog/music-money-metadata", (req,res) => {
  res.sendFile("blogs/music-money-metadata.html", { root: "public/" });
});
app.get("/blog/networking-for-musicians-7-tips-to-network-like-a-pro", (req,res) => {
  res.sendFile("blogs/networking-for-musicians-7-tips-to-network-like-a-pro.html", { root: "public/" });
});
app.get("/blog/how-to-get-your-songs-in-the-top-playlists-across-platforms", (req,res) => {
  res.sendFile("blogs/how-to-get-your-songs-in-the-top-playlists-across-platforms.html", { root: "public/" });
});
app.get("/blog/acing-social-media-like-a-pro-a-guide-for-independent-artists", (req,res) => {
  res.sendFile("blogs/acing-social-media-like-a-pro-a-guide-for-independent-artists.html", { root: "public/" });
});
app.get("/blog/decoding-spotifys-discovery-mode", (req,res) => {
  res.sendFile("blogs/decoding-spotifys-discovery-mode.html", { root: "public/" });
});
app.get("/blog/5-things-independent-artists-should-know-about-content-id", (req,res) => {
  res.sendFile("blogs/5-things-independent-artists-should-know-about-content-id.html", { root: "public/" });
});
app.get("/blog/the-what-why-and-how-of-catalog-migration", (req,res) => {
  res.sendFile("blogs/the-what-why-and-how-of-catalog-migration.html", { root: "public/" });
});
app.get("/blog/ultimate-music-distribution-platform-comparison-for-2024", (req,res) => {
  res.sendFile("blogs/ultimate-music-distribution-platform-comparison-for-2024.html", { root: "public/" });
});
app.get("/blog/youve-audience-weve-got-you-fanlinks-demonstrate-your-digital-power-with-fanlinks", (req,res) => {
  res.sendFile("blogs/youve-audience-weve-got-you-fanlinks-demonstrate-your-digital-power-with-fanlinks.html", { root: "public/" });
});
app.get("/blog/data-analytics-the-new-game-changer-for-independent-artists", (req,res) => {
  res.sendFile("blogs/data-analytics-the-new-game-changer-for-independent-artists.html", { root: "public/" });
});
app.get("/blog/unlocking-the-power-of-sync", (req,res) => {
  res.sendFile("blogs/unlocking-the-power-of-sync.html", { root: "public/" });
});
app.get("/blog/step-by-step-guide-uploading-your-music-to-spotify-and-other-platforms", (req,res) => {
  res.sendFile("blogs/step-by-step-guide-uploading-your-music-to-spotify-and-other-platforms.html", { root: "public/" });
});
app.get("/blog/unraveling-copyright-law-in-india-safeguarding-your-musical-creations", (req,res) => {
  res.sendFile("blogs/unraveling-copyright-law-in-india-safeguarding-your-musical-creations.html", { root: "public/" });
});
app.get("/blog/understanding-music-distribution-a-guide-for-artists", (req,res) => {
  res.sendFile("blogs/understanding-music-distribution-a-guide-for-artists.html", { root: "public/" });
});
app.get("/blog/learn-how-to-maximize-the-potential-of-madverse-dashboard", (req,res) => {
  res.sendFile("blogs/learn-how-to-maximize-the-potential-of-madverse-dashboard.html", { root: "public/" });
});
app.get("/blog/uncovering-the-vision-and-mission-behind-madverse", (req,res) => {
  res.sendFile("blogs/uncovering-the-vision-and-mission-behind-madverse.html", { root: "public/" });
});
app.get("/privacy-policy", (req,res) => {
  res.sendFile("privacy-policy.html", { root: "public/" });
});
app.get("/terms-of-service", (req,res) => {
  res.sendFile("terms-of-service.html", { root: "public/" });
});