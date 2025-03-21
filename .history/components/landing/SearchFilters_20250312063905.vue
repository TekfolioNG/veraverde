<template>
    <div class="filters">
        <span v-for="filter in availableFilters" :key="filter.id" @click="$emit('toggle-filter', filter.id)"
            class="filter-tag" :class="{ active: activeFilters.includes(filter.id) }">
            {{ filter.name }}
        </span>
    </div>
</template>

<script setup>
defineProps({
    availableFilters: {
        type: Array,
        required: true
    },
    activeFilters: {
        type: Array,
        default: () => []
    }
});

defineEmits(['toggle-filter']);
</script>

<style>
.filters {
    margin-bottom: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.filter-tag {
    padding: 0.25rem 0.75rem;
    border-radius: 16px;
    background-color: #e5e7eb;
    color: #4b5563;
    font-size: 0.875rem;
    cursor: pointer;
}

.filter-tag.active {
    background-color: #2563eb;
    color: white;
}
</style>