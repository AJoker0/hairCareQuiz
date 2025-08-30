import { useRef, useState, useEffect } from "react";

export default function Slider({ children }) {
    const ref = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    
    const scroll = (dir) => {
        // Прокручиваем точно на ширину двух карточек + gap между ними
        ref.current?.scrollBy({ left: dir * 580, behavior: "smooth" }); // 280*2 + 20 gap
    };

    const scrollToPage = (page) => {
        if (ref.current) {
            ref.current.scrollTo({ left: page * 580, behavior: "smooth" });
        }
    };

    const checkScrollPosition = () => {
        if (ref.current) {
            const { scrollLeft } = ref.current;
            const itemsPerPage = 2;
            const totalItems = children?.length || 0;
            const maxPages = Math.ceil(totalItems / itemsPerPage) - 1;
            
            // Вычисляем текущую страницу
            const currentPageNum = Math.round(scrollLeft / 580);
            setCurrentPage(currentPageNum);
            
            // Устанавливаем возможность прокрутки
            setCanScrollLeft(currentPageNum > 0);
            setCanScrollRight(currentPageNum < maxPages);
            
            // Устанавливаем общее количество страниц
            setTotalPages(Math.ceil(totalItems / itemsPerPage));
        }
    };

    useEffect(() => {
        checkScrollPosition();
        const element = ref.current;
        if (element) {
            element.addEventListener('scroll', checkScrollPosition);
            return () => element.removeEventListener('scroll', checkScrollPosition);
        }
    }, [children]);

    return (
        <div style={{ position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "center", width: "100%" }}>
                {canScrollLeft && (
                    <button 
                        onClick={() => scroll(-1)} 
                        style={{ 
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            border: "none",
                            background: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 32,
                            fontWeight: "normal",
                            cursor: "pointer",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                            zIndex: 2,
                            color: "#333",
                            transition: "all 0.3s ease",
                            flexShrink: 0
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
                            e.target.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
                            e.target.style.transform = "scale(1)";
                        }}
                    >
                        ‹
                    </button>
                )}
                <div style={{ position: "relative", overflow: "hidden", flexGrow: 1 }}>
                    <div 
                        ref={ref} 
                        style={{ 
                            display: "flex", 
                            gap: 20, 
                            overflowX: "hidden", 
                            scrollSnapType: "x mandatory", 
                            scrollBehavior: "smooth",
                            paddingBottom: 10,
                            width: "580px"
                        }}
                        className="slider-container"
                    >
                        {children}
                    </div>
                </div>
                {canScrollRight && (
                    <button 
                        onClick={() => scroll(1)} 
                        style={{ 
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            border: "none",
                            background: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 32,
                            fontWeight: "normal",
                            cursor: "pointer",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                            zIndex: 2,
                            color: "#333",
                            transition: "all 0.3s ease",
                            flexShrink: 0
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
                            e.target.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
                            e.target.style.transform = "scale(1)";
                        }}
                    >
                        ›
                    </button>
                )}
            </div>
            
            {/* Индикаторы страниц */}
            {totalPages > 1 && (
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 8,
                    marginTop: 1
                }}>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToPage(i)}
                            style={{
                                width: 12,
                                height: 12,
                                borderRadius: "50%",
                                border: "none",
                                background: i === currentPage ? "#007bff" : "#e0e0e0",
                                cursor: "pointer",
                                transition: "background-color 0.2s ease"
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}