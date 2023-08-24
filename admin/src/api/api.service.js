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
  // console.log(id);
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
