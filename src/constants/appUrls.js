const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const routes = {
  login: `${BASE_URL}/login`,
  organizations: `${BASE_URL}/organizations`,

};

export default routes;
