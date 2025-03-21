<template>
  <div class="contact-us-section">
    <div class="content-wrapper">
      <h2 class="section-title">Contact us</h2>
      <p class="subtitle">get the help you need from OUR CARE TEAM</p>

      <div class="intro-text">
        <h3 class="thank-you">Thank you for reaching out to us</h3>
        <p class="description">
          If you have any concerns, questions, comments or suggestions, we want to hear from you. We know that bringing
          people together to
          end poverty begins with great communication. That's why we have numerous ways to connect and want to help you
          find what you
          need as quickly as possible.
        </p>
      </div>

      <div class="contact-options">
        <div class="contact-card">
          <div class="icon-container bg-emerald-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="10" r="3"></circle>
              <path d="M12 16v.01"></path>
            </svg>
          </div>
          <h4 class="card-title">Whatsapp chat</h4>
          <p class="card-description">
            with a member of our friendly, knowledgeable Care Team.
          </p>
          <div class="contact-form">
            <input type="text" placeholder="Name" class="form-input" />
            <input type="email" placeholder="Email address" class="form-input" />
            <input type="tel" placeholder="Phone number" class="form-input" />
            <textarea placeholder="Message" class="form-textarea"></textarea>
            <button class="submit-button">TALK TO THE TOEI TEAM</button>
          </div>
        </div>

        <div class="contact-card">
          <div class="icon-container bg-emerald-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
              </path>
            </svg>
          </div>
          <h4 class="card-title">CONTACT FORM ABOVE</h4>
          <p class="card-description">
            Monday – Friday<br>
            8:00 a.m. – 6:00 p.m. (WAT)
          </p>
        </div>

        <div class="contact-card">
          <div class="icon-container bg-emerald-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <h4 class="card-title">Our Office</h4>
          <div class="contact-details">
            <p class="address">
              121 Ogudu Road, Lagos, Nigeria
            </p>
            <p class="phone">
              (+234) 703 631 9444<br>
              0814 857 1524
            </p>
            <p class="email">
              <a href="mailto:support@toei.org">support@toei.org</a><br>
              <a href="mailto:enquiry@toei.org">enquiry@toei.org</a>
            </p>
          </div>
        </div>
      </div>

      <div class="footer-message">
        <p>
          We want you, and all our sponsors and supporters, to have the best possible experience in partnering with
          TOEI!
          If you have <span class="highlight">feedback, corrections</span> or are having <span class="highlight">issues
            with our website</span>,
          we want to know about it. Please use our <span class="highlight-link">WEB FEEDBACK FORM</span> to share your
          comments.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUsSection'
}
</script>

<style scoped>
.contact-us-section {
  padding: 3rem 0;
  background-color: #f9f9f9;
}

.content-wrapper {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.subtitle {
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
  font-style: italic;
}

.intro-text {
  margin-bottom: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.thank-you {
  font-size: 1.5rem;
  color: #444;
  margin-bottom: 1rem;
  font-weight: 500;
  font-style: italic;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
}

.contact-options {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.contact-card {
  background-color: #f2f2f2;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  flex: 1;
  min-width: 280px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-container {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
}

.bg-emerald-700 {
  background-color: #047857;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.card-description {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-input,
.form-textarea {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  width: 100%;
}

.form-textarea {
  min-height: 100px;
  resize: vertical;
}

.submit-button {
  padding: 0.75rem 1.5rem;
  background-color: #047857;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 0.9rem;
}

.submit-button:hover {
  background-color: #036c4e;
}

.contact-details {
  text-align: left;
  font-size: 0.95rem;
  color: #444;
  line-height: 1.6;
}

.address,
.phone {
  margin-bottom: 1rem;
}

.email a {
  color: #047857;
  text-decoration: none;
  transition: color 0.3s;
}

.email a:hover {
  color: #036c4e;
  text-decoration: underline;
}

.footer-message {
  max-width: 900px;
  margin: 0 auto;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
}

.highlight {
  font-weight: 600;
  color: #444;
}

.highlight-link {
  font-weight: 600;
  color: #047857;
  cursor: pointer;
  text-decoration: underline;
}

@media (max-width: 992px) {
  .content-wrapper {
    width: 90%;
  }

  .contact-options {
    flex-direction: column;
  }

  .contact-card {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .thank-you {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .content-wrapper {
    width: 95%;
  }

  .section-title {
    font-size: 1.8rem;
  }
}
</style>