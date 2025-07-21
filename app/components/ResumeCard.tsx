import React from 'react'
import {Link} from 'react-router'

const ResumeCard = ({resume}:{resume:Resume} ) => {
    return (
        <Link to={`/resume/${resume.id}`} className="resume-card animate-in fade-in
         transform transition-transform duration-3000">
           
        </Link>
    )
}
export default ResumeCard
