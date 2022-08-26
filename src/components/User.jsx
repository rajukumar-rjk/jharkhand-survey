import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/init-firebase";
export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    const userCollectionRef = collection(db, "users");
    getDocs(userCollectionRef)
      .then((response) => {
        const userList = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        console.log(userList);
        setUsers(userList);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <>
      {/* <div className="d-flex justify-content-end gap-2">
        <Button
          variant="outline-primary"
          value="section1"
          type="button"
          className="text-center"
          // disabled={showButton}
          // onClick={downloadData}
        >
          Download User Data
        </Button>
      </div> */}
      <div>
        <h4>List of users</h4>
        {/* <ul>
        {users.map((u) => (
          <li key={u.data.user_id}>
            user: {u.data.user_id}, password: {u.data.user_id}
          </li>
        ))}
      </ul> */}
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>State</th>
              <th>District</th>
              <th>Block</th>
              <th>Village</th>
              <th>User</th>
              <th>Password</th>
              <th>Role</th>
              <th>activated</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.data.state}</td>
                <td>{u.data.district}</td>
                <td>{u.data.block}</td>
                <td>{u.data.village}</td>
                <td>{u.data.user_id}</td>
                <td>{u.data.pass}</td>
                <td>{u.data.role}</td>
                <td>{u.data.is_active}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
