import "./styles.css";
import Header from "./components/Heading";
import EmojiSection from "./components/EmojiSection";
import AnswerSection from "./components/AnswerSection";

export default function App() {
  return (
    <div className="App">
      <Header />
      <EmojiSection />
    </div>
  );
}
