const express = require('express');
const router = express.Router();

const {getAllProducts, getAllProductsTesting} = require("../controllers/products")

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
// router.route("/testing").get(getAllProductsTesting);

module.exports = router;





// const express = require('express');
// const { getAllProductsTesting,getAllProducts } = require('../controllers/products');
// const router = express.Router();

// router.route('/').get(getAllProducts);
// router.route('/testing').get(getAllProductsTesting)

// module.exports = router ; 

// const express = require('express');
// const { getAllProducts, getAllProductsTesting } = require('../controllers/products');

// const router = express.Router();

// router.route('/').get(getAllProducts)
// router.route('/testing').get(getAllProductsTesting)

// module.exports = router;
