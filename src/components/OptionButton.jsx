export default function OptionButton({ children, selected, onClick }) {
    return (
        <button onClick={onClick} style={{
            padding: "12px 16px",
            borderRadius: 10,
            border: `2px solid ${selected ? "#9dd6f2" : "#cfe8f5"}`,
            background: selected ? "#eaf7fd" : "transparent",
            cursor: "pointer", minWidth: 140
        }}>
            {children}

        </button>
    );
}