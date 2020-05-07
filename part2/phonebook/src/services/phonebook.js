import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(resp => resp.data);
}

const addPerson = newPerson => {
  const req = axios.post(baseUrl, newPerson)
  return req.then(resp => resp.data)
}

const deletePerson = ({name, id}) => {
  window.confirm(`Delete ${name}?`);
  const req = axios.delete(`${baseUrl}/${id}`);
  return req.then(resp => resp.status);
}

export default { getAll, addPerson, deletePerson }