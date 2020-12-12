import axios from 'axios';

const api = 'http://localhost:8080/api';

export async function saveProject(project) {
  return await axios.post(`${api}/project`, project);
}

export async function fetchProjects() {
  const response = await axios.get(`${api}/project`);
  return response.data;
}

export async function deleteProject(id) {
  return await axios.delete(`${api}/project/${id}`);
}

export async function updateProject(project) {
  return await axios.put(`${api}/project`, project);
}
