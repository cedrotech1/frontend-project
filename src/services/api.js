import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Car APIs
export const carAPI = {
  addCar: (carData) => api.post('/add-car', carData),
  getCars: () => api.get('/display-cars'),
  updateCar: (carData) => api.put('/edit-car', carData),
  deleteCar: (plateNumber) => api.delete('/delete-car', { data: { PlateNumber: plateNumber } }),
};

// Services APIs
export const serviceAPI = {
  addService: (serviceData) => api.post('/add-service', serviceData),
  getServices: () => api.get('/display-services'),
};

// Payment APIs
export const paymentAPI = {
  addPayment: (paymentData) => api.post('/add-payment', paymentData),
  getPayments: () => api.get('/display-payments'),
};

// Service Record APIs
export const serviceRecordAPI = {
  addServiceRecord: (recordData) => api.post('/add-service-record', recordData),
  getServiceRecords: () => api.get('/display-service-records'),
  updateServiceRecord: (recordData) => api.put('/update-service-record', recordData),
  deleteServiceRecord: (recordNumber) => api.delete('/delete-service-record', { data: { RecordNumber: recordNumber } }),
};

// Authentication APIs
export const authAPI = {
  signup: (userData) => api.post('/signup', userData),
  login: (credentials) => api.post('/login', credentials),
};

// Reports APIs
export const reportAPI = {
  getDailyReport: (date) => api.get(`/daily-report/${date}`),
  generateBill: (plateNumber) => api.get(`/generate-bill/${plateNumber}`),
  getTotalRevenue: (date) => api.get(`/total-revenue/${date}`),
};

export default api;
