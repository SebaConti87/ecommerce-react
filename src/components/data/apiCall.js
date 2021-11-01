import data from "./data";

const apiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
};
export default apiCall;
