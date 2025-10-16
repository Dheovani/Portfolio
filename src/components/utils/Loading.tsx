import "../styles/Loading.css";

export default () => (
    <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        width: "48px",
        height: "48px",
        border: "4px solid rgba(255, 255, 255, 0.3)",
        borderTop: "4px solid #7b3aed",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        margin: "auto",
    }} />
);