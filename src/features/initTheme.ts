const initTheme = () => {
  if (
    window.matchMedia('(prefers-color-scheme)').media !== 'not all' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.body.dataset.theme = 'dark'
  } else {
    document.body.dataset.theme = ''
  }
}

export default initTheme
