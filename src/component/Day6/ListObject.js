import React from "react";

export default function ListObject()
{
    const college=[{id:1,stuName:"sachin",age:26},
                    {id:2,stuName:"surya",age:30},
                     {id:3,stuName:"panvith",age:29},]

    const display=college.map((col)=><li key={col.id}>{col.stuName}{col.age}</li>)
    return(
        <div style={{backgroundColor:"blue"}}>
            <h1>List of Students</h1>
            {display}
        </div>
    )
}
