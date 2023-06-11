
import React, { useEffect, useState } from "react"
import "./App.css";
import Row  from "react-bootstrap/Row"
import DropdownButton from "react-bootstrap/esm/DropdownButton"
import Dropdown from 'react-bootstrap/Dropdown';

const WantToRead = () => {
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
    <div>
      <h1>Want To Read</h1>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems:"center" ,gap:"100px" , justifyContent:"center" }}>
        {users.slice(5, 8).map(user => (
          <div key={user.id} >
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
        ))}
      </div>

    </div>
  )
}

export default WantToRead;


