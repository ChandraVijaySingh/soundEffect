const sounds = ['lost', 'happy', 'scary', 'tada']

sounds.forEach(sound => {
    const btn = document.createElement('button') 
    btn.classList.add('btn') // Fix this line
    btn.innerText = sound

    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})
