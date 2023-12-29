const getAllProducts = async(req, res) =>{
    res.status(200).json({msg: "I am getAllProducts"})
};

const getAllProductsTesting = async(req, res)=>{
    res.status(200).json({msg: "i am getAllproductTesting"})
}

module.exports = {getAllProducts, getAllProductsTesting}

// const getAllProducts = async(req, res)=>{
//     res.status(200).json({msg: "i am getAllProducts"})
// }

// const getAllProductsTesting = async(req, res)=>{
//     res.status(200).json({msg:"i am getallproducttesting "})
// }
// module.exports = {getAllProducts, getAllProductsTesting}