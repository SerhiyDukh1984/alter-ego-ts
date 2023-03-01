import axios from "axios";

export const getNewsApi = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=20"
    );
    if (response.data.length === 0) {
      throw new Error("error");
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const getMoreNewsApi = async (data: number) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_start=${data}&_limit=20`
    );
    if (response.data.length === 0) {
      throw new Error("error");
    }
    return response;
  } catch (error) {
    throw error;
  }
};
