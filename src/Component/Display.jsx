import React from 'react'

const Display = ({days,hours,minutes,seconds})=>{
    return(
        <div>
            <h1>SALES COUNTDOWN TIMER</h1>
            <h2>OFFER ENDS IN</h2>
            <table>
                <tbody>
                    <tr>
                        <th>{days}</th>&nbsp;&nbsp;
                        <th>{hours}</th>&nbsp;&nbsp;
                        <th>{minutes}</th>&nbsp;&nbsp;
                        <th>{seconds}</th>&nbsp;&nbsp;
                    </tr>
                    <td>DAYS</td>&nbsp;&nbsp;
                    <td>HOURS</td>&nbsp;&nbsp;
                    <td>Minutes</td>&nbsp;&nbsp;
                    <td>SECONDS</td>&nbsp;&nbsp;
                </tbody>
            </table>
        </div>
    )
}
  

export default Display