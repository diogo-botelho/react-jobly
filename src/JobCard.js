import "./JobCard.css";

/**Renders a card for a single job
 * 
 * Props:
 *  - job: {id, title, salary, equity, companyHandle, companyName}
 * 
 * State: 
 *  - None
 * 
 * {JobList, CompanyDetails} -> JobCard
 * */

function JobCard({ job }) {
    return (
        <div className="JobCard">
            <h4 className="JobCard-title">{job.title}</h4>
            <p className="JobCard-company">{job.companyName}</p>
            <p className="JobCard-salary">Salary: {job.salary}</p>
            <p className="JobCard-equity">Equity: {job.equity}</p>
        </div>
    )
}
//format salary and equity ...

export default JobCard;