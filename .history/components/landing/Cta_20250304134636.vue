<template>
  <div class="donation-cta">
    <h2 class="donation-title">Help someone live a life as full as your own</h2>
    <div class="cta-actions">
      <button class="primary-cta" @click="handleGiveNow">Give now</button>
      <button class="secondary-cta" @click="handleMaybeLater">Maybe later</button>
    </div>
  </div>
</template>

<script setup>
const handleGiveNow = () => {

  navigateToDonationPage();
};

const handleMaybeLater = () => {
  // Add any optional tracking or dismissal logic
  closeModal();
};

// Placeholder functions - replace with actual implementation
const navigateToDonationPage = () => {
  // Example: this.$router.push('/donate')
};

const closeModal = () => {
  // Example: this.$emit('close')
};
</script>

<style scoped>
.donation-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  max-width: 800px;
  width: 100%;
  margin: 2rem auto;

}

.donation-title {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2.5rem;
  line-height: 1.4;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.primary-cta {
  background-color: #086452;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.primary-cta:hover {
  background-color: #05403a;
}

.secondary-cta {
  background-color: transparent;
  color: #086452;
  border: 2px solid #086452;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.secondary-cta:hover {
  background-color: rgba(8, 100, 82, 0.1);
}

@media (max-width: 768px) {
  .donation-title {
    font-size: 1.5rem;
  }

  .cta-actions {
    flex-direction: column;
    width: 100%;
  }

  .primary-cta,
  .secondary-cta {
    width: 100%;
    max-width: 250px;
  }

  .primary-cta {
    margin-bottom: 0.75rem;
  }
}
</style>