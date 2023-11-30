import React from 'react'
import '../style/Home.css'





const Home = () => {

  return (
    <div className='homeContainer'>
      <section id="hero" class="d-flex align-items-center">
    <div class="container position-relative aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-9 text-center">
          <h1>Learning Picnic</h1>
          <h2>The best website to learn</h2>
        </div>
      </div>
      <div class="text-center">
        <a href="#about" class="btn-get-started scrollto">Get Started</a>
      </div>

      <div class="row icon-boxes">
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
          <div class="icon-box">
            <div class="icon"><i class="fas fa-book-open"></i></div>
            <h4 class="title"><a href="/lessons">Lessons</a></h4>
            <p class="description">You can see your lessons and summarize them as well.</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
          <div class="icon-box">
            <div class="icon"><i class="fas fa-edit"></i></div>
            <h4 class="title"><a href="/quizzes">Quizzes</a></h4>
            <p class="description">You can take your own quizzes on your lessons here.</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">
          <div class="icon-box">
            <div class="icon"><i class="fa-solid fa-file"></i></div>
            <h4 class="title"><a href="/report">Report</a></h4>
            <p class="description">You can explore your own grades through here.</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="500">
          <div class="icon-box">
            <div class="icon"><i class="fa fa-address-book"></i></div>
            <h4 class="title"><a href="">Contact Us</a></h4>
            <p class="description">Don't hesitate to contact your teacher.</p>
          </div>
        </div>

      </div>
    </div>
      </section>
      
      <main id='main'>
      <section id="about" class="about">
      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-title">
          <h2>About Us</h2>
        </div>

        <div class="row content">
          <div class="">
            <p style={{fontSize:"19px"}}>
              The learning picnic website helps the students to study and summarize the lessons of their subject taking them to a journey of learning the new aspects and discovering new things,
                  that kids actually enjoy using can be a challenge, in addtion that it generates quizzes and offering reports for the parents<br/><b>Keep studying</b>
            </p>
            <ul>
              <li><i class="fa fa-check-square-o"></i>The lessons provide you a summarize for each lesson.</li>
              <li><i class="fa fa-check-square-o"></i>The quizzes are set to have single quiz for each lesson.</li>
              <li><i class="fa fa-check-square-o"></i>The report is set to display your grades and progress.</li>
                </ul>
                <a href="#" class="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>
      </main>
    </div>
   
  )
}

export default Home;