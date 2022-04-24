import http from "../services/httpService";

const PORT = process.env.PORT || 3001;
const apiUrl = `http://localhost:${PORT}/api`;

export function createNewCar(car) {
  return http.post(`${apiUrl}/cars`, car);
}

export function getCar(_id) {
  return http.get(`${apiUrl}/cars/my-cars/${_id}`);
}

export function getMyCars() {
  return http.get(`${apiUrl}/cars/my-cars`);
}

export function editCar(_id, car) {
  return http.put(`${apiUrl}/cars/${_id}`, car);
}

export function deleteCar(_id) {
  return http.delete(`${apiUrl}/cars/${_id}`);
}

const carService = {
  createNewCar,
  getMyCars,
  getCar,
  editCar,
  deleteCar,
};

export default carService;
