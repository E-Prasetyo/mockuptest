import Axios from "axios"

const Product = {
  
    async getAllProduct(){
        const token = JSON.parse(sessionStorage.getItem('token'));
        const data = await Axios({
            method: "GET",
            url: process.env.REACT_APP_BASE_URL+"/v1/products",
            headers:{
                "Authorization" : `Bearer ${token}`,
                "Content-Type":"application/json"
            }
        })

        return data
    },

    async getAllProductById(value){
        const token = JSON.parse(sessionStorage.getItem('token'));
        const data = await Axios({
            method: "GET",
            url: process.env.REACT_APP_BASE_URL+`/v1/products/${value}`,
            headers:{
                "Authorization" : `Bearer ${token}`,
                "Content-Type":"application/json"
            }
        })

        return data
    },

    async createNewProduct(value){
        const token = JSON.parse(sessionStorage.getItem('token'));
        const data = await Axios({
            method: "POST",
            url: process.env.REACT_APP_BASE_URL+"/v1/products",
            headers:{
                "Authorization" : `Bearer ${token}`,
                "Content-Type":"application/json"
            },
            data:value
        })

        return data
    },

    async editProduct(value, id){
        const token = JSON.parse(sessionStorage.getItem('token'));
        const data = await Axios({
            method: "PUT",
            url: process.env.REACT_APP_BASE_URL+`/v1/products/${id}`,
            headers:{
                "Authorization" : `Bearer ${token}`,
                "Content-Type":"application/json",
            },
            data:value
        })

        return data
    },

    async deleteProduct(value){
        const token = JSON.parse(sessionStorage.getItem('token'));
        const data = await Axios({
            method: "DELETE",
            url: process.env.REACT_APP_BASE_URL+`/v1/products/${value}`,
            headers:{
                "Authorization" : `Bearer ${token}`,
                "Content-Type":"application/json",
            },
        })

        return data
    },

}

export default Product