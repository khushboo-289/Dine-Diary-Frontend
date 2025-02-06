import axios from "axios";

export const getAllRestaurants = () => {

    return axios.get("http://localhost:5000/restaurants");
}

export const addNewUser = ( payload ) => {
    console.log("apyload", payload)
    return axios.post("http://localhost:5000/users", payload);
}

export const getAUser = ( id ) => {
    return axios.get(`http://localhost:5000/users/${id}`);
}

export const getARestaurant = ( id ) => {
    return axios.get(`http://localhost:5000/restaurants/${id}`);
}

export const getUserByMobile = (mobile) => {
    return axios.get(`http://localhost:5000/users/mobiles/${mobile}`);
}

export const updateUser = (id, payload) => {
    return axios.patch(`http://localhost:5000/users/${id}`, payload);
} 