import React from 'react';
import NavBar from './NavBar';

// Importing React Router components for navigation
import { Link } from "react-router-dom";

function LoanPage() {
 return (
 <div>
         <NavBar />
   <ul>
             <li><a href="/PersonalDetails">Person details</a></li>
             <li><a href="/PropertyDetails">Property Details</a></li>
             <li><a href="/Identity">Identity</a></li>
             <li><a href="/CreditCard">CreditCard</a></li>
             <li><a href="/Assets">Assets</a></li>
             <li><a href="/Income">Income</a></li>
             <li><a href="/Adress">Adress</a></li>
</ul>     





 <h2>Apply for a Loan</h2>
 <p>Here you can apply for a loan. Please fill out the application form below.</p>
 {/* Add loan application form here */}
 <div className="sections">
 {/* Using Link components to redirect to other components */}
 {/* Using "to" prop to specify the path */}
 {/* Using "className" prop to add some styling */}
 <Link to="loan/personal-details" className="section">Personal Details</Link>
 <Link to="/PropertyDetails" className="section">Property Details</Link>
 <Link to="/identity" className="section">Identity</Link>
 <Link to="/CreditCard" className="section">Credit Card</Link>
 <Link to="/assets" className="section">Assets</Link>
 <Link to="/income" className="section">Income</Link>
 <Link to="/address" className="section">Address</Link>
 
 </div>
 </div>
 );
};
export default LoanPage;
