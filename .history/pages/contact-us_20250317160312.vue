<template>
  <div class="contact-us-section">
    <div class="content-wrapper">
      <h2 class="section-title">Contact Us</h2>
      <p class="subtitle">We’re here to help you make a difference</p>

      <div class="intro-text">
        <h3 class="thank-you">Your voice matters to us</h3>
        <p class="description">
          At The Oaktree Empowerment Initiative, we believe in the power of connection. Whether you have questions,
          ideas, or want to partner with us, we’re here to listen and support you. Together, we can rebuild lives and
          transform communities across Nigeria.
        </p>
      </div>

      <div class="contact-options">
        <!-- Contact Option 1: WhatsApp Chat -->
        <div class="contact-card">
          <div class="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
              stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="10" r="3"></circle>
              <path d="M12 16v.01"></path>
            </svg>
          </div>
          <h4 class="card-title">WhatsApp Chat</h4>
          <p class="card-description">
            Chat directly with our team for quick assistance. We’re here to answer your questions and provide support.
          </p>
          <div class="contact-form">
            <input type="text" placeholder="Your Name" class="form-input" />
            <input type="email" placeholder="Your Email" class="form-input" />
            <input type="tel" placeholder="Your Phone Number" class="form-input" />
            <textarea placeholder="Your Message" class="form-textarea"></textarea>
            <button class="submit-button">Send Message</button>
          </div>
        </div>

        <!-- Contact Option 2: Visit Us -->
        <div class="contact-card">
          <div class="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
              stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <h4 class="card-title">Visit Us</h4>
          <p class="card-description">
            Come see us at our office. We’d love to meet you and discuss how we can work together to transform
            communities.
          </p>
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
          Your feedback is invaluable to us. If you have suggestions, corrections, or are experiencing issues with our
          website, please let us know using our <span class="highlight-link">Feedback Form</span>. Together, we can
          create lasting change.
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
  padding: 4rem 0;
  background-color: #fafafa;
}

.content-wrapper {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  font-style: italic;
}

.intro-text {
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.thank-you {
  font-size: 1.5rem;
  color: #444;
  margin-bottom: 1rem;
  font-weight: 600;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
}

.contact-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-container {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  background-color: #f0f0f0;
}

.card-title {
  font-size: 1.25rem;
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
  max-width: 800px;
  margin: 0 auto;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
}

.highlight-link {
  font-weight: 600;
  color: #047857;
  cursor: pointer;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .contact-options {
    grid-template-columns: 1fr;
  }

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