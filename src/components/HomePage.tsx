import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";



export default function Home() {
        
    const navigate = useNavigate();

    //Navigating to username 
    const [value, setValue] = useState(),
        onInput = ({target:{value}}) => setValue(value),
         onFormSubmit = e => {
        e.preventDefault()
        setValue(value)
        navigate('/'+ value);
  }
    return (
        <div className="home">
            <div className='home-title'>
                <span>
                    Enter your GitHub name to get all the repositories
                </span>
                <Form className="d-flex" onSubmit={onFormSubmit}>
              <Form.Control
                type="search"
                placeholder="Search by username"
                className="me-2"
                aria-label="Search"
                onChange={onInput}
                value={value}
              />
              <Button variant="outline-success" type="submit">Search</Button>
              </Form>
            </div>     
         </div>
        
    )
}