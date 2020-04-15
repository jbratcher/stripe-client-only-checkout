export default {
  methods: {
    checkout: function(event) {
      this.stripe
        .redirectToCheckout({
          items: [{ sku: this.sku, quantity: 1 }],
          // Todo: handle fulfullment
          // https://stripe.com/docs/payments/checkout/fulfillment
          successUrl: this.successUrl,
          cancelUrl: this.cancelUrl
        })
        .then(function(result) {
          if (result.error) {
            var displayError = document.getElementById('error-message')
            displayError.textContent = result.error.message
          }
        })
    }
  },
  mounted() {
    this.stripe = Stripe(process.env.STRIPE_PUBLISHABLE_KEY)
  }
}
