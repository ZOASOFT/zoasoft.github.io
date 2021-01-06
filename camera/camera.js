class App
{
    constructor()
    {
        // app message 수신부
        window.addEventListener('message', this.getMessage.bind(this), false);

        // button#camera
        this.camera = document.getElementById('camera');
        this.camera.addEventListener('click', this.getCamera.bind(this), false);

        // img#gallery
        this.gallery = document.getElementById('gallery');

        // button#btnBack
        this.btnHome = document.getElementById('btnHome');
        this.btnHome.addEventListener('click', this.getBtnHome.bind(this), false);
    }

    getCamera(e)
    {
        const data = {
            id: 'getCamera'
        }
        
        window.parent.postMessage(data, '*');
    }

    getMessage(e)
    {
        switch(e.data.id)
        {
            case 'setGallery':
                this.gallery.src = `data:image/jpeg;base64,${e.data.imgData}`;
                break;
            
            default:
                break;
        }
    }

    // iFrame 메인화면으로 돌아가기
    getBtnHome()
    {
        window.location.href = '../index.html';
    }
}

window.onload = () => {
    new App();
};