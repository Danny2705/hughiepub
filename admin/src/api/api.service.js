import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const signUp = async (user) => {
  return httpClient
    .post(`/auth/register`, user)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      // console.log(error);
      return error;
    });
};

export const login = async (user) => {
  return httpClient
    .post(`/auth/login`, user)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      // console.log(error);
      return error;
    });
};

export async function addEvent(data) {
  return httpClient.post("/calendar/create-event", data);
}

export async function getEvent() {
  return httpClient.get("/calendar/get-events");
}

export const updateEvent = async (id, updatedEvent) => {
  return httpClient
    .put(`/calendar/update-event/${id}`, updatedEvent)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteEvent = async (id) => {
  // console.log(id);
  return httpClient
    .delete(`/calendar/delete-event/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getEventById = async (id) => {
  return httpClient
    .get(`/calendar/get-events/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

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
  console.log("item", item);
  return httpClient
    .post(`/items`, item)
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
