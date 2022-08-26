import React, { useState, useEffect, useRef } from "react";
import { db } from "../lib/init-firebase";
import exportFromJSON from "export-from-json";
import { collection, getDocs } from "firebase/firestore";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { jsonEval } from "@firebase/util";
import "./questions.css";
import { getCollectionData } from "../services/ReadFSCollection";
export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestionData, setFilteredQuestionData] = useState(questions);
  const sectionRef = useRef();
  const fileName = "download";
  const exportType = exportFromJSON.types.xls;
  const dataToExport = [];
  useEffect(() => {
    getQuestions();
  }, []);
  const downloadQuestions = (e) => {
    const filteredQuestions = questions.filter((question) => {
      return question.id === e.target.value;
    });

    filteredQuestions.forEach((data) => {
      data["data"]["data"].forEach((d) => {
        let temp_ = {};
        temp_["section"] = e.target.value;
        temp_["question"] = d["question"];
        temp_["question_id"] = d["question_id"];
        temp_["option"] = null;
        temp_["option_id"] = null;
        if (d["options"]) {
          d["options"].forEach((option) => {
            temp_["option"] = option["option"];
            temp_["option_id"] = option["option_id"];
          });
        }
        dataToExport.push(temp_);
      });
    });
    ExportToExcel();
  };
  const ExportToExcel = () => {
    exportFromJSON({
      data: dataToExport,
      fileName: fileName,
      exportType: exportType,
    });
  };
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

        setFilteredQuestionData(
          questions.filter(({ id }) => id === "section1")
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filterQuestionData = () => {
    console.log(sectionRef.current.value);
    console.log(questions);
    let selectedSection = sectionRef.current.value;
    if (!selectedSection) {
      selectedSection = "section1";
    }

    const filterData = questions.filter(({ id }) => id === selectedSection);
    console.log("hello");
    console.log(filterData);
    setFilteredQuestionData(filterData);
  };

  return (
    <div>
      {/* <h5>Questions</h5>
      <div className="d-flex justify-content-end mb-3 gap-1">
        <Button variant="outline-primary" type="button">
          Download Section 1
        </Button>
        <Button variant="outline-primary" type="button">
          Download Section 2
        </Button>
        <Button variant="outline-primary" type="button" value="section3">
          Download Section 3
        </Button>
        <Button
          variant="outline-primary"
          type="button"
          value="section4"
          onClick={downloadQuestions}
        >
          Download Section 4
        </Button>
      </div> */}
      <div className="d-flex justify-content-end mb-3 gap-1">
        <Form.Group className="">
          <Form.Select
            aria-label="Default select example"
            ref={sectionRef}
            onChange={filterQuestionData}
          >
            <option value="section1">Section 1</option>
            <option value="section2">Section 2.1</option>
            <option value="section3">Section 2.2</option>
            <option value="section4">Section 3</option>
            <option value="section5">Section 4</option>
            <option value="section6">Section 5</option>
          </Form.Select>
        </Form.Group>
      </div>

      {filteredQuestionData.map((u) => (
        <div key={u.id}>
          <h4>Questions for selected section</h4>
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
