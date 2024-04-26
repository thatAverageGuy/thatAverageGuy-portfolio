import React from "react";
import { Slide } from "./Utils/Slide";
import data from "./Utils/Arrays/data";
import { useContext } from "react";
import { MobileContext } from "./Utils/Context";
import Puzzle from "./Utils/Puzzle";
import "../src/css/Style.css";
import "../src/css/Skills.css";
import { Scroll } from "./Utils/Scroll";
import { AnswerBoxContext } from "./AnswerBoxContext";

export default () => {
  const { answerBoxOpen } = useContext(AnswerBoxContext);

  let { isMobile } = useContext(MobileContext);
  return (
    <div className="skills-container page">
      <div className="white-block">SKILLS</div>
      {!isMobile && <div className="logo-block block-middle"></div>}
      <div className="image-container"></div>
      {!isMobile && (<div className="skill-info">
        <p>
          As a versatile ML Engineer, I wield the power of Python as my primary
          programming language. My journey in machine learning has been enriched
          by libraries like Scikit-learn, TensorFlow, Keras, PyTorch, and
          LangChain. In the realm of web development, Flask and FastAPI are my
          trusted companions. My curiosity for computer vision led me to master
          tools like OpenCV, Pillow, and YOLOv5. I paint data stories using
          Matplotlib, Seaborn, and Plotly, and analyze data with Pandas and
          NumPy. MongoDB and SQLite are my go-to databases. On the DevOps front,
          Docker and RabbitMQ streamline my workflow. MLflow, Prefect, and
          Transformer are my chosen ML tools. Lastly, my toolbox wouldn't be
          complete without VS Code, Sublime Text, PyCharm, Jupyter Notebook, and
          Postman.
        </p>
      </div>)}

      {answerBoxOpen.findMode && (
        <Puzzle
          id={3}
          question={"5 - 14 - 9 - 7 - 13 - 1 - 20 - 9 - 3 "}
          t={200}
          l={0}
        />
      )}
      {isMobile ? (
        <div className="skills-scroll">
          <Scroll arrayItems={data} isSvg={true} />
        </div>
      ) : (
        <Slide arrayItems={data} />
      )}

      {isMobile && (
        <div className="skills-quote">
          "Bringing - Delusion - into - Reality."
        </div>
      )}
    </div>
  );
};
