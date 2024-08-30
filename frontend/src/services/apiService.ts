import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export const getCompanies = async () => {
  return axios.get(`${API_URL}/companies`);
}

export const createCompany = async (companyData: { name: string; address: string; }) => {
  return axios.post(`${API_URL}/companies`, companyData);
};

export const deleteCompany = async (id: number) => {
  return axios.delete(`${API_URL}/companies/${id}`);
};

export const getApplications = async () => {
  return axios.get(`${API_URL}/applications`);
};

export const createApplication = async (applicationData: { companyId: number; status: string; }) => {
  return axios.post(`${API_URL}/applications`, applicationData);
};

export const deleteApplication = async (id: number) => {
  return axios.delete(`${API_URL}/applications/${id}`);
};

export const updateApplication = async (id: number, status: string) => {
  return axios.put(`${API_URL}/applications/${id}`, { status });
};

export const getArchivedItems = async () => {
  return axios.get(`${API_URL}/archived-items`);
};

export const createArchivedItem = async (archivedItemData: { companyId: number; }) => {
  return axios.post(`${API_URL}/archived-items`, archivedItemData);
};

export const deleteArchivedItem = async (id: number) => {
  return axios.delete(`${API_URL}/archived-items/${id}`);
};

export const updateArchivedItem = async (id: number, companyId: number) => {
  return axios.put(`${API_URL}/archived-items/${id}`, { companyId });
};

export const getPendingApplications = async () => {
  return axios.get(`${API_URL}/pending-applications`);
};

export const createPendingApplication = async (pendingApplicationData: { companyId: number; }) => {
  return axios.post(`${API_URL}/pending-applications`, pendingApplicationData);
};

export const deletePendingApplication = async (id: number) => {
  return axios.delete(`${API_URL}/pending-applications/${id}`);
};

export const updatePendingApplication = async (id: number, companyId: number) => {
  return axios.put(`${API_URL}/pending-applications/${id}`, { companyId });
};

export const getCompanyApplications = async (companyId: number) => {
  return axios.get(`${API_URL}/companies/${companyId}/applications`);
};

export const getCompanyArchivedItems = async (companyId: number) => {
  return axios.get(`${API_URL}/companies/${companyId}/archived-items`);
};

export const getCompanyPendingApplications = async (companyId: number) => {
  return axios.get(`${API_URL}/companies/${companyId}/pending-applications`);
};

export const getCompany = async (companyId: number) => {
  return axios.get(`${API_URL}/companies/${companyId}`);
};

export const updateCompany = async (companyId: number, companyData: { name: string; address: string; }) => {
  return axios.put(`${API_URL}/companies/${companyId}`, companyData);
};
