import axios from "axios"


export const productFetch = async () =>{
    try {
        return await axios.get("https://fakestoreapi.com/products?limit=10")
    } catch (error) {
        console.log(error)
    }
}
