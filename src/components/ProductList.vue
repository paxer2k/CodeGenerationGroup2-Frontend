<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Products</h2>
      <div class="row">
        <product-list-item v-for="product in products" :key="product.id" :product="product" /> <!-- :product refers to v-for="product" and = "product" refers to the prop object product -->
      </div>
    </div>
  </section>
</template>

<script>
import ProductListItem from "./ProductListItem.vue";

export default {
  name: "ProductList",
  components: {
    ProductListItem,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.products = json;
      });
  },
};
</script>

<style>

</style>