import { useNavigate, useParams } from "react-router-dom";

export default function NavButtons({ canNext }) {
    const nav = useNavigate();
    const { num } = useParams();
    const n = Number(num);

    return (
        <div style={{ 
            display: "flex", 
            gap: 16, 
            justifyContent: "center", 
            alignItems: "center"
        }}>
            <button 
                onClick={() => nav(n > 1 ? `/q/${n-1}` : "/")} 
                style={{ 
                    background: "none", 
                    border: "none", 
                    color: "#6aaac2",
                    fontSize: "16px",
                    cursor: "pointer",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#f0f8ff"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
            >
                Back
            </button>
            <button 
                disabled={!canNext}
                onClick={() => nav(n < 5 ? `/q/${n+1}` : "/results")}
                style={{ 
                    padding: "12px 24px", 
                    borderRadius: 10, 
                    background: canNext ? "#aee0f7" : "#e0e0e0", 
                    border: "none", 
                    cursor: canNext ? "pointer" : "not-allowed",
                    fontSize: "16px",
                    fontWeight: "500",
                    transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                    if (canNext) e.target.style.backgroundColor = "#9dd9f3"
                }}
                onMouseLeave={(e) => {
                    if (canNext) e.target.style.backgroundColor = "#aee0f7"
                }}
            >
                {n < 5 ? "Next question →" : "Discover your results"}
            </button>
        </div>
    );
}