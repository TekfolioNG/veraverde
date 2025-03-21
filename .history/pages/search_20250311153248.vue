<template>
    <div class="search-results-container">
        <h1>Search Results for "{{ searchQuery }}"</h1>

        <div v-if="isLoading" class="loading">
            Loading results...
        </div>

        <div v-else-if="results.length > 0" class="results">
            <div v-for="(result, index) in results" :key="index" class="result-item">
                <h2>
                    <NuxtLink :to="result.path">{{ result.title }}</NuxtLink>
                </h2>
                <p>{{ result.excerpt }}</p>
            </div>
        </div>

        <div v-else class="no-results">
            No results found for "{{ searchQuery }}"
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const searchQuery = ref('');
const results = ref([]);
const isLoading = ref(false);

// Function to perform search
const performSearch = async (query) => {
    if (!query) return;

    isLoading.value = true;

    try {
        // This is where you would connect to your search API or backend
        // For example:
        // const { data } = await useFetch('/api/search', {
        //   method: 'GET',
        //   params: { q: query }
        // });
        // results.value = data.value;

        // For demonstration, we'll use dummy data
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulating API call
        results.value = [
            { title: 'Example Result 1', path: '/example1', excerpt: 'This is a sample result...' },
            { title: 'Example Result 2', path: '/example2', excerpt: 'Another sample result...' },
            // Real implementation would fetch actual results
        ];
    } catch (error) {
        console.error('Search error:', error);
        results.value = [];
    } finally {
        isLoading.value = false;
    }
};

// Update search query when route changes
watch(() => route.query.q, (newQuery) => {
    searchQuery.value = newQuery || '';
    performSearch(searchQuery.value);
}, { immediate: true });
definePageMeta({
    layout: "landing"
});

</script>