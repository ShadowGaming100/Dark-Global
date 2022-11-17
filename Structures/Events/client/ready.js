
module.exports = async (client) => {
  try{
      console.log("hi")
  } catch (e){
    console.log(String(e.stack).grey.italic.dim.bgRed)
  }
}