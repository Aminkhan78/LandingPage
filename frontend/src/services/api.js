import axios from 'axios';
import API_BASE_URL from '../config/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProjects = () => api.get('/projects');
export const createProject = (formData) => api.post('/projects', formData, {
  headers: { 'Content-Type': 'multipart/form-data' },
});
export const updateProject = (id, formData) => api.put(`/projects/${id}`, formData, {
  headers: { 'Content-Type': 'multipart/form-data' },
});
export const deleteProject = (id) => api.delete(`/projects/${id}`);

export const getClients = () => api.get('/clients');
export const createClient = (formData) => api.post('/clients', formData, {
  headers: { 'Content-Type': 'multipart/form-data' },
});
export const updateClient = (id, formData) => api.put(`/clients/${id}`, formData, {
  headers: { 'Content-Type': 'multipart/form-data' },
});
export const deleteClient = (id) => api.delete(`/clients/${id}`);

export const getContacts = () => api.get('/contacts');
export const createContact = (data) => api.post('/contacts', data);

export const getNewsletters = () => api.get('/newsletter');
export const subscribeNewsletter = (email) => api.post('/newsletter', { email });

export default api;

