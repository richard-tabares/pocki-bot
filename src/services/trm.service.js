const axios = require("axios")
const cheerio = require("cheerio")

exports.getTRM = async () => {

  try {

    const { data } = await axios.get("https://www.dolar-colombia.com/")

    const $ = cheerio.load(data)

    const price = $(".exchange-rate").first().text().trim()

    return price

  } catch (error) {

    console.error("Error scraping TRM")

    return "No pude obtener la TRM en este momento"

  }

}