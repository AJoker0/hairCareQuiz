import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import { sortProducts } from "../utils/productMatch";
import { useQuiz } from "../app/QuizContext";
import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";

export default function Results() {
    const { answers, wishlist, resetQuiz } = useQuiz();
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);

    const retakeQuiz = () => {
        resetQuiz();
        window.location.href = "/";
    };

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const items = await fetchProducts(page);
                setList(items);
                // Приблизительная оценка общего количества страниц
                // Обычно API возвращает не более 30 товаров на страницу
                if (items.length === 30) {
                    setTotalPages(prev => Math.max(prev, page + 1));
                }
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
            setLoading(false);
        })();
    }, [page]);

    const sorted = sortProducts(list, answers, wishlist);

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
            <section style={{
                minHeight: "60vh",
                backgroundImage: "url(/images/Rectangle1.jpg)",
                backgroundSize: "cover", 
                backgroundPosition: "center",
                display: "grid", 
                placeItems: "center", 
                textAlign: "center", 
                color: "#fff",
                position: "relative"
            }}>
                <div style={{ 
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0,0,0,0.3)"
                }} />
                <div style={{ maxWidth: 760, zIndex: 1, padding: "0 20px" }}>
                    <h1 style={{ 
                        fontSize: 48, 
                        lineHeight: 1.1, 
                        marginBottom: 16,
                        fontWeight: 600
                    }}>
                        Build you everyday self care routine.
                    </h1>
                    <p style={{ 
                        opacity: 0.95, 
                        marginBottom: 24,
                        fontSize: 18,
                        lineHeight: 1.4
                    }}>
                        Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.
                    </p>
                    <button 
                        onClick={retakeQuiz}
                        style={{ 
                            display: "inline-block",
                            border: "2px solid #fff", 
                            padding: "12px 24px", 
                            borderRadius: 8, 
                            color: "#fff",
                            background: "transparent",
                            cursor: "pointer",
                            fontWeight: 500,
                            fontSize: 16,
                            transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = "#fff";
                            e.target.style.color = "#333";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = "transparent";
                            e.target.style.color = "#fff";
                        }}
                    >
                        Retake the quiz
                    </button>
                </div>
            </section>

            <div style={{ 
                maxWidth: 1200, 
                margin: "-80px auto 60px", 
                padding: "0 20px",
                display: "flex",
                gap: 20,
                position: "relative",
                alignItems: "flex-start"
            }}>
                <div style={{
                    backgroundColor: "#eaf7fd",
                    borderRadius: 12,
                    padding: 24,
                    width: 280,
                    minWidth: 280,
                }}>
                    <h2 style={{
                        fontSize: 24,
                        fontWeight: 600,
                        marginBottom: 16,
                        color: "#333",
                        textAlign: "left"
                    }}>
                        Daily routine
                    </h2>
                    <p style={{
                        color: "#666",
                        lineHeight: 1.5,
                        fontSize: 14,
                        margin: 0,
                        textAlign: "left"
                    }}>
                        Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.
                    </p>
                </div>
                
                <div style={{ flex: 1 }}>
                    {loading ? (
                        <div style={{ 
                            textAlign: "center", 
                            padding: 40,
                            fontSize: 18,
                            color: "#666"
                        }}>
                            Loading...
                        </div>
                    ) : (
                        <Slider>
                            {sorted.map(p => <ProductCard key={p.id} product={p}/>)}
                        </Slider>
                    )}
                </div>
            </div>
        </div>
    );
}

