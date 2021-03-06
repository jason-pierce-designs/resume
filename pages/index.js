import React, { useState, useEffect } from "react";
import axios from 'axios';
import Particles from "react-particles-js";
import Layout from '../components/Layout';
import Socialicons from "../components/Socialicons";

const metaData = {
    title: `Hey, I'm Jason Pierce`,
    description: `Welcome to my About site! See my professional resume and browse a couple different projects from the portfolio I have built over the past 10 years or so. Contact me using the handy form, or send me an email directly. Thanks for stopping by - Jason Pierce`,
    keywords: 'Jason Pierce, Cover Letter, Forward'
};

const HomePage = () => {
  const [information, setInformation] = useState("");
  const paramConfig = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false
        }
      },
      color: {
        value: "#ffffff"
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out"
      }
    }
  };
  useEffect(() =>{
    axios.get('/api/information')
    .then( response => {
      setInformation(response.data);
    })
  }, []);

  return (
    <Layout pageMetaData={metaData}>
      <div className="mi-home-area mi-padding-section">
        <Particles className="mi-home-particle" params={paramConfig} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hey, I'm <span className="color-theme">{information.name}</span>
                </h1>
                <p>{information.aboutContent}</p>
                <Socialicons bordered />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
