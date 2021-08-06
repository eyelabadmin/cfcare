import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AppointmentFormTwo from "../components/Common/AppointmentFormTwo";
import Footer from "../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <React.Fragment>
      <TopHeader />
      <Navbar />

      <PageBanner
        pageTitle="Dr. Senan Al-Safaar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Dr. Senan Al-Safaar"
        // bgImage="page-title-five"
        opacity="0.6"
        colour="#008000"
      />

      <div className="doctor-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                <img src="/images/doctors/senan.jpg" alt="Doctor" />

                <div className="doctor-details-contact">
                  <h3>Contact info</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-call"></i>
                      Call: +03 9391 0033
                    </li>
                    <li>
                      <i className="icofont-ui-message"></i>
                      DrSenanAlSafaar@cfcare.com.au
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      471 Melbourne Road, Newport, Melbourne, Victoria 3015
                    </li>
                  </ul>
                </div>

                <div className="doctor-details-work about-item about-right text-center">
                  <img src="/images/about-shape1.png" alt="About" />
                  <h4>Times vary, please click book now for availability</h4>
                  <button class="doctors-details-btn">Book Now</button>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-details-biography">
                    <h3>Dr. Senan Al-Safaar</h3>
                    {/* <p>
                      Counseling, Psychology, Medical hypnosis, Laser Therapy
                    </p> */}
                  </div>

                  {/* <div className="doctor-details-biography">
                    <h3>Biography</h3>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>

                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt.
                    </p>

                    <p>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter consequences that are
                      extremely painful.
                    </p>

                    <p></p>
                  </div> */}

                  <div className="doctor-details-biography">
                    <h3>Education</h3>
                    {/* <ul>
                                            <li>PHD Degree in Neurology at University of UCLan School of Medicine Preston (2006)</li>
                                            <li>Master of Neurosurgery at University of University of Exeter Medical School Exeter (2002)</li>
                                        </ul> */}
                    <ul>
                      <li>MBCHB</li>
                      <li>FRACGP</li>
                    </ul>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Experience</h3>
                    <ul>
                      <li>Chronic</li>
                      <li>Disease</li>
                      <li>Diabetes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="pb-100">
                <AppointmentFormTwo />
            </div>
     */}
      <Footer />
    </React.Fragment>
  );
};

export default DoctorDetails;
