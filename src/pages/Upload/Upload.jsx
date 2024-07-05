import React, { useState } from 'react'
import "./Upload.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Upload = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [poet, setPoet] = useState("");
    const [poem, setPoem] = useState("");

    const SubmitForm = (e) => {
        e.preventDefault();
        
        const user = { title, poet, poem };

        if ( title && poet && poem ) {
            axios.post("https://poetry-oweg.onrender.com/api/poem/post-poem", user)
            .then(alert(`Upload successful`));
            navigate("/")
        } else {
            alert("Invalid input")
        }
    }

  return (
    <div className='Upload'>
        <section className='form__area'>
            <aside>
                <h1 className='title'>POETRY PORTAL</h1>
                <p className='sub__title'>Bringing poetry to poetry lovers</p>
            </aside>
            <div>
                <h1 className='titleb'>Upload Poem</h1>
            </div>
            <div className=''>
                <form onSubmit={SubmitForm}>
                    <div style={{ marginTop: 20 }}>
                        <input type="text" name="title" placeholder='Title of Poem' className="input" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <input type="text" name="poet" placeholder='Poet' className="input" onChange={(e) => setPoet(e.target.value)} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <textarea type="text" name="poem" placeholder='Poem' className="inputAddress" onChange={(e) => setPoem(e.target.value)} />
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

export default Upload
