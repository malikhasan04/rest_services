import axios from "axios";

const api = axios.create({
    baseURL: "https://fakestoreapi.com/"
})

export const GetData = () => {
    return api.get("/products");
}

export const PutData = async (id, product) => {
    try {
        const res = await api.put(`/products/${id}`, product);
        return res.status === 200 ? res : [];
    } catch (error) {
        console.log(error);
    }
}