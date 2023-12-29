
const getALLProducts = async(req, res) =>{
    res.status(200).json({msg:`i am getALLProduct mannnnnnnnn`})
}
const getALLProductsTesting = async(req, res)=>{
    res.status(200).json({msg:`this is testing product`})
}

module.exports = {getALLProducts, getALLProductsTesting}