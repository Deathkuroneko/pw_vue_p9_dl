import axios from "axios";

const API_URL = "http://localhost:8080/api/vehiculo";

const URL = axios.create({
  baseURL: API_URL,
});

URL.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

export const consultarVehiculos = async () => {
  try {
    const response = await URL.get("/consultar");
    return response.data;
    } catch (error) {   
    console.error("Error al consultar vehículos:", error);
    throw error;
  }
};

export const crearVehiculo = async (vehiculo) => {
  try {
    const response = await URL.post("/crear", vehiculo);
    return response.data;
  } catch (error) {
    console.error("Error al crear vehículo:", error);
    throw error;
  }
};

//obtener info de usuario, rol, user, username, de autorizacion tomar el token del permiso para visualizar con login
// username, password

// link de serve autorizacion: http://localhost:8080/api/auth/login

const AUTH_URL = "http://localhost:8080/api/auth";

const authURL = axios.create({
  baseURL: AUTH_URL,
});

export const login = async (username, password) => {
  try {
    const response = await authURL.post("/login", { username, password });
    const { token } = response.data;
    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};       

export const obtenerInfoUsuario = async () => {
  try {
    const response = await authURL.get("/usuarios/lema");
    return response.data;
    } catch (error) {
    console.error("Error al obtener información del usuario:", error);
    throw error;
  }
};
