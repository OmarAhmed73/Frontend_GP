import React from 'react'
import '../pages/style/Footer.css'

const Footer = () => {
  return (
    //  <div className="mt-auto" id='footer'>
    //     All Copyrights &copy; are reserved.
    // </div> 


    <footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Learning Picnic</h3>
            <p>
              Kids learning website.<br/>
              “Only the educated are free”<br/>
              <i>Epictetus</i><br/><br/>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h3>Useful Links</h3>
            <ul style={{float:"left"}}>
              <li><a href="/">Home</a></li>
              <li><a href="/account">Account</a></li>
              <li><a href="/lessons">Lessons</a></li>
              </ul>
              <ul style={{float:"right"}}>
                  <li><a href="/quizzes">Quizzes</a></li>
                  <li><a href="/report">Report</a></li>
                  <li><a href="/contact">Contact Us</a></li>
              </ul>
          </div>

          <div class="col-lg-3 col-md-12 footer-newsletter">
            <h3>Join Us</h3>
            <p>You can join us and have your own account just click this button.</p>
            <a href="/login" class="btn-learn-more">Enroll Now</a>
          </div>
        </div>
      </div>
    </div>

    <div class="container pb-2">
      <div class="copyright">
        All Copyrights © are reserved to <strong>Learning Picnic</strong>.
      </div>
    </div>
  </footer>
    
   
  )
}

export default Footer