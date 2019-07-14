<template>
    <div class="container">
      <header>
        <a href="#" to="/">返回</a>
      </header>
      {{app}}
      <footer>
      <ul>
        <li>
          <router-link to="body">tobody</router-link>
        </li>
      </ul>
    </footer>
    </div>
    
</template>

<script>
export default {
    name: 'index',
    data() {
      return {
        app: '傅颖',
      }
    }
}
</script>
