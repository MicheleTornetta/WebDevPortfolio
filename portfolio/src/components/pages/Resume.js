import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyResume from "./MyResume.pdf";
import "../../styles/resumeStyle.css";
// import Bar from "../../images/bar.png";

export default function Resume() {
  return (
    <Container fluid className="container">
      <Row className="row">
        <h3>Resume</h3>
      </Row >
      <Row className="row">
        <Col>
          <h4>Lebanon, PA 17042 | 717-708-0618 | mlt@pwahsolutions.com </h4>
          <h3 className="skills">
            Full Stack Web Development | Marketing | Leadership
          </h3>
          <Row>
            <p>
              Front-end web developer with a background in marketing, giving a
              unique perspective of how a well developed web application should
              encourage the end-user to interact with your website.
            </p>
          </Row>
          <Row className="upenn">
            <Col>
              <h4>
                University of Pennsylvania WebDev Bootcamp - Philadelphia, PA
                <p>Certificate in Full Stack - Final Grade 99.45%</p>
              </h4>
            </Col>
          </Row>
          {/* Skills */}
          <Row className="skills">
            <h4>Web Development</h4>
          </Row>
          <Row>
            <Col>
              <ul className='ulLeft'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
              </ul>
            </Col>
            <Col>
              <ul className='ulCenter'>
                <li>RESTful APIs</li>
                <li>React</li>
                <li>Handlebars</li>
                <li>JSON</li>
              </ul>
            </Col>
            <Col>
              <ul className='ulCenter'>
                <li>VS Code</li>
                <li>GitHub</li>
                <li>Git</li>
                <li>Heroku</li>
              </ul>
            </Col>
            <Col>
              <ul className='ulCenter'>
                <li>Node.js</li>
                <li>MySql</li>
                <li>NoSQL</li>
              </ul>
            </Col>
            <Col>
              <ul className='ulRight'>
                <li>Express</li>
                <li>Mongo</li>
                <li>Grapql</li>
              </ul>
            </Col>
          </Row>
          <Row className="skills">
            <h4>Marketing - Sales & Customer Service</h4>
          </Row>
          <Row>
            <Col>
              <ul className='ulLeft'>
                <li>Digital - Email</li>
                <li>Social Media</li>
                <li>Database Segmentation</li>
                <li>Surveys </li>
              </ul>
            </Col>
            <Col>
              <ul className='ulCenter'> 
                <li>Copywriting</li>
                <li>Research</li>
                <li>SEO</li>
                <li>Promotion Development</li>
              </ul>
            </Col>
            <Col>
              <ul className='ulCenter'>
                <li>Promotion Implementation</li>
                <li>Database Management</li>
                <li>Tech Support</li>
                <li>URL Management</li>
              </ul>
            </Col>
            <Col>
              <ul className='ulRight'>
                <li>Graphic Design</li>
                <li>Email Template Design</li>
                <li>Banners</li>
                <li>Posters</li>
              </ul>
            </Col>
          </Row>
          <Row className="skills">
            <h4>Leadership</h4>
          </Row>
          <Row>
            <Col>
              <ul className='ulLeft'>
                <li>Marketind Director</li>
                <li>Sales & Customer Serivce Supervisor</li>
              </ul>
            </Col>
            <Col>
              <ul className='ulCenter'>
                <li>Recruitment</li>
                <li>Training</li>
                <li>Mentoring</li>
              </ul>
            </Col>
            <Col>
              <ul className='ulCenter'>
                <li>Develop SOPs</li>
                <li>Increase Workflow Efficiencies</li>
                <li>Strategic Planning</li>
              </ul>
            </Col>
            <Col>
              <ul className='ulRight'>
                <li>Project Management</li>
                <li>Problem Solving</li>
              </ul>
            </Col>
          </Row>
          <Row className="upenn">
            <Col>
              <h4 style={{padding: '20 0 0 0'}}>Professional Experience</h4>
            </Col>
          </Row>
          <Row>
            <h3>Progressive Casualty Insurance</h3>
          </Row>
          <Row>
            <Col>
              <p className="title">Independent Vehicle Damage Appraiser</p>
            </Col>

            <Col className="rightJustified">Sep 2021-Present</Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col>
              <p>
                Work with claimants and body shops to ensure damaged vehicle is
                repaired as quickly as possible to pre-accident condition or
                compensate vehicle owner for the value of their vehicle made.
              </p>
            </Col>
            <Col xs={1}></Col>
          </Row>

          <Row>
            <Col>
              <p className="title">Claims Generalist - Adjuster</p>
            </Col>
            <Col className="rightJustified">Apr 2019-Sep 2021</Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col>
              <p>
                Determine liability, investigate misrepresentation, work with
                police, attorney's, interview customers, claimants and
                witnesses, partner with estimators to manage vehicle repairs and
                negotiate with tow yards and other insurance carriers. Run team
                meetings to maintain high moral and mentor new Claims Generals
                in best practices and haw to be successful in the role.
              </p>
            </Col>
            <Col xs={1}></Col>
          </Row>

          <Row>
            <Col>
              <p className="title">Agency Service Consultant</p>
            </Col>
            <Col className="rightJustified">Nov 2018-Apr 2019</Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col>
              <p>
                Inbound Call Center - Provide service to Agents and Customers.
                Lead team meetings, and other team building activities.
              </p>
            </Col>
            <Col xs={1}></Col>
          </Row>

          <Row>
            <Col>
              <p className="title">Service Consultant </p>
            </Col>
            <Col className="rightJustified">Jun 2017-Nov 2018</Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col>
              <p>
                Exceeded Home Insurance Sale benchmark of 6.5% transfers to
                10-19% transfer rate.
              </p>
              <p>
                Inbound Call Center - Provide service to Customers. Assist
                supervisor in coaching staff to improve Home Insurance Sale
                transfer offer skills, and organize/ run team
                motivational/teaching contests and meetings.{" "}
              </p>
            </Col>
            <Col xs={1}></Col>
          </Row>

          <Row>
            <h3>DonorLogix </h3>
          </Row>
          <Row>
            <Col>
              <p className="title">Director of Marketing</p>
            </Col>
            <Col className="rightJustified">2010-2017</Col>
          </Row>

          <Row>
            <Col xs={1}></Col>
            <Col>
              <p>
                Mass marketing/segmentation, promotion development and
                implementation, graphics, copywriting and budgeting. Increased
                online revenue from $15,500/year to $156,000/year.
              </p>
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <Col>
              <p className="title">Email Marketing Manager/HR</p>
            </Col>
            <Col className="rightJustified">2011-2012</Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col>
              <p>
                Started with individual customer email responses and then
                developed cross platform emails using html. Also recruited and
                interviewed new potenital new hires.
              </p>
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <Col>
              <p className="title">
                Recruiter Team Leader/Customer Service: Outbound Call Center
              </p>
            </Col>
            <Col className="rightJustified">2011</Col>
          </Row>

          <Row>
            <Col xs={1}></Col>
            <Col>
              <p>
                Exceeded company standards of 50% conversation rate, averaging
                between 70% to 80% conversation rate.
              </p>
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <h3>IceWraps </h3>
          </Row>
          <Row>
            <Col>
              <p className="title">Sales & Customer Service Manager</p>
            </Col>
            <Col className="rightJustified">2008-2010</Col>
          </Row>

          <Row>
            <Col xs={1}></Col>
            <Col>
              <p>
                Average increase in revenue over $20,000/month and the number of
                individual orders increased by 25%. EBay feedback at 99.8%, and
                Amazon ranking at 4.75 out of 5.
              </p>
              <p>
                Manage inbound and outbound customer and vendor calls, process
                orders, provide customer assistance, track shipments and
                returns, online marketing, data entry, clerical/administrative,
                develop efficient workflow procedures, develop SOPs, as well as
                strategic planning. Work with all B2B clients, as well as
                distributors, cost/profit analysis. Employee development and
                training.
              </p>
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row className="upenn">
            <Col>
              <h4>Other Software Skills</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Microsoft Office, CRM Software, Googledocs, Dropbox, VPN</p>
              <p></p>
            </Col>
          </Row>
        </Col>
      </Row>
      <div></div>
      <Row>
        <a href={MyResume} download className="resume">
          Click to download my Resume
        </a>
      </Row>
    </Container>
  );
}
