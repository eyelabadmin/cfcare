import React from 'react';
import Link from 'next/link';

const OurDoctors = () => {
    return (
        <div className="doctors-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Meet Our Doctors</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="doctor-item">
                            <div className="doctor-top">
                                <img src="/images/doctors/pietas.jpg" alt="Doctor" />
                                <Link href="/appointment">
                                    <a>Get Appointment</a>
                                </Link>
                            </div>
                            <div className="doctor-bottom">
                                <h3>
                                    <Link href="/doctor-details">
                                        <a>Dr. Pietas Nyamayaro</a>
                                    </Link>
                                </h3>
                                <span>Neurosurgeon</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="doctor-item">
                            <div className="doctor-top">
                                <img src="/images/doctors/huda.jpg" alt="Doctor" />
                                <Link href="/appointment">
                                    <a>Get Appointment</a>
                                </Link>
                            </div>
                            <div className="doctor-bottom">
                                <h3>
                                    <Link href="/doctor-details">
                                        <a>Dr. Huda Al-Rawi</a>
                                    </Link>
                                </h3>
                                <span>Neurosurgeon</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                        <div className="doctor-item">
                            <div className="doctor-top">
                                <img src="/images/doctors/richard.jpg" alt="Doctor" />
                                <Link href="/appointment">
                                    <a>Get Appointment</a>
                                </Link>
                            </div>
                            <div className="doctor-bottom">
                                <h3>
                                    <Link href="/doctor-details">
                                        <a>Dr. Richard Cai</a>
                                    </Link>
                                </h3>
                                <span>Dental Surgeon</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="doctor-btn">
                    <Link href="/doctor-details">
                        <a>See All</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OurDoctors;