import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

function Questionnaire() {
  let [name, setName] = useState('');
  let [position, setPosition] = useState('');
  let [bio, setBio] = useState('');
  let [tags, setTags] = useState([]);
  let [birthDate, setBirth] = useState('');
  let [createdDate, setCreatedDate] = useState('');
  
  const handleSubmit= (e) => {
    const employeeData = {
      name: name,
      position: position,
      bio: bio,
      tags: tags,
      birthDate: birthDate,
      createdDate: createdDate,

    }
    axios.post(`http://localhost:5000/postCreation`, employeeData).then(
      (res) =>{
        if(res.data.status === 200){
          console.log('success')
        }
      }
    ).catch(err => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>
          Name:
        <input type ="text" name = "name" onChange = {(e) => setName(e.target.value)}></input>
        </label>

        <div></div>
        
        <label>
          Position:
        <input type ="text" name = "position" onChange = {(e) => setPosition(e.target.value)}></input>
        </label>

        <div></div>
        
        <label>
          Short Biography:
        <input type ="text" name = "bio" onChange = {(e) => setBio(e.target.value)}></input>
        </label>

        <div></div>
        
        <label>
          Tags:
        <input type ="text" name = "tags" onChange = {(e) => setTags(e.target.value.split(','))}></input>
        </label>

        <div></div>
        
        <label>
          Employment Date:
        <input type ="date" name = "createdDate" onChange = {(e) => setCreatedDate(e.target.value)}></input>
        </label>

        <div></div>
        
        <label>
          Employment Date:
        <input type ="date" name = "birthday" onChange = {(e) => setBirth(e.target.value)}></input>
        </label>

        <input type = 'submit'></input>
      </form>
  )
}

export default Questionnaire;