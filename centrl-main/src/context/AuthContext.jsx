import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");

      if (storedUser) {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        // If token exists in localStorage, use it
        if (storedToken) {
          setToken(storedToken);
          axios.defaults.headers.common["Authorization"] =
            `Bearer ${storedToken}`;
        } else if (userData.google_id) {
          setToken(userData.google_id);
          localStorage.setItem("token", userData.google_id);
          axios.defaults.headers.common["Authorization"] =
            `Bearer ${userData.google_id}`;
        }
      }

      setLoading(false);
    };

    loadUser();
  }, []);

  // Login function
  const login = (userData, authToken) => {
    setUser(userData);

    const tokenToUse = authToken || (userData && userData.google_id);

    if (tokenToUse) {
      setToken(tokenToUse);
      localStorage.setItem("token", tokenToUse);
      axios.defaults.headers.common["Authorization"] = `Bearer ${tokenToUse}`;
    }

    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    delete axios.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
