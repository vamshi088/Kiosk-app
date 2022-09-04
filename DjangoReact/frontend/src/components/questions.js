import React from "react";
import { useState } from "react";
import questionJson from "../asserts/questions.json";
import "../styles/questions.css";
import axios from "axios";

export default function Questions() {
  const [selected, setSelected] = useState(0);
  const [answered, setAnswered] = useState(0);
  console.log("questionJson", questionJson);
  var questionArray = [
    questionJson.questions[0].queID,
    questionJson.questions[0].queText,
    questionJson.questions[0].ratingType,
  ];
  console.log("questionJsonquestionJson", questionJson.questions[4].queID);
  console.log("questionArray", questionArray);

  const users = [
    questionJson.questions[0],
    questionJson.questions[1],
    questionJson.questions[2],
    questionJson.questions[3],
    questionJson.questions[4],
  ];
  const onNextClick = () => {
    setSelected((prev) => {
      console.log("prevprev", prev);
      console.log("questionJson.length - 1", users.length - 1);
      if (prev === users.length - 1) {
        return 4;
      } else {
        return prev + 1;
      }
    });
  };

  const onPrevClick = () => {
    setSelected((next) => {
      console.log("prevprev", next);
      console.log("questionJson.length - 1", users.length + 1);
      if (next === users.length + 1) {
        return 0;
      } else {
        return next - 1;
      }
    });
  };
  let answeredlist = []
  const handleChange = event => {
    console.log(event.target.value);
    console.log('answeredlist first',answeredlist);
    answeredlist.push(...event.target.value)
    console.log('answeredlist last',answeredlist);
  };
  var ratingValue = users[selected].ratingType;
  const createElements = () => {
    var elements = [];
    for (var i = 0; i < ratingValue; i++) {
      elements.push(
        <label>
          <input type="radio" id={users[selected].queID}
          name="choose"
          value={i + 1} onChange={handleChange}   />
          <span>{i + 1}</span>
        </label>
      );
    }
    return elements;
  };

  
  const fetchItems = async (e) => {    
    try {
      let response = await axios
        .post("/update",{answered});        
      return response.data
    }
    catch (error) {
      return error.message
    }
  
  };
  return (
    <div>
      <div>
        <h2>Customer Survey</h2>
        {console.log("usersusers", users)}
        <div className="currentque">{users[selected].attemptedQue}</div>
        <h3 className="queText">{users[selected].queText}</h3>

        <div className="radiobuttons">{createElements()}</div>
        {users[selected].ratingType === "TextBox" ? (
          <div>
            <textarea rows="4" cols="50" />
          </div>
        ) : (
          ""
        )}
        <div className="navbuttons">
          {users[selected].queID === 1 ? (
            ""
          ) : (
            <button type="button" onClick={onPrevClick} className="btns">
              Prev
            </button>
          )}
          {users[selected].queID === 5 ? (
            <button type="button" onClick={onNextClick}>
              Submit
            </button>
          ) : (
            <button type="button" onClick={onNextClick}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
