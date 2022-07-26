import React, { useEffect, useState, useRef } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/init-firebase";
export default function Tracking() {
  const [allHHData, setAllHHData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [totalHH, setTotalHH] = useState(0);
  const [userIds, setUserIds] = useState([]);
  const userRef = useRef();
  const dateRef = useRef();
  const phoneRef = useRef();
  const [totalCount, setTotalCount] = useState({
    totalHH: 0,
    totalSection1: 0,
    totalSection2: 0,
    totalSection3: 0,
    totalSection4: 0,
    totalSection5: 0,
    totalSection6: 0,
  });
  useEffect(() => {
    getEnteredHH();
  }, []);

  useEffect(() => {
    getSummary();
    console.log(filteredData);
  }, [filteredData]);

  const getEnteredHH = () => {
    const hhRef = collection(db, "section1");
    getDocs(hhRef)
      .then((res) => {
        let enteredHHDataList = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setAllHHData(enteredHHDataList);
        setFilteredData(enteredHHDataList);
        // list of unique user-ids
        let user_ids = [];
        enteredHHDataList.map((d) => {
          user_ids.push(d.data.user_id);
        });
        setUserIds([...new Set(user_ids)]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filterData = () => {
    // filter data by date
    if (dateRef.current.value) {
      const filterDateData = allHHData.filter(function (d) {
        console.log("date yes");
        return d.data.date === dateRef.current.value;
      });
      setFilteredData(filterDateData);

      // filter data by user
    } else if (userRef.current.value && userRef.current.value !== "All User") {
      const filterDateData = allHHData.filter(function (d) {
        console.log("user yes");
        return d.data.user_id === userRef.current.value;
      });
      setFilteredData(filterDateData);

      // filter data by phone
    } else if (phoneRef.current.value) {
      const filterDateData = allHHData.filter(function (d) {
        return d.data.mobile_no === phoneRef.current.value;
      });
      setFilteredData(filterDateData);
    } else {
      setFilteredData(allHHData);
    }
  };

  const getSummary = () => {
    // counting total entries
    let [count_s1, count_s2, count_s3, count_s4, count_s5, count_s6] = [
      0, 0, 0, 0, 0, 0,
    ];

    filteredData.map((d) => {
      if (d["data"]["section3"] === true) {
        count_s3 += 1;
      }
      if (d["data"]["section1"] === true) {
        count_s1 += 1;
      }
      if (d["data"]["section2"] === true) {
        count_s2 += 1;
      }
      if (d["data"]["section6"] === true) {
        count_s6 += 1;
      }
      if (d["data"]["section4"] === true) {
        count_s4 += 1;
      }
      if (d["data"]["section5"] === true) {
        count_s5 += 1;
      }
    });

    setTotalCount({
      totalHH: filteredData.length,
      totalSection1: count_s1,
      totalSection2: count_s2,
      totalSection3: count_s3,
      totalSection4: count_s4,
      totalSection5: count_s5,
      totalSection6: count_s6,
    });
  };
  return (
    <>
      <div className="d-flex justify-content-end mb-3 gap-1">
        <Form.Group className="">
          {/* <Form.Label>Select User</Form.Label> */}
          <Form.Select aria-label="Default select example" ref={userRef}>
            <option>All User</option>
            {userIds.map((e, i) => (
              <option key={i} value={e}>
                {e}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="">
          {/* <Form.Label>Select User</Form.Label> */}
          <Form.Control type="date" ref={dateRef}></Form.Control>
        </Form.Group>
        <Form.Group className="">
          {/* <Form.Label>Select User</Form.Label> */}
          <Form.Control
            type="number"
            ref={phoneRef}
            placeholder="Phone no"
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="button" onClick={filterData}>
          Filter
        </Button>
      </div>
      <h6>Summary</h6>
      <div className="d-flex justify-content-start gap-1 mb-3">
        <div className="shadow-sm p-3 mb-2 bg-body rounded">
          Total HH : {totalCount.totalHH}
        </div>
        <div className="shadow-sm p-3 mb-2 bg-body rounded">
          Total Section 1 : {totalCount.totalSection1}
        </div>
        <div className="shadow-sm p-3 mb-2 bg-body rounded">
          Total Section 2 : {totalCount.totalSection2}
        </div>
        <div className="shadow-sm p-3 mb-2 bg-body rounded">
          Total Section 3 : {totalCount.totalSection3}
        </div>
        <div className="shadow-sm p-3 mb-2 bg-body rounded">
          Total Section 4 : {totalCount.totalSection4}
        </div>
        <div className="shadow-sm p-3 mb-2 bg-body rounded">
          Total Section 5 : {totalCount.totalSection5}
        </div>
        <div className="shadow-sm p-3 mb-2 bg-body rounded">
          Total Section 6 : {totalCount.totalSection6}
        </div>
      </div>

      <h6>List of entered data</h6>
      <div className="d-flex justify-content-start">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>HH No</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Respondent Name</th>
              <th>Section 1</th>
              <th>Section 2</th>
              <th>Section 3</th>
              <th>Section 4</th>
              <th>Section 5</th>
              <th>Section 6</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((u) => (
              <tr key={u.id}>
                <td>{u.data.household_no}</td>
                <td>{u.data.mobile_no}</td>
                <td>{u.data.date}</td>
                <td>{u.data.respondent_name}</td>
                <td>{u.data.section1?.toString()}</td>
                <td>{u.data.section2?.toString()}</td>
                <td>{u.data.section3?.toString()}</td>
                <td>{u.data.section4?.toString()}</td>
                <td>{u.data.section5?.toString()}</td>
                <td>{u.data.section6?.toString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
