import axios from "axios";

const baseURL = "http://localhost:4001";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRyeV9pZCI6IjMyOSIsInRleHQiOiJUaGlzIGlzIGEgbmV3IHRhc2sgZm9yIHlvdSIsImRheSI6IjIzcmQgTWF5LCAyMDMwIiwiaWF0IjoxNjc1ODc1MDUyLCJleHAiOjE2NzU4ODIyNTJ9.WXvSdZlDq3HuON7sEVwaWh0hK-_sSc0D539e6_gnPsw";

  const addNew = async (values) => {
    return await axios({
      method: "post",
      url: `${baseURL}/addNew`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(values),
    }).catch((error) => {
      console.log("There was an error!", error);
      return error;
    });
  };
  
const getTasks = async () => {
  return await axios({
    method: "post",
    url: `${baseURL}/tasks`,
    headers: {
      "x-access-token": TOKEN,
      // "Content-Type": "application/json",
    },
    data: "",
  }).catch((error) => {
    console.log("There was an error!", error);
    return error;
  });
};

const getTaskById = async (values) => {
  return await axios({
    method: "post",
    url: `${baseURL}/addNew`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(values),
  }).catch((error) => {
    console.log("There was an error!", error);
    return error;
  });
};

const deleteTaskById = async (taskId) => {
  return await axios({
    method: "delete",
    url: `${baseURL}/removeTask/${taskId}`,
    headers: {
      // "Content-Type": "application/json",
      "x-access-token": TOKEN,
    },
    data: "",
  }).catch((error) => {
    console.log("There was an error!", error);
    return error;
  });
};

const updateTaskbyId = async (taskId) => {
  return await axios({
    method: "patch",
    url: `${baseURL}/update/${taskId}`,
    headers: {
      // "Content-Type": "application/json",
      "x-access-token": TOKEN,
    },
    data: "",
  }).catch((error) => {
    console.log("There was an error!", error);
    return error;
  });
};
export { addNew, getTasks, getTaskById, deleteTaskById, updateTaskbyId };