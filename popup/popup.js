window.primeTrustReady = function(pt) {
  pt.launchCreditCard({
    target: document.getElementById('main'),
    resourceTokenHash: 'vs6dbMJZprn2NVRVxJYOYD6tIPIF2Ajt',
    events: {
      loaded() {
        const iframe = document.querySelector('#main iframe')
        iframe.setAttribute('scrolling', 'yes')
        iframe.style.height = '100vh'
      },
    },
  })
}
