import axios from 'axios';

const API_URL = '/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Inquiry endpoints
export const submitInquiry = (formData) => 
  api.post('/inquiries', formData);

export const getInquiries = () => 
  api.get('/inquiries');

// Newsletter endpoints
export const subscribeNewsletter = (email) => 
  api.post('/newsletter/subscribe', { email });

export const getNewsletterSubscribers = () => 
  api.get('/newsletter/subscribers');

export default api;