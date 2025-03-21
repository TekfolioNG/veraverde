<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-column take-action">
        <img src="@/assets/img/toei-logo-footer.png" alt="The Oaktree Empowerment Initiative Logo" class="footer-logo">
        <p class="about-description">
          Our programs focus on skills acquisition and rehabilitation for individuals seeking fresh starts after
          incarceration, while also building vital community infrastructure and
          self-sustaining communities across Nigeria.
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

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.site-footer {
  background-color: #f4f4f4;
  padding: 4rem 2rem 2rem;
  /* Reduced bottom padding */
  color: #333;
}

.footer-container {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.25fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;
}

.take-action {
  max-width: 350px;
}

.about-description {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.footer-column h4 {
  color: #054033;
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
  margin: 0;
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

/* Social media icons */
.social-media {
  margin-top: 1.5rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.social-icon {
  color: #086452;
  font-size: 1.5rem;
  text-decoration: none;
}

.footer-bottom {
  text-align: right;
  padding-top: 0.75rem;
  /* Reduced top padding */
  padding-bottom: 0.5rem;
  /* Added bottom padding */
  border-top: 1px solid #ddd;
  margin-top: 1.5rem;
  /* Reduced top margin */
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
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

.social-icon svg {
  stroke: #086452;
  transition: stroke 0.3s ease;
}

.social-icon:hover svg {
  stroke: #054033;
}

@media (max-width: 992px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .contact {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .site-footer {
    padding: 3rem 2rem 1.5rem;
    /* Further reduced padding for mobile */
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .column-grid {
    grid-template-columns: 1fr 1fr;
  }

  /* Center programs and organization columns */
  .programs h4,
  .organization h4 {
    text-align: center;
  }

  .programs .column-grid,
  .organization .column-grid {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }

  .programs ul,
  .organization ul {
    text-align: center;
  }

  .contact {
    grid-column: span 1;
  }

  .take-action {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-logo {
    align-self: center;
  }

  .social-media {
    display: flex;
    justify-content: center;
  }

  .social-icons {
    justify-content: center;
  }

  .footer-bottom {
    margin-top: 1.25rem;
    padding-top: 0.5rem;

  }
}

@media (max-width: 480px) {
  .site-footer {
    padding: 2.5rem 1.5rem 1rem;
    /* Further reduced padding for small mobile */
  }

  .column-grid {
    grid-template-columns: 1fr;
  }

  /* Keep programs and organization centered on smaller screens */
  .programs .column-grid,
  .organization .column-grid {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .programs ul,
  .organization ul {
    width: 100%;
  }

  .footer-bottom {
    text-align: center;
    margin-top: 1rem;
    /* Further reduced for small mobile */
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>