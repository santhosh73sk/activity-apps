import { useEffect, useState } from "react";
import "./Activity.css"
import { useSelector,useDispatch } from "react-redux";
function Activity()
{   
    var activityarray=useSelector((state)=>state)
    var dispatch=useDispatch()

    
    
    var dispatch = useDispatch()
    var [eactivity,seteactivity] = useState("")

    function handleChange(e)
    {
        seteactivity(e.target.value)
    }

    return(
        <div style={{marginTop:"30px"}} className="activity-container">
            <div className="activity-input-container">
            <h1 style={{fontSize:"3vw"}}>Manage Activities</h1>
            
            <input type="text" value={eactivity} onChange={handleChange} className="activity-input" placeholder="What are you plans?"></input>
            <button className="activity-add" onClick={()=>dispatch({type:"addActivity",activity:eactivity})}>Add</button>

            <div>

            </div>

            </div>
            <div className="activity-list-container">
                <h1>Todays Activity</h1>
                {activityarray.length==0?<p>You haven't added any activity yet</p>:""}
                {activityarray.map(function(item,index){
                    return (
                        <div key={index} className="activity-list-item">
                <p>{item.activity}</p> <p className="activity-delete" onClick={()=>dispatch({type:"deleteActivity",id:item.id})}>Delete Activity</p>
                </div>
                    )
                })}
                

            </div>
        </div>
    )
}

export default Activity