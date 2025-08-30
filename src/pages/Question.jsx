import { useParams } from "react-router-dom";
import { useQuiz } from "../app/QuizContext";
import OptionButton from "../components/OptionButton";
import NavButtons from "../components/NavButtons";
import ProgressRing from "../components/ProgressRing";

const QUESTIONS = {
  1: { key: "q1", title: <>What's your hair type or <br /> texture?</>, opts: ["Straight", "Curly", "Wavy", "Fine"] },
  2: { key: "q2", title: <>How often do you wash <br />your hair?</>, opts: ["Daily", "Every other day", "Twice a week", "Once a week", "Every two weeks"] },
  3: { key: "q3", title: <>What benefit do you look <br /> for in your hair products?</>, opts: [
      "Anti-breakage", "Hydration", "Soothing dry scalp", "Repairs appearance of damaged hair", "Volume", "Curl and coil enhancing"
    ]},
  4: { key: "q4", title: <>Is there anything troubling <br /> you about your hair?</>, opts: ["Breakage", "Frizz", "Scalp dryness", "Damage", "Tangling"] },
  5: { key: "q5", title: <>What is your natural hair <br /> color(s) today?</>, opts: ["Black", "Brown", "Blonde", "Red/Orange", "Silver/Grey"] },
};

export default function Question() {
  const { num } = useParams();         
  const n = Number(num);
  const { answers, setAnswer } = useQuiz();
  const q = QUESTIONS[n];

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <div style={{ maxWidth: 880, width: "100%", textAlign: "center" }}>
        {/* Заголовок с таймером на одном уровне */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 40, position: "relative" }}>
          <h2 className="question-title" style={{ fontSize: 40, margin: 0, flex: 1 }}>{q.title}</h2>
          <div style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}>
            <ProgressRing current={n} total={5} />
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginBottom: 40 }}> 
          {q.opts.map((opt, index) => (
            <OptionButton
              key={opt}
              selected={answers[q.key] === opt}
              onClick={() => setAnswer(q.key, opt)}
            >
              {String.fromCharCode(97 + index)}. {opt}
            </OptionButton>
          ))}
        </div>

        {/* Кнопки навигации по центру */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <NavButtons canNext={Boolean(answers[q.key])} />
        </div>
      </div>
    </div>
  );
}
