document.addEventListener("DOMContentLoaded", function(){
  minusButtonListener()
  plusButtonListener()
  heartButtonListener()
  pauseButtonListener()
  submitButtonListener()

})

function increaseCounterSecond(){
  let counter = document.querySelector('#counter')
  counter.innerText = parseInt(counter.innerText) + 1
}
let timerId = window.setInterval(increaseCounterSecond, 1000)

function minusButtonListener(){
  document.querySelector('#minus').addEventListener('click', function(event){
    let counter = document.querySelector('#counter')
    counter.innerText = parseInt(counter.innerText) - 1
  })
}


function plusButtonListener(){
  document.querySelector('#plus').addEventListener('click', function(event){
    let counter = document.querySelector('#counter')
    counter.innerText = parseInt(counter.innerText) + 1
  })
}

let likeObject = {}
function heartButtonListener(){
  document.querySelector('#heart').addEventListener('click', addLikes)

  function addLikes(event){
    let likeObjectKeys = Object.keys(likeObject)
    if(likeObjectKeys.includes(counter.innerText)){
      likeObject[counter.innerText] += 1
    }
    else {
      likeObject[counter.innerText] = 1
    }

    for (let key in likeObject){
      let likeElement = document.querySelector('.likes')
      let liElement = document.createElement('li')
      if (!likeElement.innerText.includes(key)){
        liElement.innerText = `The number ${key} has ${likeObject[key]} likes`
        likeElement.appendChild(liElement)
        liElement.className = `liForNumber${key}`
      }
      else if ((document.querySelector(`.liForNumber${key}`))){
        let selectedLi = document.querySelector(`.liForNumber${key}`)
        selectedLi.innerText = `The number ${key} has ${likeObject[key]} likes`
      }
    }
  }
}

function pauseButtonListener(){
  let pauseButton = document.querySelector('#pause')
  pauseButton.addEventListener('click', stop)

  function stop(event){
    if (pauseButton.innerText == "pause"){
      window.clearInterval(timerId)
      pauseButton.innerText = "resume"
    }
    else {
      timerId = window.setInterval(increaseCounterSecond, 1000)
      pauseButton.innerText = "pause"
    }
  }
}

function submitButtonListener(){
  document.querySelector('#comment-form').addEventListener('submit', addComment)

  function addComment(event){
    let comment = document.querySelector('#submitComment').value
    let pElement = document.createElement('p')
    pElement.innerText = comment
    document.querySelector('#list').appendChild(pElement)
    document.querySelector('#comment-form').reset()
    event.preventDefault()
  }
}
