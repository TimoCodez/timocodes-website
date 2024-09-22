<template>
  <nav class="bg-gray-800 text-green-400 p-4 relative z-50">
    <div class="container mx-auto flex justify-between items-center">
      <a href="/" class="text-2xl font-bold hover:text-green-300 transition-colors">
        <span class="text-purple-500">&lt;</span>Timo<span class="text-purple-500">Codes</span><span class="text-purple-500">/&gt;</span>
      </a>
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-green-400 hover:text-green-300">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <ul :class="['md:flex', 'md:space-x-4', 'md:items-center', {'hidden': !isMenuOpen, 'block fixed inset-0 top-16 bg-gray-800 p-4 space-y-4 z-50': isMenuOpen}]">
        <li><a @click="closeMenu" href="/" class="hover:text-purple-400 transition-colors block">Home</a></li>
        <li><a @click="closeMenu" href="/projects" class="hover:text-purple-400 transition-colors block">Projects</a></li>
        <li><a @click="closeMenu" href="/blog" class="hover:text-purple-400 transition-colors block">Blog</a></li>
        <li><a @click="closeMenu" href="/resources" class="hover:text-purple-400 transition-colors block">Resources</a></li>
        <li><a @click="closeMenu" href="/contact" class="hover:text-purple-400 transition-colors block">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : ''
    },
    closeMenu() {
      this.isMenuOpen = false
      document.body.style.overflow = ''
    }
  }
}
</script>