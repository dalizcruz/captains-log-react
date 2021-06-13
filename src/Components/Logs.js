import { Link } from "react-router-dom";


const Logs = ({ logs }) => {
    console.log({logs})

    return(
        <div>
            
            <ul>
                {logs.map((log) => {
                    return <li>                      
                        {log.title}
                        <Link to={"/logs/map"} >ff</Link>
                    </li>
                })}
            </ul>
            {/* "MAP THROUGH LOGS, CREATE LIST AND LINK EACH LI TO LOGS/:INDEX" */}
        </div>
    )
}
export default Logs;