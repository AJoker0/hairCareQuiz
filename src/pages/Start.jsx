import { useNavigate } from "react-router-dom";
import { useQuiz } from "../app/QuizContext";

export default function Start() {
    const nav = useNavigate();
    const { resetQuiz } = useQuiz();

    const startQuiz = () => {
        resetQuiz(); // Сбрасываем предыдущие ответы
        nav("/q/1");
    };

    return (
        <div style={{
            height: "526px",
            backgroundImage: "url(/images/Rectangle1.jpg)",
            backgroundSize: "cover", 
            backgroundPosition: "center",
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Цветной оверлей для лучшей читабельности текста */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.3)",
                zIndex: 1
            }}></div>
            
            <div style={{ 
                textAlign: "center", 
                maxWidth: "90%", 
                width: "100%",
                maxWidth: "820px",
                color: "#fff", 
                textShadow: "0 2px 18px rgba(0,0,0,.5)",
                zIndex: 2,
                position: "relative",
                padding: "20px"
            }}>
                <h1 style={{ 
                    fontSize: "clamp(32px, 5vw, 48px)", 
                    lineHeight: 1.1, 
                    marginBottom: "16px",
                    fontWeight: "700"
                }}>
                    Build a self care routine<br />suitable for you
                </h1>
                <p style={{ 
                    opacity: 0.95, 
                    marginBottom: "32px",
                    fontSize: "clamp(16px, 2vw, 18px)",
                    lineHeight: 1.5,
                    maxWidth: "600px",
                    margin: "0 auto 32px auto"
                }}>
                    Take our test to get a personalised self care routine based on your needs.
                </p>
                <button 
                    onClick={startQuiz}
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        border: "2px solid rgba(255, 255, 255, 0.8)",
                        color: "#fff",
                        padding: "12px 32px",
                        borderRadius: "8px",
                        fontSize: "16px",
                        fontWeight: "500",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        backdropFilter: "blur(10px)"
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                        e.target.style.borderColor = "#fff";
                        e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.8)";
                        e.target.style.transform = "translateY(0)";
                    }}
                >
                    Start the quiz
                </button>
            </div>
        </div>
    );
}