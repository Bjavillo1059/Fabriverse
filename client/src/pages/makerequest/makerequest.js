import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Submission = (props) => {
    const [state, setState] = useState({
        Name: ''
    })

    const changeHandler = e => {
        this.setState({ Name: e.target.value });
    }

    const onCreateName = () => {

    }
    return (
        <div>
            <h2> Make Request Page </h2>
            <form>
                    <label> Full Name : </label> <input type="text" name="Name"
                        value={state.Name} onChange={changeHandler}></input>
                    <label> Requested Service : </label> <input type="text" name="RequestedService"
                        value={state.Name} onChange={changeHandler}></input>
                    <button type="button" name="Submit" > Submit </button>
            </form>
        </div>
    )
}
export default Submission;