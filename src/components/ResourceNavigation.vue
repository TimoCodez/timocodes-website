<template>
    <nav class="resource-nav bg-gray-800 p-4 rounded-lg">
      <div class="flex justify-between items-center md:hidden">
        <h2 class="text-xl font-bold text-green-400">Resources</h2>
        <button @click="toggleMenu" class="text-green-400 hover:text-green-300">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <ul :class="['space-y-2', {'hidden': !isMenuOpen}, 'md:block']">
        <li v-if="rootResource">
          <a :href="'/resources/'" class="text-pink-500 hover:text-pink-400 transition-colors font-bold">
            {{ rootResource.data.title }}
          </a>
        </li>
        <li v-for="resource in topLevelResources" :key="resource.slug">
          <a :href="`/resources/${resource.slug}/`" class="text-purple-400 hover:text-purple-300 transition-colors">
            {{ resource.data.title }}
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'ResourceNavigation',
    props: {
      resources: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        isMenuOpen: false
      }
    },
    computed: {
      rootResource() {
        return this.resources.find(resource => resource.slug === 'index');
      },
      topLevelResources() {
        return this.resources
          .filter(resource => !resource.slug.includes('/') && resource.slug !== 'index')
          .sort((a, b) => a.data.title.localeCompare(b.data.title));
      }
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  }
  </script>
  
  <style scoped>
  .resource-nav {
    @apply sticky top-4;
  }
  @media (min-width: 768px) {
    .resource-nav {
      max-height: calc(100vh - 2rem);
      overflow-y: auto;
    }
  }
  </style>