export async function cargarComponentes(id, htmlPath, cssPath, jsPath) {
    
    const contenedor = document.getElementById(id)
    const response = await fetch(htmlPath)
    const html = await response.text()
    contenedor.innerHTML = html

    if (cssPath) {

        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = cssPath
        document.head.appendChild(link)
        
    }

    if (jsPath){

        const script = document.createElement('script')
        script.src = jsPath
        script.type = 'module'
        document.body.appendChild(script)

    }

}
