import React from 'react';
import {useLoaderData, useParams} from "react-router-dom";
import Error from "./Error.jsx";

function JobDetails() {

    const jobDetails = useLoaderData()
    // const {id} = useParams()

    return (
        <div className={"jobDetails"}>
            {/*<h1>ID is: {id}</h1>*/}
            <p><b>Job Title: </b>{jobDetails.title}</p>
            <p><b>Salary: </b>{jobDetails.salary}</p>
            <p><b>Job Location: </b>{jobDetails.location}</p>
            <p><b>Description: </b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum modi repellendus
                soluta tenetur? Ab debitis expedita, incidunt maiores natus placeat quaerat voluptate? Ad blanditiis
                consequuntur ipsa iste vitae voluptatibus.</p>
            <button>Apply Now</button>
        </div>
    );
}

export default JobDetails;

export const jobDetailsLoader = async ({params}) => {
    const {id} = params
    const res = await fetch("http://localhost:5000/jobs/" + id)
    if (!res.ok) {
        throw Error("Could not found job details.")
    }
    return res.json()
}