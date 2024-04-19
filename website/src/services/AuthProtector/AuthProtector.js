import React, { useEffect, useRef } from "react";
import { onAuthStateChanged, auth } from "../../init-firebase";
import { useNavigate, useLocation } from "react-router-dom";

const AuthProtector = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isMounted = useRef(true);

    useEffect(() => {
        const checkAuthStatus = () => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (isMounted.current) {
                    if (!user) {
                        // Se o usuário não estiver autenticado e a rota não for a de login, redirecione para a página de login
                        if (location.pathname !== "/login") {
                            //navigate("/login");
                        }
                    }
                }
            });
            return unsubscribe;
        };

        checkAuthStatus();

        return () => {
            isMounted.current = false;
        };
    }, [navigate, location.pathname]);

    // Permita a renderização dos componentes protegidos apenas se o usuário estiver autenticado
    if (!auth.currentUser) {
        return null;
    }

    // Verifique se a rota começa com "/admin/". Se sim, permita a renderização do componente
    if (location.pathname.startsWith("/admin/")) {
        return <>{props.children}</>;
    }

    // Redirecione para a página de login se o usuário não estiver autenticado
    return null;
};

export default AuthProtector;
