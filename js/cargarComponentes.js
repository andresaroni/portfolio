export async function cargarComponentes(id, htmlPath, jsPath) {
    
    const contenedor = document.getElementById(id)
    const response = await fetch(htmlPath)
    const html = await response.text()
    contenedor.innerHTML = html

    if (jsPath){

        const script = document.createElement('script')
        script.src = jsPath
        script.type = 'module'
        document.body.appendChild(script)

    }

}
