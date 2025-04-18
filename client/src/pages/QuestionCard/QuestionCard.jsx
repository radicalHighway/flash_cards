import { useParams } from "react-router";
import { useEffect, useState } from "react";
import './QuestionCard.css'

export default function Quiz() {
  const { theme } = useParams();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [showNext, setShowNext] = useState(false);

  // Загружаем вопросы по теме
  useEffect(() => {
    fetch(`/api/questions/themes/${theme}`)
      .then(res => res.json())
      .then(data => {
        setQuestions(data.data);
      });
  }, [theme]);
console.log(questions)
  // При смене вопроса — перемешиваем ответы
  useEffect(() => {
    if (questions.length > 0 && questions[current]) {
      const question_id = questions[current].id;
      fetch(`/api/answers/question/${question_id}`)
        .then(res => res.json())
        .then(data => {
          const shuffled = shuffleArray(data.data); // перемешали
          setAnswers(data.data); // сохранили оригинал (если надо)
          setShuffledAnswers(shuffled); // сохранили перемешанные
        });
    }
  }, [questions, current]);

  // Функция перемешивания (Фишер-Йейтс)
  const shuffleArray = (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleAnswerClick = (answer) => {
    if (selected !== null) return;

    setSelected(answer.id);

    if (answer.istrue) {
      setScore(prev => prev + 100);
    }

    setShowNext(true);
  };

  const nextQuestion = () => {
    setCurrent(c => c + 1);
    setSelected(null);
    setShowNext(false);
  };

  if (!questions.length) return <p>Загрузка...</p>;

  const question = questions[current];

  return (
    <div className="question-card">
      <h3>{question.question}</h3>
      <p>Очки: {score}</p>

      <ul>
        {shuffledAnswers.map((a) => {
          let bg = 'white';

          if (selected !== null) {
            if (a.istrue) {
              bg = 'lightgreen'; // правильный
            } else if (a.id === selected) {
              bg = 'salmon'; // выбран, но неправильный
            }
          }

          return (
            <li
              key={a.id}
              onClick={() => handleAnswerClick(a)}
              style={{
                cursor: "pointer",
                padding: "10px",
                backgroundColor: bg,
                border: "1px solid gray",
                borderRadius: "8px",
                marginBottom: "10px",
                pointerEvents: selected !== null ? 'none' : 'auto',
                transition: "0.2s ease",
              }}
            >
              {a.answer}
            </li>
          );
        })}
      </ul>

      {showNext && current < questions.length - 1 && (
        <button onClick={nextQuestion}>Следующий вопрос</button>
      )}

      {showNext && current === questions.length - 1 && (
        <div>
          <h2>Конец викторины!</h2>
          <p>Твой финальный счёт: {score}</p>
        </div>
      )}
    </div>
  );
}
