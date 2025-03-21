<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-column take-action">
        <img src="@/assets/img/Petabiz_logo.png" alt="The Oaktree Empowerment Initiative Logo" class="footer-logo">
        <p class="about-description">
          Our programs empower individuals through comprehensive skill development and community reintegration,
          providing transformative pathways for those seeking to rebuild their lives and contribute meaningfully
          to society's growth and resilience.
        </p>
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
          <p>support@toei.org, enquiry@toei.org</p>
        </div>

        <div class="social-media">
          <div class="social-icons">
            <a href="#" class="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" class="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" class="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z">
                </path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-search">
          <input type="text" placeholder="Search" class="search-input">
          <button class="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
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
/* ... (previous styles remain the same) */

.footer-bottom {
  text-align: right;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
  margin-top: 1rem;
}

.contact-info p:last-of-type {
  display: flex;
  align-items: center;
}

.social-icon svg {
  stroke: #086452;
  transition: stroke 0.3s ease;
}

.social-icon:hover svg {
  stroke: #054033;
}

.footer-search button svg {
  stroke: white;
}
</style>