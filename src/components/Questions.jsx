import React, { useState, useEffect } from "react";
import { db } from "../lib/init-firebase";
import { collection, getDocs } from "firebase/firestore";
import { jsonEval } from "@firebase/util";
import "./questions.css";
import { getCollectionData } from "../services/ReadFSCollection";
export default function Questions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = () => {
    const questionRef = collection(db, "questions");
    getDocs(questionRef)
      .then((res) => {
        let questionDocsData = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        console.log(questionDocsData);
        setQuestions(questionDocsData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Questions</h2>
      {questions.map((u) => (
        <div key={u.id}>
          <h4>{u.id}</h4>
          <div>
            <pre>
              <code>{JSON.stringify(u.data.data)}</code>
            </pre>
          </div>
          {/* {u["data"]["data"].map((q, i) => (
            <ul key={i}>
              <strong>{q.question}</strong>

              {q["options"].map((o) => (
                <li>{o.option}</li>
              ))}
            </ul>
          ))} */}
        </div>
      ))}
    </div>
  );
}
