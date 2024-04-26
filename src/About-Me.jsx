import "../src/css/About.css";
import { Scroll } from "./Utils/Scroll";
import { useState, useContext } from "react";
import { AnswerBoxContext } from "./AnswerBoxContext";
import AnswerBox from "./Utils/AnswerDialogBox";

function AboutMe() {
  const { toggleAnswerBox, answerBoxOpen } = useContext(AnswerBoxContext);

  const question = `Which of follwoing is not associated with  me:
    Empthatic ,Analytical ,Introverted ,Spontaneous`;
  const [showQuetion, setShowQuestion] = useState({
    show: false,
    question,
    count: 0,
  });
  const increaseCount = () => {
    if (answerBoxOpen.findMode) {
      if (showQuetion.count === 6) {
        setShowQuestion((prevState) => ({
          ...prevState,
          count: 0,
          show: false,
        }));
      }
      setShowQuestion((prevState) => ({
        ...prevState,
        count: prevState.count + 1,
      }));
    }
  };
  return (
    <div className="aboutMe-conatiner page">
      <div className="white-block">ABOUT ME</div>
      <div className="about-me-avater"></div>

      <div className="about-marquee">
        <Scroll
          arrayItems={[
            "Introspective",
            "",
            "Perfectionist",
            "",
            "Impartial",
            "",
          ]}
        />
      </div>

      <div className="about-info-container" onClick={increaseCount}>
        <div className="about-me-info">
          {showQuetion.count != 4 && showQuetion.count != 5 ? (
            <>
              "As a co-founder at VenaAI, I am not just a participant, but a
              catalyst in our journey towards becoming a leading AI consultancy.
              My role is not confined to a title, but expands to actively
              shaping our mission of delivering unparalleled AI solutions. Our
              expertise is not limited but vast, covering realms from Data
              Analytics to APIs, from Computer Vision to Natural Language
              Processing, and even the fascinating world of Generative AI."
            </>
          ) : (
            <>
              {question}
              <p
                className="answer-nevigator"
                onClick={() => toggleAnswerBox(6)}
              >
                Answer
              </p>
            </>
          )}
        </div>
      </div>
      <AnswerBox id={6} question={"Choose one"} />
    </div>
  );
}

export default AboutMe;
