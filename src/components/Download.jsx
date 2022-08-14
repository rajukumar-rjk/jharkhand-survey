import React, { useEffect, useState, useRef } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import exportFromJSON from "export-from-json";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  where,
  query,
} from "firebase/firestore";
import { db } from "../lib/init-firebase";
import { async } from "@firebase/util";

export default function Download() {
  const HHIdRef = useRef();
  const sectionNameRef = useRef();
  const [docData, setDocData] = useState([]);
  const [downloadRowData, setDownloadRowData] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const dataToExport = [];
  const exportType = exportFromJSON.types.xls;
  useEffect(() => {
    // const hhDataForDoc = getDocument("section1", "1jWNh8deVa9GHOA7nL8B");
    // hhDataForDoc.then((res) => {
    //   console.log(res);
    // });
  }, []);

  async function getSectionOneData() {
    const snap = await getDoc(
      doc(db, sectionNameRef.current.value, HHIdRef.current.value)
    );

    if (snap.exists()) {
      setDocData(snap.data().data);
      console.log(snap.data().data);
      // return snap.data();
    } else {
      return Promise.reject(
        Error(
          `No such document: ${sectionNameRef.current.value}.${HHIdRef.current.value}`
        )
      );
    }
  }

  const getDocumentData = async () => {
    let selectedSection = sectionNameRef.current.value;
    let selectedHHId = HHIdRef.current.value;
    if (selectedSection === "section1") {
      getSectionOneData();
    } else {
      const docRef = doc(db, "section1", selectedHHId);

      const q = query(
        collection(db, selectedSection),
        where("doc_id", "==", docRef)
      );

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        setDocData(doc.data().data);
        console.log(doc.id, " => ", doc.data().data);
      });
    }
  };
  const getData = () => {
    const ref = collection(db, sectionNameRef.current.value);
    getDocs(ref)
      .then((res) => {
        let data = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        console.log(data);
        setDownloadRowData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const downloadData = (e) => {
    const ref = collection(db, e.target.value);
    setShowButton(true);
    console.log(e.target.value);
    let fileName =
      e.target.value === "section2"
        ? "section2_1"
        : e.target.value === "section3"
        ? "section2_2"
        : e.target.value === "section4"
        ? "section3"
        : e.target.value === "section5"
        ? "section4"
        : "section1";
    getDocs(ref)
      .then((res) => {
        let data = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        //console.log(data);
        setDownloadRowData(data);
      })
      .catch((error) => {
        console.log(error);
      });

    if (e.target.value === "section1") {
      downloadRowData.forEach((data) => {
        if (data["data"]["data"]) {
          data["data"]["data"].forEach((d) => {
            let temp_ = {};
            temp_["section"] = e.target.value;
            temp_["id"] = data.id;
            temp_["state"] = data["data"]["state"];
            temp_["district"] = data["data"]["district"];
            temp_["block"] = data["data"]["block"];
            temp_["village"] = data["data"]["village"];
            temp_["user_id"] = data["data"]["user_id"];
            temp_["latitude"] = data["data"]["latitude"];
            temp_["longitude"] = data["data"]["longitude"];
            temp_["mobile_no"] = data["data"]["mobile_no"];
            temp_["respondent_name"] = data["data"]["respondent_name"];
            temp_["full_address"] = data["data"]["full_address"];
            temp_["total_child"] = data["data"]["total_child"];
            temp_["section2_1"] = data["data"]["section2"];
            temp_["section2_2"] = data["data"]["section3"];
            temp_["section3"] = data["data"]["section3"];
            temp_["section4"] = data["data"]["section4"];
            temp_["section5"] = data["data"]["section5"];
            temp_["mobile_no"] = data["data"]["mobile_no"];

            temp_["child_id"] = d["child_id"];
            temp_["question_id"] = d["question_id"];
            temp_["question"] = d["question_text"];
            temp_["value_id"] = d["value_id"];
            temp_["value"] = d["option_text"];
            temp_["value_text"] = d["value"];

            // if (d["options"]) {
            //   d["options"].forEach((option) => {
            //     temp_["option"] = option["option"];
            //     temp_["option_id"] = option["option_id"];
            //   });
            // }

            dataToExport.push(temp_);
          });
        }
      });
    } else {
      downloadRowData.forEach((data) => {
        if (data["data"]["data"]) {
          data["data"]["data"].forEach((d) => {
            let temp_ = {};
            temp_["section"] = e.target.value;
            temp_["id"] = data.id;
            temp_["hh_id"] = data["data"]["doc_id"].id;
            temp_["state"] = data["data"]["state"];
            temp_["district"] = data["data"]["district"];
            temp_["block"] = data["data"]["block"];
            temp_["village"] = data["data"]["village"];
            temp_["user_id"] = data["data"]["user_id"];
            temp_["date"] = data["data"]["date"];
            temp_["household_no"] = data["data"]["household_no"];
            temp_["mobile_no"] = data["data"]["mobile_no"];
            temp_["respondent_name"] = data["data"]["respondent_name"];
            // temp_["total_child"] = data["data"]["total_child"];
            // temp_["section2_1"] = data["data"]["section2"];
            // temp_["section2_2"] = data["data"]["section3"];
            // temp_["section3"] = data["data"]["section3"];
            // temp_["section4"] = data["data"]["section4"];
            // temp_["section5"] = data["data"]["section5"];
            // temp_["full_address"] = data["data"]["full_address"];

            // temp_["child_id"] = d["child_id"];
            // temp_["child_id"] = d["child_id"];
            temp_["question_id"] = d["question_id"];
            temp_["question"] = d["question_text"];
            temp_["value_id"] = d["value_id"];
            temp_["value"] = d["option_text"];
            temp_["value_text"] = d["value"]?.toString();
            // if (d["options"]) {
            //   d["options"].forEach((option) => {
            //     temp_["option"] = option["option"];
            //     temp_["option_id"] = option["option_id"];
            //   });
            // }

            dataToExport.push(temp_);
          });
        }
      });
    }

    ExportToExcel(fileName);
    setShowButton(false);
  };
  const ExportToExcel = (fileName) => {
    exportFromJSON({
      data: dataToExport,
      fileName: fileName,
      exportType: exportType,
    });
  };

  return (
    <>
      <div>
        <h5>Download data</h5>
        <div className="d-flex justify-content-start mb-3 gap-1">
          <Button
            variant="outline-primary"
            value="section1"
            type="button"
            disabled={showButton}
            onClick={downloadData}
          >
            Download Section 1
          </Button>
          <Button
            variant="outline-primary"
            value="section2"
            type="button"
            disabled={showButton}
            onClick={downloadData}
          >
            Download Section 2.1
          </Button>
          <Button
            variant="outline-primary"
            value="section3"
            type="button"
            disabled={showButton}
            onClick={downloadData}
          >
            Download Section 2.2
          </Button>
          <Button
            variant="outline-primary"
            value="section4"
            type="button"
            disabled={showButton}
            onClick={downloadData}
          >
            Download Section 3
          </Button>
          <Button
            variant="outline-primary"
            value="section5"
            type="button"
            disabled={showButton}
            onClick={downloadData}
          >
            Download Section 4
          </Button>
          <Button
            variant="outline-primary"
            value="section6"
            type="button"
            disabled={showButton}
            onClick={downloadData}
          >
            Download Section 5
          </Button>
        </div>
      </div>
      <div>
        <hr></hr>
        <div className="d-flex justify-content-end mb-3 gap-1">
          <Form.Group className="">
            {/* <Form.Label>Select User</Form.Label> */}
            <Form.Control
              type="text"
              ref={HHIdRef}
              placeholder="Household ID"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="">
            {/* <Form.Label>Select User</Form.Label> */}
            <Form.Select ref={sectionNameRef}>
              <option value="section1">Section1</option>
              <option value="section2">Section2.1</option>
              <option value="section3">Section2.2</option>
              <option value="section4">Section3</option>
              <option value="section5">Section4</option>
              <option value="section6">Section5</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="button" onClick={getDocumentData}>
            View data
          </Button>
        </div>
      </div>

      {/* <div>
        <pre>
          <code>{JSON.stringify(docData)}</code>
        </pre>
      </div> */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Question Id</th>
            <th>Question Name</th>
            <th>Option Id</th>
            <th>Option</th>
            <th>Option text</th>
          </tr>
        </thead>
        <tbody>
          {docData.map((element, index) => (
            <tr key={index}>
              <td>{element.question_id}</td>
              <td>{element.question_text}</td>
              <td>{element.value_id}</td>
              <td>{element.option_text}</td>
              <td>{element.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* {docData.map((element, index) => (
        <div key={index}>
          <h5>{element.question_text}</h5>
          <p>{element.value_id !== "" ? element.option_text : element.value}</p>
        </div>
      ))} */}
    </>
  );
}
