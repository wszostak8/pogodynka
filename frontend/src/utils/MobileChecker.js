export const Mobile = ({ children }) => {
    const isMobile = window.innerWidth <= 800; // Przykładowa wartość, możesz dostosować według potrzeb
    return isMobile ? children : null;
};

export const Desktop = ({ children }) => {
    const isDesktop = window.innerWidth > 1024; // Przykładowa wartość, możesz dostosować według potrzeb
    return isDesktop ? children : null;
};