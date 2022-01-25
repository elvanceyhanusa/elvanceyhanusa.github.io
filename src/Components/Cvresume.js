import React from "react";
import pdf_cv from '../Docs/CeyhanCV.pdf';
import pdf_resume from '../Docs/CeyhanResume.pdf';
import md_bio from '../Md/bio.md'


export default class Cvresume extends React.Component{

    render(){
        return(
        <div>
        <ul className="two_columns">
              {/* <li><a href="../Docs/CeyhanCV.pdf" >CV (in pdf)</a></li> */}
              <li><a href = {pdf_cv} target = "_blank" rel="noreferrer">CV (in pdf)</a></li>
              {/* <li>Resume (in pdf)</li> */}
              <li><a href = {md_bio} target = "_blank" rel="noreferrer">bio</a></li>
              
              <li><a href = {pdf_resume} target = "_blank" rel="noreferrer">Resume (in pdf)</a></li>
              {/* <li>Google Scholar Page</li> */}
              <li><a href = "https://scholar.google.com/citations?hl=en&user=mfZRKvoAAAAJ&view_op=list_works&sortby=pubdate" target = "_blank" rel="noreferrer">Google Scholar Page</a></li>
              
              </ul>
              </div>
        )}
}