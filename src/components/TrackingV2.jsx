import React, { useReducer, useEffect, useState, useRef } from "react";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { db } from "../lib/init-firebase";
import sectionOneDataReducer from "../Reducers/sectionOneDataReducer";
export default function TrackingV2() {
  const [hhData, dispatch] = useReducer(sectionOneDataReducer, {
    userList: [],
    districtList: [],
    hhLevelData: [],
    filteredHHLevelData: [],
    districtData: [],
    villageList: [],
    filteredVillageList: [],
    districtLevelData: [],
    filteredDistrictLevelData: [],
  });
  const [reportView, setReportView] = useState(1);
  const userRef = useRef();
  const dateRef = useRef();
  const districtRef = useRef("0");
  const villageRef = useRef("0");
  const reportViewRef = useRef();
  const loadDataOnDistrictChange = () => {
    const selectedDistrict = districtRef.current.value;

    villageRef.current.value =
      selectedDistrict === "0" ? "0" : villageRef.current.value;
    dispatch({
      type: "ON_DISTRICT_CHANGE",
      payload: {
        village_data: hhData.villageList,
        district_level_data: hhData.districtLevelData,
        hh_level_data: hhData.hhLevelData,
        district: selectedDistrict,
      },
    });
  };
  const loadDataOnVillageChange = () => {
    const selectedVillage = villageRef.current.value;
    const selectedDistrict = districtRef.current.value;
    dispatch({
      type: "ON_VILLAGE_CHANGE",
      payload: {
        district_level_data: hhData.districtLevelData,
        hh_level_data: hhData.hhLevelData,
        village: selectedVillage,
        district: selectedDistrict,
      },
    });
  };
  const changeReportView = () => {
    setReportView(reportViewRef.current.value);
  };

  const getEnteredHH = () => {
    const hhRef = collection(db, "section1");
    getDocs(hhRef)
      .then((res) => {
        let enteredHHDataList = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));

        dispatch({
          type: "ENTERED_HH_DATA",
          payload: enteredHHDataList,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getDataForDistrict = () => {
    dispatch({
      type: "DATA_FOR_DISTRICT",
      payload: hhData.hhLevelData,
    });
  };
  useEffect(() => {
    getEnteredHH();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-end mb-3 gap-1">
        <Form.Group className="">
          <Form.Select
            aria-label="Default select example"
            onChange={changeReportView}
            ref={reportViewRef}
          >
            <option value="1">Village level</option>
            <option value="2">HH level</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="">
          {/* <Form.Label>Select User</Form.Label> */}
          <Form.Select
            aria-label="Default select example"
            ref={districtRef}
            onChange={loadDataOnDistrictChange}
          >
            <option value="0">All District</option>
            {hhData.districtList.map((e, i) => (
              <option key={i} value={e}>
                {e}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="">
          {/* <Form.Label>Select User</Form.Label> */}
          <Form.Select
            aria-label="Default select example"
            onChange={loadDataOnVillageChange}
            value={villageRef.current.value}
            ref={villageRef}
          >
            <option value="0">All Village</option>
            {hhData.filteredVillageList.map((e, i) => (
              <option key={i} value={e["village"]}>
                {e["village"]}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        {/* <Form.Group className="">
          <Form.Control type="date" ref={dateRef}></Form.Control>
        </Form.Group> */}

        {/* <Button variant="primary" type="button">
          Filter
        </Button> */}
      </div>
      {reportView == 1 ? (
        <h6>Village wise entered data</h6>
      ) : (
        <h6>Household wise entered data</h6>
      )}

      <div
        className="d-flex justify-content-start"
        style={{ fontSize: "15px" }}
      >
        {reportView == 1 ? (
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>District</th>
                <th>Village</th>
                <th>Total Household</th>
                <th>Closed</th>
                <th>No response</th>
                <th>Surveyed HH</th>
                <th>Total child</th>
              </tr>
            </thead>
            <tbody>
              {hhData.filteredDistrictLevelData.map((u) => (
                <tr key={u.village}>
                  <td>{u.district}</td>
                  <td>{u.village}</td>
                  <td>{u.total_hh}</td>
                  <td>{u.closed_hh}</td>
                  <td>{u.no_response_hh}</td>
                  <td>{u.open_hh}</td>
                  <td>{u.total_child}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>District</th>
                <th>Village</th>
                <th>HH No</th>
                <th>Phone</th>
                {/* <th>Date</th> */}
                <th>Respondent Name</th>

                <th>Section 2</th>
                <th>Section 3</th>
                <th>Section 4</th>
                <th>Section 5</th>
                <th>Section 6</th>
              </tr>
            </thead>
            <tbody>
              {hhData.filteredHHLevelData.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.data.district}</td>
                  <td>{u.data.village}</td>
                  <td>{u.data.household_no}</td>
                  <td>{u.data.mobile_no}</td>
                  {/* <td>{u.data.date}</td> */}
                  <td>{u.data.respondent_name}</td>
                  <td>{u.data.section2?.toString()}</td>
                  <td>{u.data.section3?.toString()}</td>
                  <td>{u.data.section4?.toString()}</td>
                  <td>{u.data.section5?.toString()}</td>
                  <td>{u.data.section6?.toString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
}
