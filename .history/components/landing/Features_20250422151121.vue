<template>
  <section class="who-we-are-section py-16 lg:py-24">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 lg:gap-20">
        <!-- Left Content Column -->
        <div class="content-column">
          <h2 class="text-3xl lg:text-4xl font-bold mb-6">Who We Are</h2>

          <div class="tagline mb-8">
            <p class="text-xl lg:text-2xl font-bold mb-1">People. Projects. Premium Performance.</p>
            <p class="text-lg italic text-gray-700">– PPIL delivers value where it matters most.</p>
          </div>

          <div class="description space-y-4">
            <p>PPIL is one of Nigeria's most trusted hybrid construction and infrastructure firms — bringing together
              engineering, project management, and facility services under one roof. Since 2014, we've helped shape
              cities and communities through high-impact projects that deliver true value.</p>

            <p>From urban road construction to energy infrastructure, industrial complexes to facility upgrades — we
              provide tailored solutions backed by technical know-how, deep local insight, and a clear focus on quality.
            </p>

            <p>Our team is made up of experienced professionals who think beyond the blueprint, using smart,
              forward-thinking approaches to deliver projects that are built to last. With every project, we aim to
              exceed expectations — not just with the final product, but with how we deliver it.</p>

            <p>Whether you're a public agency, private investor, or development partner, choosing PPIL means working
              with a team that's focused, agile, and fully invested in your success.</p>
          </div>

          <div class="mt-8">
            <a href="/about-us"
              class="inline-flex items-center border-2 border-green-700 text-green-700 font-semibold px-6 py-3 hover:bg-green-700 hover:text-white transition-colors duration-300">
              About Us
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Right Stats Column -->
        <div class="stats-column bg-gray-50 p-8 lg:p-12">
          <h3 class="text-2xl font-bold mb-8 text-green-800">Quick Stats</h3>

          <div class="grid grid-cols-2 gap-8">
            <div class="stat-item">
              <div class="text-3xl lg:text-4xl font-bold text-green-700 mb-2">10+</div>
              <div class="text-gray-700">Years of Delivering Projects</div>
            </div>

            <div class="stat-item">
              <div class="text-3xl lg:text-4xl font-bold text-green-700 mb-2">100+</div>
              <div class="text-gray-700">Completed Infrastructure & Facility Projects</div>
            </div>

            <div class="stat-item">
              <div class="text-3xl lg:text-4xl font-bold text-green-700 mb-2">8</div>
              <div class="text-gray-700">Sectors Served Nationwide</div>
            </div>

            <div class="stat-item">
              <div class="text-3xl lg:text-4xl font-bold text-green-700 mb-2">1 Goal</div>
              <div class="text-gray-700">Delivering Value that Endures</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhoWeAreSection'
}
</script>

<style scoped>
.who-we-are-section {
  position: relative;
}

.who-we-are-section::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 200px;
  width: 200px;
  background-color: rgba(234, 179, 8, 0.1);
  clip-path: polygon(100% 0, 0 0, 100% 100%);
  z-index: 1;
}

.stats-column {
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
}

.stats-column::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 6px;
  width: 100%;
  background-color: #047857;
}

@media (max-width: 768px) {
  .stats-column {
    margin-top: 2rem;
  }
}
</style>