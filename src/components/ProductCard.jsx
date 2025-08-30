import { useQuiz } from "../app/QuizContext";

export default function ProductCard({ product }) {
    const { wishlist, toggleWishlist } = useQuiz();
    const inWish = wishlist.includes(product.handle);
    const img = product.images?.[0]?.src;
    const price = product.variants?.[0]?.price ?? "0";

    return (
        <div style={{ 
            width: 280, 
            minWidth: 280,
            borderRadius: 12, 
            background: "#fff", 
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            overflow: "hidden",
            scrollSnapAlign: "start",
            position: "relative",
            transition: "transform 0.2s ease, box-shadow 0.2s ease"
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
        }}>
            <div style={{ position: "relative", height: 320, backgroundColor: "#f8f9fa", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
                {img && (
                    <img 
                        src={img} 
                        alt={product.title} 
                        style={{ 
                            maxWidth: "100%", 
                            maxHeight: "100%", 
                            objectFit: "contain"
                        }}
                    />
                )}
                <button 
                    onClick={() => toggleWishlist(product.handle)}
                    title="Add to wishlist"
                    style={{ 
                        position: "absolute", 
                        right: 16, 
                        top: 16, 
                        background: "rgba(255,255,255,0.9)", 
                        borderRadius: "50%", 
                        border: "none", 
                        width: 32, 
                        height: 32,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        fontSize: 16,
                        color: inWish ? "#ff6b6b" : "#666",
                        transition: "all 0.2s ease",
                        zIndex: 1
                    }}
                    onMouseEnter={(e) => e.target.style.background = "#fff"}
                    onMouseLeave={(e) => e.target.style.background = "rgba(255,255,255,0.9)"}
                >
                    <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill={inWish ? "#ff6b6b" : "none"}
                        stroke={inWish ? "#ff6b6b" : "#666"}
                        strokeWidth="2"
                    >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </button>
            </div>
            <div style={{ padding: 16 }}>
                <h3 style={{ 
                    margin: "0 0 8px 0", 
                    fontWeight: 500, 
                    fontSize: 16,
                    color: "#333",
                    lineHeight: 1.3,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                }}>
                    {product.title}
                </h3>
                <div style={{ 
                    color: "#666", 
                    fontSize: 18, 
                    fontWeight: 600,
                    marginTop: 8
                }}>
                    ${price}
                </div>
            </div>
        </div>
    );
}