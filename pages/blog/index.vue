<template>
  <div>
    <h1>Blog</h1>
    <div v-if="posts">
      <article v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body.slice(0, 100) }}
          <NuxtLink :to="`/blog/${post.id}`">plus de détails</NuxtLink>
        </p>
      </article>
    </div>
    <div v-else>Chargement ...</div>
  </div>
</template>

<script setup>
const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
  lazy: true
})
</script>

<style></style>