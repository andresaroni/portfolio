function textAnimado(element, speed = 100, callback = null) {

    const html = element.innerHTML
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = html

    element.innerHTML = ''
    element.style.opacity = 1

    let currentNodeIndex = 0

    function typeNextNode() {

        if (currentNodeIndex >= tempDiv.childNodes.length) {
            if (callback) callback()
            return
        }

        const node = tempDiv.childNodes[currentNodeIndex]
        currentNodeIndex++

        if (node.nodeType === Node.TEXT_NODE) {

            animateTextNode(node, typeNextNode)

        } else if (node.nodeType === Node.ELEMENT_NODE) {

            const clone = node.cloneNode(false)
            element.appendChild(clone)
            animateTextNode(node.firstChild, typeNextNode, clone)

        }

    }

    function animateTextNode(textNode, done, parentElement = element) {

        const text = textNode.textContent
        let i = 0

        const timer = setInterval(() => {
            if (i < text.length) {
                parentElement.innerHTML += text.charAt(i)
                i++
            } else {
                clearInterval(timer)
                done()
            }
        }, speed)
    }

    typeNextNode()
}

const titulo = document.getElementById('titulo')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')

textAnimado(titulo, 40, () => {

    textAnimado(p1, 20, () => {
        textAnimado(p2, 20)
    })

})

