
import React, { useEffect, useState } from "react"
import DropdownButton from "react-bootstrap/esm/DropdownButton"
import Dropdown from 'react-bootstrap/Dropdown';
import Row  from "react-bootstrap/Row"
import "./App.css";

const Read = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos")
    const data = await response.json()
    // console.log(data)
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="d-flex justify-content-center">
        <h1>Read</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {users.slice(13,15).map(user => (
            <div key={user.id}>
              <div>
            <img key={user.id} src={user.url} width="100px" height="100px" />
            <h5>Book Name: {user.title.slice(0,30)}</h5>
            <DropdownButton className="dropdown-wrapper" id="dropdown-basic-button" title="Dropdown button">
            <Row>
              <Dropdown.Item href="#/action-1">Currently Reading</Dropdown.Item>
              </Row>
              <Row>
              <Dropdown.Item href="#/action-2">Want to Read</Dropdown.Item>
              </Row>
              <Row>
              <Dropdown.Item href="#/action-3">Read</Dropdown.Item>
              </Row>
            </DropdownButton>
            <br></br>

            </div>
          </div>
            
          ))}
        </div>
      
    </div>
  )
}

export default Read;


