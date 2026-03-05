const trmService = require("../services/trm.service")

exports.getDollarPrice = async () => {

  const price = await trmService.getTRM()

  return price
}