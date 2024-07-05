import React, { useState } from 'react'
import "./Login.css"
import { login } from '../../redux/apiCalls';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { isFetching } = useSelector((state) => state.user);

    const SubmitForm = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    
    }

  return (
    <div className='Login'>
        <section className='form__area'>
            <aside>
                <h1 className='title'>POETRY PORTAL</h1>
                <p className='sub__title'>Bringing poetry to poetry lovers</p>
            </aside>
            <div>
                <h1 className='titleb'>Login</h1>
            </div>
            <div className=''>
                <form>
                    <div style={{ marginTop: 20 }}>
                        <input type="text" name="username" placeholder='User Name/ Pen Name' className="input" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <input type="text" name="password" placeholder='Password' className="input" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <input type="submit" className='inputb' value="Login" onClick={SubmitForm} disabled={isFetching} />
                    </div>
                    {/* {error && <h1></h1>} */}
                </form>
            </div>
        </section>
    </div>
  )
}

export default Login
