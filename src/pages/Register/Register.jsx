import React, { useState } from 'react'
import "./Register.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isPoet, setIsPoet] = useState();

    const navigate = useNavigate();


    const handleChange = (e) => {
        const value = e.target.value
        if (value === "no") {
            setIsPoet(value);
        } else {
            setIsPoet(value);
        }
    }


    const SubmitForm = (e) => {
        e.preventDefault();
        
        const user = { name, email, username, password, isPoet };

        if (name && email && username && password && isPoet) {
            axios.post("https://poetry-oweg.onrender.com/api/auth/register", user)
            .then(alert(`Dear ${username}, You are welcome to Poetry community`));
            navigate("/login")
        } else {
            alert("Invalid input")
        }
    }


  return (
    <div className='register'>
        <section className='form__area'>
            <aside>
                <h1 className='title'>POETRY PORTAL</h1>
                <p className='sub__title'>Bringing poetry to poetry lovers</p>
            </aside>
            <div>
                <h1 className='titleb'>REGISTER</h1>
            </div>
            <div className=''>
                <form onSubmit={SubmitForm}>
                    <div style={{ marginTop: 20 }}>
                        <input type="text" name="name" placeholder='Full Name' className="input" required onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <input type="text" name="email" placeholder='Email Address' className="input" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <input type="text" name="username" placeholder='User Name/ Pen Name' className="input" required onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <input type="text" name="password" placeholder='Password' className="input" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <select name="poet" required className="inputc" value={isPoet} onChange={handleChange}>
                            <option value={false}>Are you a Poet?</option>
                            <option className='opt' value="no">No</option>
                            <option className='opt' value="yes">Yes</option>
                        </select>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <input type="submit" className='inputb' value="Submit" />
                    </div>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Register
