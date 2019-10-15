import React, { Component } from 'react'
//import Teams2 from '../../components/Teams/Teams2'
import FAQ from '../../components/FAQ/FAQ'
import Footer from '../../components/Footer/Footer'
import Contact from '../../components/Contact/Contact'
import SimpleExpansionPanel from '../../components/FAQ/FAQ3'
import Stats  from '../../components/Stats/Stats'
//import Faq from '../../components/FAQ/FAQ2'
const mainStyle = {
    primaryColor: {
      color: "#03fc7f"
    },
    secondaryColor: {
      color: "#02bd5f"
    },
    header: {
      fontFamily: "Montserrat, 'Proza Libre', sans-serif",
      fontSize: "46px",
      fontWeight: "700"
    },
    subHeader: {
      fontFamily: "Montserrat, 'Proza Libre', sans-serif",
      fontSize: "28px",
      fontWeight: "700",
      letterSpacing: "0px"
    },
    text: {
      color: "black",
      fontFamily: "Montserrat, 'Proza Libre', sans-serif",
      fontSize: "18px",
      fontWeight: 400
    },
    button: {
      fontFamily: "Montserrat, 'Proza Libre', sans-serif",
      fontWeight: 700
    },
    buttonColor: {
      color: "#03fc7f",
      hoverColor: "#02bd5f"
    },
    ContactButton: {
        fontSize: "14px",
        padding: "14px 36px"
    },
    bigButton: {
      fontSize: "21px",
      padding: "14px 36px"
    },
    alternateBackgroundColor: {
      backgroundColor: "#f7f9fc"
    },
    section: {
      paddingTop: "75px",
      paddingBottom: "75px"
    },
    wavyDiv: {      
      height: "100%",
      width: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "white"
    }
  };
export class LandingPage extends Component {
    render() {
        return (
            <div>
                {/* <Teams2/> */}                
                <SimpleExpansionPanel />
                <Contact mainStyle={mainStyle}  />
                {/* <Stats/> */}
                <Footer />
                
            </div>
        )
    }
}

export default LandingPage
