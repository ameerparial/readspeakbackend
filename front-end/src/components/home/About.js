import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import groupMember1 from "../../assets/group1.jpg";
import groupMember2 from "../../assets/group2.jpg";
import groupMember3 from "../../assets/group3.jpg";
import { useColor } from "../../store/color.state";

const teamMembers = [];

const Team = () => {
  const { settingOptions } = useColor();
  return (
    <section className="team-section text-center" id="about">
      <div className="container">
        <h2 className={`display-4 text-${settingOptions.color}`}>About us</h2>
        <p className="lead mb-5">
          This is a client project developed to demonstrate my skills.
        </p>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className={`card shadow-sm bg-${settingOptions.theme}`}>
                <img
                  src={member.image}
                  className="card-img-top rounded-circle mx-auto mt-4"
                  alt={member.name}
                  style={{ width: "150px", height: "150px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.title}</p>
                  <div className="d-flex justify-content-center">
                    <a
                      href={member.github}
                      className={`btn btn-outline-${settingOptions.color} mx-2`}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href={member.linkedin}
                      className={`btn btn-outline-${settingOptions.color} mx-2`}
                    >
                      <FontAwesomeIcon icon={member.linkedin} />
                    </a>
                    <a
                      href={member.twitter}
                      className={`btn btn-outline-${settingOptions.color} mx-2`}
                    >
                      <FontAwesomeIcon icon={member.twitter} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
