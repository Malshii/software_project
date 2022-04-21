import React from "react";

export default function Table(){
    const mystyle={
        background: 'linear-gradient(to right, #0093AB, #9dc6e0)'
    }

    return(  
        <div>
        <div className="tableH" style={mystyle}>
            <h4>Appointments</h4>
        </div> 
          <table>
            <tr>
              <th>Doctor Name</th>
              <th>Income</th>
              <th>Users</th>
              <th>Decision rate</th>
            </tr>
            <tr>
              <td>Gamage</td>
              <td>4,000</td>
              <td>34</td>
              <td>46,53%</td>
            </tr>
            <tr>
              <td>Silva</td>
              <td>3,985</td>
              <td>31</td>
              <td>46,53%</td>
            </tr>
            <tr>
              <td>Mohomad</td>
              <td>3,513</td>
              <td>29</td>
              <td>36,49%</td>
            </tr>
            <tr>
              <td>Atapattu</td>
              <td>5,050</td>
              <td>47</td>
              <td>50,87%</td>
            </tr>
            <tr>
              <td>Yohan Gamage</td>
              <td>1,795</td>
              <td>19</td>
              <td>46,53%</td>
            </tr>            
          </table>
        </div>          
    );
}