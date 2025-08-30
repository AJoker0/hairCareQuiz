export default function ProgressRing({ current, total }) {
    const pct = (current / total) * 100;
    const radius = 24, stroke = 4, c = 2 * Math.PI * radius;
    const dash = c - (pct / 100) * c;

    return (
        <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Фоновый круг */}
            <circle cx="30" cy="30" r={radius} stroke="#e3f3fb" strokeWidth={stroke} fill="none"/>
            {/* Прогресс круг - начинается сверху и идет по часовой стрелке */}
            <circle 
                cx="30" 
                cy="30" 
                r={radius} 
                stroke="#9dd6f2" 
                strokeWidth={stroke} 
                fill="none"
                strokeDasharray={c} 
                strokeDashoffset={dash} 
                strokeLinecap="round"
                transform="rotate(-90 30 30)"
                style={{ transition: "stroke-dashoffset 0.3s ease" }}
            />
            <text x="50%" y="52%" textAnchor="middle" fontSize="12" fill="#6aa9c4">
                {current}/{total}
            </text>
        </svg>
    );
}