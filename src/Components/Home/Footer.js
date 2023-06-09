import React, { useState,useEffect } from 'react'
import axios from "axios";
import phone from "../../Images/Footer/phonecall.png"
import email from "../../Images/Footer/email.png"
import location from "../../Images/Footer/location.png"
import facebook from "../../Images/Footer/facebook.png"
import instagram from "../../Images/Footer/instagram.png"
import youtube from "../../Images/Footer/youtube.png"
import twiter from "../../Images/Footer/twitter.png"
import design from "../../Images/Footer/Design2.png"
import design1 from "../../Images/Footer/Design1.png"
import css from "../../Css/Footer.css"
function Footer() {
    
    //const face = "https://m.facebook.com/profile.php?id=100003397943168";
    //const insta = "https://www.instagram.com/subhashish_guruji/";
    const you = "https://youtube.com/@JyotishAcharya"
   // const twitter = "https://twitter.com/subhashishshar9?lang=en";

    const[face,setData] = useState(null);
    const[insta,setData2] = useState(null);
    const[address,setData3] = useState(null);
    const[twitter,setData4] = useState(null);
    const[emai,setEmail] = useState(null);
    const[contact,setContact] = useState(null);
  
    useEffect(() => {
      getItems();
    }, [])
  
    const getItems=async()=>{
      try{
      let result = await axios.get("https://subhashishguruji.onrender.com/home/footer/");
      setData(result.data[0].facebook);
      setData2(result.data[0].instagram);
      setData3(result.data[0].Address);
      setData4(result.data[0].twitter);
      setEmail(result.data[0].email_id);
      setContact(result.data[0].contact_no);
      //console.log(result.data[0]);
      }
      catch(e){
        console.log(e);
      }
    }
  return (
    <div className='footerdiv'>
    <div className='Footerouterdiv'>
        <div className='Boxlink'>
            <h2 id="linklikhahua">links</h2>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Products</li>
                    <li>Trust</li>
                    <li>Sadhna</li>
                </ul>
            </div>
        </div>

        <div className='contactouterdiv'>
            <h2 id="headinglikhahua">Contact us</h2>
            <div className='contactinnerdiv'>
           <a href="tel: 9999808651"><img id="logo1" src={phone} alt="error"/></a>
                <div className='contactnodiv'>
                <para id="contactno">+91 {contact}</para>
                <para id="contactno" >+91 9999999999</para>
                </div>
            </div>
            <div className='contactinnerdiv'>
                <img id="logo1" onClick={() => window.location = 'mailto:jyotishguru1122@gmail.com'} src={email} alt="error"/>
                <p id="contactno">{emai}</p>
            </div>
            <div className='contactinnerdiv'>
                <img id="logo1" src={location} alt="error"/>
                <p id="contactno">{address}</p>
            </div>
            <p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8062216902854!2d77.17763211475426!3d28.695442687982407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d034a17e6c8c1%3A0x54dbf89f9bfa963c!2sBalaji%20Jyotish%20Sansthan%20(Delhi)!5e0!3m2!1sen!2sin!4v1675063626246!5m2!1sen!2sin" id= "locationdiv"></iframe>
            </p>
        </div>

        <div className='Boxlink'>
            <h2 id="headinglikhahua">Social Media</h2>
            <div className='socialmedia'>
                <div className='sociallogo'><a href={face}><img id="socialimage"src={facebook}alt="error"/></a></div>
                <div className='sociallogo'><a href={insta}><img id="socialimage"src={instagram}alt="error"/></a></div>
                <div className='sociallogo'><a href={you}><img id="socialimage"src={youtube}alt="error"/></a></div>
               <div className='sociallogo'> <a href={twitter}><img id="socialimage" src={twiter}alt="error"/></a></div>
               
            </div>
        </div>
    </div>
    <div className='designPart'>
            <img id="designimage"src={design} alt="error"/>
            <p id="copywrite">Copyright © 2022 Jyotish. All Right Reserved.</p>
            <img id="designimage1" src={design1} alt="error"/>
        </div>
    </div>
  )
}

export default Footer
/*
 <p>
<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6901.709169931712!2d78.3241006763999!3d30.12697425696091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sContact%20Us%20%2093%2C%20P.O.%20Swargashram%2C%20Near%20SBI%20Hostel%2C%20laxman%20jhula%20(Himalayas)%2C%20Uttrakhand-249304%2C%20India%20%20%20!5e0!3m2!1sen!2sin!4v1672228832962!5m2!1sen!2sin" style={{width:"400", height:"300" ,style:"border:0"}}></iframe>
</p>
                */