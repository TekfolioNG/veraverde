<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-column take-action">
        <img src="@/assets/img/Petabiz_logo.png" alt="The Oaktree Empowerment Initiative Logo" class="footer-logo">
        <h3>The Oaktree Empowerment Initiative</h3>
        <p class="about-us">
          Transforming Lives Through Skills and Support
        </p>
        <p class="about-description">
          Across Nigeria, individuals and communities face significant challenges that limit their potential. Our
          programs focus on skills acquisition and rehabilitation for individuals seeking fresh starts after
          incarceration, while also providing essential healthcare services, developing sustainable water sources, and
          building vital community infrastructure. Through these initiatives, we help transform lives and build
          self-sustaining communities across Nigeria.
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/support-projects" class="cta-button">SUPPORT OUR PROJECTS</NuxtLink>
          <NuxtLink to="/impact" class="cta-button">SEE HOW WE CREATE IMPACT</NuxtLink>
        </div>
      </div>

      <div class="footer-column programs">
        <h4>Programs</h4>
        <div class="column-grid">
          <ul>
            <li>
              <NuxtLink to="/poverty-relief">Poverty relief</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/basic-income">Basic income</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/emergency-relief">Emergency relief</NuxtLink>
            </li>
          </ul>
          <ul>
            <li>
              <NuxtLink to="/refugees">Refugees</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/climate-survival">Climate survival</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/united-states">United States</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-column organization">
        <h4>Organization</h4>
        <div class="column-grid">
          <ul>
            <li>
              <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/why-poverty">Why poverty</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/values">Values</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/financials">Financials</NuxtLink>
            </li>
          </ul>
          <ul>
            <li>
              <NuxtLink to="/careers">Careers</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/faq">FAQ</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/risks">Risks</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/whistleblowing">Whistleblowing</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-column contact">
        <div class="contact-info">
          <h4>Contact Info</h4>
          <p>121 Ogudu Road, Lagos, Nigeria</p>
          <p>(+234) 703 631 9444</p>
          <p>0814 857 1524</p>
          <p>support@toei.org</p>
          <p>enquiry@toei.org</p>
        </div>

        <div class="social-media">
          <div class="social-icons">
            <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
          </div>
        </div>

        <div class="footer-search">
          <input type="text" placeholder="Search" class="search-input">
          <button class="search-button">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="copyright">
        <NuxtLink to="https://tekfol.io" target="_blank" class="developer-link">
          Website Development by Tekfolio Ltd
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: #f4f4f4;
  padding: 4rem 2rem;
  color: #333;
}

.footer-container {
  display: grid;
  grid-template-columns: 1.5fr 1.25fr 1.25fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.take-action {
  max-width: 350px;
}

.about-us {
  color: #086452;
  font-weight: 600;
  margin-bottom: 1rem;
}

.about-description {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.cta-button {
  background-color: #086452;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.8rem;
}

.footer-column h4 {
  color: #054033;
  /* Slightly darker green */
  margin-bottom: 1rem;
  font-weight: 600;
}

.column-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 0.5rem;
}

.footer-column ul li a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-column ul li a:hover {
  color: #086452;
}

.footer-logo {
  max-width: 200px;
  margin-bottom: 1rem;
}

.contact-info p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icon {
  color: #086452;
  font-size: 1.5rem;
  text-decoration: none;
}

.footer-search {
  display: flex;
  margin-top: 1rem;
}

.search-input {
  flex-grow: 1;
  padding: 0.5rem;
  border: 1px solid #086452;
  border-right: none;
  border-radius: 4px 0 0 4px;
}

.search-button {
  background-color: #086452;
  color: white;
  border: 1px solid #086452;
  padding: 0.5rem 1rem;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.footer-bottom {
  text-align: right;
  padding-top: 2rem;
  border-top: 1px solid #ddd;
  margin-top: 2rem;
}

.developer-link {
  color: #086452;
  text-decoration: underline;
  font-weight: 400;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.developer-link:hover {
  opacity: 1;
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .column-grid {
    grid-template-columns: 1fr;
  }

  .contact {
    grid-column: span 2;
  }
}

@media (max-width: 480px) {
  .footer-container {
    grid-template-columns: 1fr;
  }

  .contact {
    grid-column: span 1;
  }
}
</style>