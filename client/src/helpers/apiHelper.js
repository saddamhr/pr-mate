import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const fetchGeneratedText = async (title) => {
  try {
    const response = await axios.post(`${baseURL}/generate`, {
      title,
    });
    return response.data;
  } catch (error) {
    console.error('Error generating output:', error);
    throw error;
  }
};
