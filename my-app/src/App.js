import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  // const [differences, setDifferences] = useState("");

  const submitButtonRef = useRef(null);

  const onChange = (event) => {
    setText1(event.target.value);

    setText1((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onChange2 = (event2) => {
    setText2(event2.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submitButtonRef.current.focus();
    console.log(text1);
    console.log(text2);

    const punctuationless1 = text1
      .replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g, "")
      .toLowerCase();
    const finalString1 = punctuationless1.replace(/\s{2,}/g, " ");
    setValue1(finalString1);

    const punctuationless2 = text2
      .replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g, "")
      .toLowerCase();
    const finalString2 = punctuationless2.replace(/\s{2,}/g, " ");
    setValue2(finalString2);
  };

  const isValid = Object.keys(value1).length === 0;

  return (
    <div className="page" contenteditable="true">
      <form onSubmit={onSubmit} className="input__group">
        <input
          className="input"
          value={text1}
          name="text"
          type="text"
          label="text"
          placeholder="текст для обработки"
          onChange={onChange}
          style={{ width: `${text1.length * 7}px`, minWidth: "500px" }}
        />
        <input
          className="input"
          value={value1}
          name="text"
          type="text"
          label="text"
          placeholder="текст после обработки"
          style={{ width: `${text1.length * 7}px`, minWidth: "500px" }}
        />
        <input
          className="input"
          value={text2}
          name="text"
          type="text"
          label="text"
          placeholder="текст для обработки2"
          onChange={onChange2}
          style={{ width: `${text2.length * 7}px`, minWidth: "500px" }}
        />
        <input
          className="input"
          value={value2}
          name="text"
          type="text"
          label="text"
          placeholder="текст после обработки2"
          style={{ width: `${text2.length * 7}px`, minWidth: "500px" }}
        />
        <button
          className="btn"
          ref={submitButtonRef}
          type="submit"
          disabled={!isValid}
        >
          {"Преобразовать текст"}
        </button>
      </form>
    </div>
  );
}

export default App;
