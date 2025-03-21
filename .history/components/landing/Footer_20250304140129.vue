<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-column take-action">
        <img src="/logo.png" alt="The Oaktree Empowerment Initiative Logo" class="footer-logo">
        <h3>The Oaktree Empowerment Initiative</h3>
      </div>
      
      <div class="footer-column programs">
        <h4>Programs</h4>
        <ul>
          <li><NuxtLink to="/poverty-relief">Poverty relief</NuxtLink></li>
          <li><NuxtLink to="/basic-income">Basic income</NuxtLink></li>
          <li><NuxtLink to="/emergency-relief">Emergency relief</NuxtLink></li>
          <li><NuxtLink to="/refugees">Refugees</NuxtLink></li>
          <li><NuxtLink to="/climate-survival">Climate survival</NuxtLink></li>
          <li><NuxtLink to="/united-states">United States</NuxtLink></li>
        </ul>
      </div>
      
      <div class="footer-column organization">
        <h4>Organization</h4>
        <ul>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/why-poverty">Why poverty</NuxtLink></li>
          <li><NuxtLink to="/values">Values</NuxtLink></li>
          <li><NuxtLink to="/financials">Financials</NuxtLink></li>
          <li><NuxtLink to="/careers">Careers</NuxtLink></li>
          <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
          <li><NuxtLink to="/risks">Risks</NuxtLink></li>
          <li><NuxtLink to="/whistleblowing">Whistleblowing</NuxtLink></li>
        </ul>
      </div>
      
      <div class="footer-column contact">
        <div class="contact-info">
          <h4>Contact Info</h4>
          <p>121 Ogudu Road, Lagos, Nigeria</p>
          <p>(+234) 703 631 9444, 0814 857 1524</p>
          <p>support@toei.org, enquiry@toei.org</p>
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
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.footer-column h4 {
  color: #086452;
  margin-bottom: 1rem;
  font-weight: 600;
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
  text-decoration: none;
  font-weight: 600;
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
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