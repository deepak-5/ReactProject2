import React from 'react';
import NavBar from './NavBar';
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

function FAQ() {
    return (
        
      
        <MDBContainer className="mt-5" style={{ maxWidth: '1000px' }}>
            <h2 style={{ textAlign: 'center', color: "blue" }}>FAQ</h2> 
            <NavBar/>
            <MDBAccordion alwaysOpen initialActive={1}>
             
        <MDBAccordionItem collapseId={1} headerTitle="What is mortgage automation?">
          Mortgage automation refers to the use of technology and digital processes to streamline and expedite the mortgage application, approval, and closing processes.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="What are the benefits of mortgage automation?">
          Mortgage automation offers several benefits, including faster application processing, reduced paperwork, improved accuracy, enhanced customer experience, and increased efficiency for lenders.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="How does mortgage automation work?">
          Mortgage automation involves the use of online portals, electronic document submission, automated underwriting systems, and digital verification processes to simplify and speed up the mortgage process.
              </MDBAccordionItem>
        
        <MDBAccordionItem collapseId={2} headerTitle="Is mortgage automation secure?">
          Yes, mortgage automation platforms prioritize data security and employ encryption, secure servers, and strict access controls to protect sensitive customer information.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Can I still talk to a human during the mortgage automation process?">
          Yes, mortgage automation platforms often provide customer support options, including access to loan officers and mortgage experts who can assist with any questions or concerns. 
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="What information is needed to apply for a mortgage through automation?">
         Typically, you will need to provide personal information, employment details, income documentation, bank statements, and information about the property you wish to purchase.
                </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="How long does it take to get a mortgage approval through automation?">
        The time for mortgage approval can vary, but with automation, the process can be expedited, and approvals may be obtained within a matter of days or weeks, depending on the complexity of the application.
                </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Can I track the progress of my mortgage application online?">
         Yes, mortgage automation platforms often provide an online portal or mobile app that allows borrowers to track the status of their application, submit additional documents, and communicate with the lender.
                </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Is mortgage automation available for all types of mortgages?">
         Mortgage automation is available for various types of mortgages, including purchase loans, refinancing, fixed-rate mortgages, adjustable-rate mortgages (ARMs), and government-backed loans such as FHA and VA loans.
                </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Are there any costs associated with using a mortgage automation platform?">
        The costs associated with using a mortgage automation platform may vary. Some lenders may charge origination fees or other processing fees, while others may offer competitive rates or fee waivers as part of their automation services.
        </MDBAccordionItem>
              
          </MDBAccordion>
          
    </MDBContainer>
  );
}

export default FAQ;
