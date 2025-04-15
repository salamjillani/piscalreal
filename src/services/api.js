// src/services/api.js ★
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5173/api';

export const fetchWrapper = {
  get: (url) => fetch(`${API_BASE_URL}${url}`).then(handleResponse),
  post: (url, body) => fetch(`${API_BASE_URL}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(handleResponse),
};

function handleResponse(response) {
  return response.json().then(data => {
    if (!response.ok) throw data;
    return data;
  });
}