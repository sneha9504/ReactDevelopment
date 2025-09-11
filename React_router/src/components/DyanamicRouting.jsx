import React from 'react'

const DyanamicRouting = () => {
    const params = useParams();
    const { id } = params;
    const data = {
        1: "Data for ID 1",
        2: "Data for ID 2",
        3: "Data for ID 3",
        
        
    };

  return (
    <div>
        <h2>Dynamic Routing Example</h2>
        <p>{data[id] || "No data found for this ID"}</p>
        <p>Current ID: {id}</p> 
        <p>Use the URL to navigate to different dynamic routes.</p>
     
        

    </div>     

  )
}

export default DyanamicRouting