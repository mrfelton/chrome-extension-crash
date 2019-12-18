window.primeTrustReady = function(pt) {
  pt.launchCreditCard({
    target: document.getElementById('main'),
    resourceTokenHash: 'E7wL5aeZrr4d-ZwT1CVCcqrtOJVfYNIh',
    events: {
      loaded() {
        const iframe = document.querySelector('#main iframe')
        iframe.setAttribute('scrolling', 'yes')
        iframe.style.height = '100vh'
      },
    },
  })
}
