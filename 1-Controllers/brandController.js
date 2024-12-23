const Brand = require('../2-Schemas/brandSchema.js');

exports.getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.status(200).json({
      results: brands.length,
      brands
    });

  } catch (error) {
    res.status(500).send(error);
  }
}