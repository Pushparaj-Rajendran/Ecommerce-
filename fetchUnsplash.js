const axios = require("axios");
require("dotenv").config();
const fs = require("fs");

const categories = [
  { query: "indian woman saree fashion", category: "Women" },
  { query: "indian man kurta fashion", category: "Men" },
  { query: "indian kids fashion", category: "Kids" },
  { query: "indian maternity fashion", category: "Maternity" }
];

async function fetchImages() {
  const results = [];
  for (const cat of categories) {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(cat.query)}&client_id=${process.env.UNSPLASH_KEY}&per_page=10`;
    const response = await axios.get(url);
    response.data.results.forEach(img => {
      results.push({
        category: cat.category,
        imageUrl: img.urls.regular,
        altText: img.alt_description || `${cat.category} Indian model`
      });
    });
  }
  fs.writeFileSync("unsplash-fashion.json", JSON.stringify(results, null, 2));
  console.log("Fetched Unsplash images for Indian fashion categories!");
}

fetchImages();