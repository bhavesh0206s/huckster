import React from 'react';

const Footer = () => {
  return (
    <div style={{backgroundColor:"#706c61"}}>
      <footer style={{display:"flex", justifyContent:"space-around"}}>
            <div style={{color:"black", fontSize:".75rem", fontWeight: 600}}>
              Copyright &copy; 2020 Huckster
            </div>
            <div style={{color:"black", fontSize:".8rem", fontWeight: 650}}>
              Made with <span style={{color:"red"}}>&hearts;</span> by <a href="https://github.com/bhavesh0206s" style={{ color: '#1e1d1d'}}>Bhavesh Suthar</a>
            </div>
      </footer>
    </div>
  );
}
 
export default Footer;