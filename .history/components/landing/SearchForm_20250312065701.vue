<template>
    <form @submit.prevent="submitSearch" class="search-form">
        <div class="search-input-container">
            <input v-model="localQuery" type="text" placeholder="Search..." class="search-input" aria-label="Search" />
            <button type="submit" class="search-button">
                <span class="sr-only">Search</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </button>
        </div>
    </form>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const localQuery = ref('');

onMounted(() => {
    localQuery.value = route.query.q || '';
});

const submitSearch = () => {
    if (localQuery.value.trim()) {
        router.push({
            path: '/search',
            query: { q: localQuery.value.trim() }
        });
    }
};
</script>

<style>
.search-form {
    margin-bottom: 2rem;
}

.search-input-container {
    display: flex;
    max-width: 500px;
    position: relative;
}

.search-input {
    flex: 1;
    padding: 0.75rem 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s ease;
    width: 100%;
}

.search-input:focus {
    border-color: #901F61;
}

.search-button {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #901F61;
    cursor: pointer;
    padding: 0.25rem;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
</style>