import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Fetch all items
export const getAllItems = async () => {
  return httpClient
    .get(`/items`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

// Fetch a single item by ID
export const getItemById = async (id) => {
  return httpClient
    .get(`/items/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

// Create a new item
export const createItem = async (item) => {
  console.log(item);
  return httpClient
    .post(`/items`, { item: item })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

// Update an existing item by ID
export const updateItem = async (id, updatedItem) => {
  return httpClient
    .put(`/items/${id}`, updatedItem)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

// Delete an item by ID
export const deleteItem = async (id) => {
  return httpClient
    .delete(`/items/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
