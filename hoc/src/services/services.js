import axios from "axios";
import { transformReceivingData } from "./halpers";

export const sendNewTask = async (task) => {
  try {
    const data = await axios.post(
      "https://news-9cced.firebaseio.com/todos.json",
      task
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`https://news-9cced.firebaseio.com/todos/${id}.json`);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const receivingData = async () => {
  try {
    const { data } = await axios.get(
      "https://news-9cced.firebaseio.com/todos.json"
    );
    return transformReceivingData(data);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
