class App
{
    constructor()
    {
        // Camera Button Event
        this.cameraView = document.getElementById('cameraView');
        this.cameraView.addEventListener('click', this.getView.bind(this), false); 

        // GPS Button Event
        this.gpsView = document.getElementById('gpsView');
        this.gpsView.addEventListener('click', this.getView.bind(this), false);
    }

    getView(e)
    {
        switch(e.target.id)
        {
            case 'cameraView':
                window.location.href = './camera/camera.html';
                break;
                
            case 'gpsView':
                window.location.href = './gps/gps.html';
                break;
        
            default:
                break;
        }
    }
}

window.onload = () => {
    new App();
};