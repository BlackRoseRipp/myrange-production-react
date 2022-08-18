import React, { useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';
import classes from './OrganCard.module.css';

const OrganCard = (props) => {
    const [patientMax, setPatientMax] = useState()
    const [patientMin, setPatientMin] = useState()

    return (
        <div>
            <div className={classes.card}>
                <header className={classes.header}>
                    <p>{props.title}</p>
                </header>
                <div className={classes.content}>
                    <LineChart
                        width={500}
                        height={300}
                        data={props.data}
                        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='date' />
                        <YAxis domain={[Math.floor(parseInt(props.publicMin)*.7), Math.floor(parseInt(props.publicMax)*1.2)]}/>
                        <Tooltip />
                        <Legend />
                        <Line type='monotone' dataKey={props.testName} stroke='#8884d8'/>
                        <ReferenceLine y={props.publicMax} stroke='#0066FF' strokeDasharray='3 3' />
                        <ReferenceLine y={props.publicMin} stroke='#0066FF' strokeDasharray='3 3' />
                        <ReferenceLine y={props.patientMax} stroke='#3388FF' strokeDasharray='3 3' />
                        <ReferenceLine y={props.patientMin} stroke='#3388FF' strokeDasharray='3 3' />
                    </LineChart>
                </div>
            </div>
        </div>
    )
}

export default OrganCard