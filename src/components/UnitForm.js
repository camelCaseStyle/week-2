import { useState } from "react"

export default function UnitForm({addUnit}) {
    const [unitInfo, setUnitInfo] = useState({
        'code': '', 
        'title': '',
        'offering': ['S1']
    })
    const handleChange = (e) =>{
        setUnitInfo({...unitInfo, [e.target.name]: e.target.value} )
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        addUnit(unitInfo)
        setUnitInfo({
            'unitName': '', 
            'unitCode': '',
            'offering': ['S1']
        })
      };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Unit Form</h1>
                </div>
                <div>
                    <input type='text'
                        name="title"
                        placeholder="Unit Name"
                        value={unitInfo.title}
                        onChange = {handleChange}
                    >
                    </input>
                    <input type='text'
                        name="code"
                        placeholder="Unit Code"
                        value={unitInfo.code}
                        onChange = {handleChange}
                   
                    >
                    </input>
                    <button
                        type="submit"
                        value="Submit"
                    >Submit</button>
                </div>
            </form>
        </div>
    )
}