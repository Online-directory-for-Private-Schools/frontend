// src/components/Footer.js
import React from 'react';
import {BsFillEnvelopeFill} from 'react-icons/bs';
import {FaInstagram, FaTwitter, FaFacebook, FaLinkedinIn} from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className='col' >
          <img src = "https://img.freepik.com/vecteurs-libre/vecteur-degrade-logo-colore-oiseau_343694-1365.jpg?w=740&t=st=1680321477~exp=1680322077~hmac=5f8d8d50668d344b464b0fcde7b4ccfcfdb8d15e247f596e75656439f7158ffc" className='logo'></img>
          <p className='desc'>put small desc put small desc put small desc put small desc put small desc put small desc put small desc put small </p>
          </div>
        <div className='col'>
          <h3>Office</h3>
          <p>Sidi Abdellah</p>
          <p>Algiers</p>
          <p>Whitefield</p>
          <p>PIN 5600-54, Algeria</p>
          <p className='email-id'>courseSeeker@ensia.edu.dz</p>
          <h3>+231- 036839398</h3>

        </div>
        <div className='col'>
          <h3>Links</h3>
            <ul>
              <li><a href = "#">home</a></li>
              <li><a href = "#">Services</a></li>
              <li><a href = "#">About Us</a></li>
              <li><a href = "#">Contact</a></li>
              <li><a href = "#">Features</a></li>
            </ul>
        </div>
        <div className='col'>
          <h3>Newsletter</h3>
          <form>
             <BsFillEnvelopeFill className="far enevelope" />
            <input type = "email" placeholder="Enter your email" required></input>
            <button type = "submit"><BiSend className='send' /></button>

          </form>
          <div className='social-icons'>
            <a href = "#"> <FaInstagram className='Fa'/></a>
            <a href = "#"> <FaTwitter className='Fa'/></a>
            <a href = "#"> <FaFacebook className='Fa'/></a>
            <a href = "#"> <FaLinkedinIn className='Fa'/></a>
            
            
            
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
