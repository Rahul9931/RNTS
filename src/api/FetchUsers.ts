import axios from 'axios';

// Define the type for a single user
export interface User {
  id: number;
  name: string;
  email: string;
}

// Base API URL
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// API function to fetch users
export const fetchUsersApi = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`${BASE_URL}/users`);
  return response.data; // Return type-safe user data
};
