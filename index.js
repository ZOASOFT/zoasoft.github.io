class App
{
    constructor()
    {
        this.cameraView = document.getElementById('cameraView');
        this.cameraView.addEventListener('click', this.getView.bind(this), false);
    }

    getView(e)
    {
        switch(e.target.id)
        {
            case 'cameraView':
                window.location.href = './camera/camera.html';
                break;
            
            default:
                break;
        }
    }
}

window.onload = () => {
    new App();
};