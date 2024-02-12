// Import axios
import axios from "axios";

// Create an axios instance
const api = axios.create({
  // Set the base URL for the API
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

// Define a function to get all posts
api.getAllPosts = function () {
  // Return the promise from the get request
  return api.get("/");
};

// Define a function to get a single post by id
api.getPostById = function (id) {
  // Return the promise from the get request
  return api.get(`/${id}`);
};

// Define a function to create a new post
api.createPost = function (data) {
  // Return the promise from the post request
  return api.post("/", data);
};

// Define a function to update a post by id
api.updatePost = function (id, data) {
  // Return the promise from the put request
  return api.put(`/${id}`, data);
};

// Define a function to delete a post by id
api.deletePost = function (id) {
  // Return the promise from the delete request
  return api.delete(`/${id}`);
};

// Export the api object
export default api;
