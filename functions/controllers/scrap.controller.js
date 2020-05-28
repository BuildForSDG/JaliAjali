const rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const axios = require('axios');

async function getUrlsAndPush() {
  // Initialise the sites via the urls
  const url = 'http://www.ntsa.go.ke/index.php?option=com_content&view=article&id=237';
  const firstUrl = 'http://www.ntsa.go.ke/';
  const urls = [];
  const response = await rp(url);
  // try block to get the html link tag and data using Cheerio
  try {
    const $ = cheerio.load(response);
    $('ul').each((index, element) => {
      const href = firstUrl + $(element).children().find('a').attr('href');
      urls.push(href);
    });
    // Select only the valid urls from the site
    for (let i = 0; i < urls.length; i++) {
      const ender = '.xlsx';
      const exists = new RegExp(`${ender}$`);
      if (exists.test(urls[i]) === false) {
        urls.splice(i, 1);
        i--;
      }
    }
    // Initiate the Axios to get data from the site in the required format of .xlsx
    await axios
      .request({
        responseType: 'arraybuffer',
        url: urls[0],
        method: 'get',
        headers: {
          'Content-Type': 'blob',
        },
      })
      .then((result) => {
        const outputFilename = 'accidentsData.xlsx';
        fs.writeFileSync(outputFilename, result.data);
        return outputFilename;
      });
  } catch (error) {
    console.error(error);
  }
}
module.exports = { getUrlsAndPush };
// getUrlsAndPush();
