window.addEventListener('keydown', (e) => {
  //   console.log(e.keyCode)
  let item = document.querySelector(`.item[data-key='${e.keyCode}']`)
  let audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
  // console.log(audio)
  audio.currentTime = 0
  audio.play()
  item.classList.add('playing')
  setTimeout(() => {
    item.classList.remove('playing')
  }, 80)
})
