<template>
  <div ref="container"></div>
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
  },
  mounted() {
    fetch(this.src)
        .then((res) => res.text())
        .then((html) => {
          this.$refs.container.innerHTML = html;
        });
  },
};
</script>
