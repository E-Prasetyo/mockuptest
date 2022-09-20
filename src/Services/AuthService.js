import Axios from 'axios';

const Auth = {

    async Login(value){
        const data = await Axios({
            method: "POST",
            url: process.env.REACT_APP_BASE_URL+"/auth/login",
            data: value
        })
        return data.data
    },

    async Register(value){
        const data = await Axios({
            method: "POST",
            url: process.env.REACT_APP_BASE_URL+"/auth/signup",
            data: value
        })
        return data.data
    },
}

export default Auth