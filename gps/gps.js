class Gps
{

    constructor()
    {
        // app message 수신부
        window.addEventListener('message', this.getMessage.bind(this), false);

        //checkBox#gpsToggle ::ON/OFF 토글
        this.check = document.getElementById('gpsToggle');
        this.check.addEventListener('click', this.getGpsToggle.bind(this), false);

        // input#latitude
        this.latitude = document.getElementById('latitude');

        // input#longitude
        this.longitude = document.getElementById('longitude');
    }
    
    // message 수신
    getMessage(e)
    {
        switch(e.data.id)
        {
            case 'setGps':
                this.latitudeG = e.data.latitude;
                this.longitudeG = e.data.longitude;
                
                this.latitude.value = this.latitudeG;
                this.longitude.value = this.longitudeG;

                break;

            default:
                break;
        }
    }

    // GPS 실행 message 발신
    getGps(e)
    {
        const data = {
            id: 'getGps'
        }
        
        window.parent.postMessage(data, '*');
    }

    // GPS 해제 message 발신
    getStop(e)
    {
        const data = {
            id: 'getStop'
        }
        
        window.parent.postMessage(data, '*');
    }

    // GPS [ON/OFF] Toggle
    getGpsToggle(e)
    {        
        switch(this.check.checked)
        {  
            case true:
                this.getGps();
                console.log("GPS ON");
                break;

            default:
                this.getStop();
                console.log("GPS OFF");
                break;
        }
    }
}

window.onload = () => {
    new Gps();
};