import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandAddMoreIcon from '@material-ui/icons/ExpandMore';
import {Add, Remove} from '@material-ui/icons'
import { Container , SvgIcon, Icon} from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
import LazyLoad from "react-lazyload";
import {Grid} from "@material-ui/core";
import Amer from '../../images/amer.jpg'
const qanda = [
    {
        question: "What platforms do you advertise on?",
        answer: "We usually advertise on Facebook, Instagram, Twitter, Yelp, Linkedin, Google, and Youtube."
    },
    {
        question: "Can I customize my own package?",
        answer: "Yes! You can customize your own package by contacting us. Following that, we will give you a quote."
    },
    {
        question: "Can you create me my own custom audience to target?",
        answer: "YES! Absolutely, our knowledge of Audience Insights allows us to create the best audeince that matches your preferences, whether it's sellers, buyers, previous customers, etc. We've got your audience covered!"
    },
    {
        question: "Can I have my own photographer?",
        answer: " Yes, you can have your own photographer. We can edit the images even further if needed and we can also post any images you would want."
    },
    {
        question: "Do you only deal with clients in Tampa?",
        answer: "No, we are open to any remote location. While we are located in Tampa, we do work with clients anywhere in the US. Although, some of our service are restricted to 2 hours outside of Tampa. These restricted services include photography and videography."
    },
    {
        question: "Can I have photography sessions without the subscriptional plan?",
        answer: "Yes, we charge a certain fee for just photography sessions. Contact us to get your quote!"
    },
    {
        question: "Do you only work with Dentists?",
        answer: "No, we have specific marketing strategies for every type of business model. No matter you business, we would love to help!",
    },
    {
        question: "Do you offer drone coverage?",
        answer: "Yes, we love capturing footage from many different views!"
    },
    {
        question: "Do you offer money back guarantee?",
        answer: "Yes, for the first 30 days we offer a money back guarantee, if you are not satisfied with our services."
    }
]
const SimpleExpansionPanel = (props) => {
  return (
    <div>
        <Container fixed >
        <h2 style={{textAlign: "center", marginTop: "30px"}}>Frequently Asked Questions</h2>
        {qanda.map((obj, idx) => {
            return(
        <ExpansionPanel style={{marginTop: "30px"}}>
        <ExpansionPanelSummary
          expandIcon={<Add />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={props.mainStyle.text}
        >
          <Typography style={props.mainStyle.text}>{obj.question}</Typography>
        </ExpansionPanelSummary>
            <ExpansionPanelDetails Icon={<Remove />}>
          <Typography expandIcon={<Remove />} style={props.mainStyle.text}>
            {obj.answer}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
            )
        })}
         </Container>
     
    </div>
  );
}

export default SimpleExpansionPanel
