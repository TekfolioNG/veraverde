<template>
    <div class="search-results-container">
        <h1>Search Results for "{{ searchQuery }}"</h1>

        <!-- Search Form Component -->
        <SearchForm />

        <!-- Filters Component -->
        <SearchFilters :available-filters="availableFilters" :active-filters="activeFilters"
            @toggle-filter="toggleFilter" />

        <!-- Error Message -->
        <div v-if="errorMessage" class="error-message">
            <p>{{ errorMessage }}</p>
            <button @click="performSearch(searchQuery)">Try Again</button>
        </div>

        <!-- Loading State -->
        <div v-if="isLoading" class="loading">
            Loading results...
        </div>

        <!-- Search Results -->
        <div v-else-if="results.length > 0" class="results">
            <div v-for="(result, index) in results" :key="index" class="result-item">
                <h2>
                    <NuxtLink :to="result.path" @click="handleResultClick(result, index)">
                        {{ result.title }}
                    </NuxtLink>
                </h2>
                <p>{{ result.excerpt }}</p>
            </div>
        </div>

        <!-- No Results Message -->
        <div v-else class="no-results">
            No results found for "{{ searchQuery }}"
        </div>

        <!-- Pagination -->
        <div v-if="totalResults > 0" class="pagination">
            <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
                Previous
            </button>

            <button v-for="page in totalPages" :key="page" @click="goToPage(page)"
                :class="{ active: currentPage === page }">
                {{ page }}
            </button>

            <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">
                Next
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useSearchAnalytics } from '~/composables/useSearchAnalytics';

const route = useRoute();
const searchQuery = ref('');
const results = ref([]);
const isLoading = ref(false);
const errorMessage = ref('');
const currentPage = ref(1);
const resultsPerPage = ref(10);
const totalResults = ref(0);
const { trackSearch, trackResultClick } = useSearchAnalytics();

// Filter setup
const availableFilters = ref([
    { id: 'blog', name: 'Blog' },
    { id: 'docs', name: 'Documentation' },
    { id: 'products', name: 'Products' }
]);
const activeFilters = ref([]);

// Pagination computed property
const totalPages = computed(() => Math.ceil(totalResults.value / resultsPerPage.value));

// Search function
const performSearch = async (query) => {
    if (!query) return;

    isLoading.value = true;
    errorMessage.value = '';

    try {
        // Real API connection
        const { data } = await useFetch('/api/search', {
            method: 'GET',
            params: {
                q: query,
                page: currentPage.value,
                limit: resultsPerPage.value,
                filters: activeFilters.value.join(',')
            }
        });

        results.value = data.value.items || [];
        totalResults.value = data.value.total || 0;

        // Track successful search
        trackSearch(query, data.value.total || 0);
    } catch (error) {
        console.error('Search error:', error);
        if (error.response?.status === 429) {
            errorMessage.value = 'Too many requests. Please try again later.';
        } else if (error.response?.status === 500) {
            errorMessage.value = 'Server error. Our team has been notified.';
        } else if (!navigator.onLine) {
            errorMessage.value = 'You appear to be offline. Please check your connection.';
        } else {
            errorMessage.value = 'Failed to retrieve search results. Please try again.';
        }
        results.value = [];
    } finally {
        isLoading.value = false;
    }
};

// Filter toggle function
const toggleFilter = (filterId) => {
    const index = activeFilters.value.indexOf(filterId);
    if (index === -1) {
        activeFilters.value.push(filterId);
    } else {
        activeFilters.value.splice(index, 1);
    }
    currentPage.value = 1; // Reset to first page when filters change
    performSearch(searchQuery.value);
};

// Pagination function
const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
        performSearch(searchQuery.value);
    }
};

// Result click tracking
const handleResultClick = (result, index) => {
    trackResultClick(searchQuery.value, result.id, index + 1);
};

// Watch for query changes
watch(() => route.query.q, (newQuery) => {
    searchQuery.value = newQuery || '';
    currentPage.value = 1; // Reset to first page on new search
    performSearch(searchQuery.value);
}, { immediate: true });

// Page meta
definePageMeta({
    layout: "landing"
});
</script>

<style>
.search-results-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

h1 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #333;
}

.loading {
    text-align: center;
    padding: 2rem;
    color: #666;
}

.result-item {
    padding: 1.25rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease;
}

.result-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.result-item h2 {
    margin-top: 0;
    font-size: 1.2rem;
}

.result-item h2 a {
    color: #2563eb;
    text-decoration: none;
}

.result-item p {
    color: #4b5563;
    margin-bottom: 0;
}

.no-results {
    text-align: center;
    padding: 3rem;
    color: #666;
}

.pagination {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    gap: 0.5rem;
}

.pagination button {
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    background: white;
    border-radius: 4px;
    cursor: pointer;
}

.pagination button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.pagination button.active {
    background-color: #2563eb;
    color: white;
    border-color: #2563eb;
}

.error-message {
    padding: 1rem;
    margin: 1rem 0;
    background-color: #fee2e2;
    border-radius: 8px;
    color: #991b1b;
    text-align: center;
}

.error-message button {
    background-color: #ef4444;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    margin-top: 0.5rem;
    cursor: pointer;
}
</style>