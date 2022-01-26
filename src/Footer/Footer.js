import React from 'react';
import './Footer.css';

export default function Footer({ email }) {
  return <footer className='footer'>Contact Me: {email}</footer>;
}
