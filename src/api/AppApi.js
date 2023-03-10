import axios from "axios";

const baseURL = "http://localhost:4001";

  const getAuthToken = () => {
    const authToken = localStorage.getItem("user")
    if(authToken) return authToken;
  }

  const login = async (loginData) => {
    const authToken = await axios({
      method: "post",
      url: `${baseURL}/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(loginData),
    }).catch((error) => {
      console.log("There was an error!", error);
      return error;
    });

    if (authToken) return authToken.data;
  };

  const registerUser = async (registerData) => {
    const authToken = await axios({
      method: "post",
      url: `${baseURL}/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(registerData),
    }).catch((error) => {
      console.log("There was an error!", error);
      return error;
    });

    if (authToken) return authToken.data;
  };

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
      "x-access-token": await getAuthToken(),
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
      "x-access-token": await getAuthToken(),
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
      "x-access-token": await getAuthToken(),
    },
    data: "",
  }).catch((error) => {
    console.log("There was an error!", error);
    return error;
  });
};
export { addNew, getTasks, getTaskById, deleteTaskById, updateTaskbyId, login, registerUser };