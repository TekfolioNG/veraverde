<template>
    <Teleport to="body">
        <Transition name="fade">
            <div v-if="isVisible" class="cookies-popup">
                <div class="cookies-content">
                    <p class="cookies-text">
                        This site uses cookies to improve your experience. You can restrict cookies through your
                        browser; however that may impair site functionality.
                    </p>
                    <div class="button-container">
                        <button @click="closePopup" class="cookies-button">
                            GOT IT
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isVisible = ref(false);

const closePopup = () => {
    isVisible.value = false;
    // Store in localStorage to remember user's choice
    localStorage.setItem('cookiesAccepted', 'true');
};

onMounted(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookiesAccepted');

    if (!hasAccepted) {
        // Show popup after a small delay
        setTimeout(() => {
            isVisible.value = true;
        }, 1000);
    }
});
</script>

<style scoped>
.cookies-popup {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 1000;
    max-width: 300px;
}

.cookies-content {
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(5px);
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.cookies-text {
    color: white;
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
}

.button-container {
    display: flex;
    justify-content: center;
    width: 100%;
}

.cookies-button {
    background-color: #10b981;
    /* Emerald-500 for green button */
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
}

.cookies-button:hover {
    background-color: #059669;
    /* Emerald-600 on hover */
}

/* Transition effect */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>