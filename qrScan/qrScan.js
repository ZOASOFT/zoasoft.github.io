class App
{
    constructor()
    {
        // app message 수신부
        window.addEventListener('message', this.getMessage.bind(this), false);

        // button#camera
        this.camera = document.getElementById('scanner');
        this.camera.addEventListener('click', this.getCamera.bind(this), false);

        // img#gallery
        this.gallery = document.getElementById('gallery');
    }

    getCamera(e)
    {
        const data = {
            id: 'getScanner'
        }
        
        window.parent.postMessage(data, '*');
    }

    getMessage(e)
    {
        switch(e.data.id)
        {
            case 'setGallery':
                this.gallery.innerText = `${e.data.imgData}`;
                break;
            
            default:
                break;
        }
    }
}

window.onload = () => {
    new App();
};