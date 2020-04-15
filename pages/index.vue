<template>
    <section>
      <h1>
        Stripe Client Only Checkout
      </h1>
      <p>
        An example Stripe Checkout for Nuxt static pages
      </p>
        <button @click="checkout" role="link">Stripe Checkout Link</button>
    </section>
</template>

<script>
import stripeCheckoutMixin from '../mixins/stripeCheckoutMixin'
export default {
  mixins: [stripeCheckoutMixin],
  data() {
    return {
      sku: 'sku_from_stripe_dashboard_product_listing',
      successUrl: 'https://google.com',
      cancelUrl: 'https://bing.com'
    }
  }
}
</script>

<style>

*, *:after, *:before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  word-break: keep-all;
}

section {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 1rem;
  text-align: center;
}

section > * {
  margin: 1rem 0;
}

h1 {
  font-size: 1.5rem;
}

p {
  font-size: 1.25rem;
}

button {
  background: #6200EE;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1.125rem;
  padding: 1rem 0.75rem;
}
</style>
