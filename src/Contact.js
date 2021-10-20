import React,{useState} from 'react'

const Contact = () => {
    const [data, setdata] = useState(
        {
            name: "",
            email: ""
          }
    );
    const inputHandler = (event) =>{ 
        const value = event.target.value;
        setdata({
          ...data,
          [event.target.name]: event.target.value
        });
     //console.log(data);
    }
    const formsubmit = (event)=>{
        // setdata({
        //     ...data,
        //     [event.target.name]: event.target.value
        //   });
      console.log(data);

    }
  
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="forn-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" name="name" onChange={inputHandler} />
                    </div>
                    <div className="forn-group">
                    <label for="name">Email</label>
                    <input type="email" className="form-control" name="email" onChange={inputHandler}/>
                    </div>
                    <div className="forn-group">
                    <button className="btn btn-primary" onClick={formsubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
