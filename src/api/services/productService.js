// api/services/productService.js
import apiClient from "../apiClient";

const getProducts = () => apiClient.get("/list-products");
const getProductById = (id) => apiClient.get(`/products/${id}`);
const createProduct = (data) => apiClient.post("/products", data);

export default { getProducts, getProductById, createProduct };
