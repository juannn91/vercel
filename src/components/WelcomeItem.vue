<template>
  <div v-if="loading">
    <h1>cargando</h1>
  </div>
  <div v-else>
    <ul>
      <li v-for="(character, index) in character" :key="index">
        {{ character.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { fetchCharacters } from "@/modules/characters";

const loading = ref(false);
const character = ref([]);

onMounted(() => {
  fetch();
});

async function fetch() {
  loading.value = true;
  let res = await fetchCharacters();
  character.value = res.results;
  loading.value = false;
}
// --- With Objects ----
// export default {
//   data() {
//     return {
//       loading: false,
//       character: [],
//     };
//   },
//   methods: {
//     async fetch() {
//       this.loading = true;
//       let res = await fetchCharacters();
//       this.character = res.results;
//       this.loading = false;
//     },
//   },
//   mounted() {
//     this.fetch();
//   },
// };
</script>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
