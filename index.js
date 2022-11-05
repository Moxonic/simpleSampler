let kick = './Samples/kick-bass.mp3';
let sn = './Samples/snare.mp3';
let hh = './Samples/crash.mp3';

let samples = [kick, sn, hh]



for(var i=0; i<samples.length; i++)
    document.querySelectorAll('button')[i].addEventListener('click',function(e){    
        var buttonInnerHtml = this.innerHTML;
        let fieldLetter= e.target.classList[1];
        console.log(e.target);
        switch (buttonInnerHtml) {
            case "kik":
                var kik = new Audio('./Samples/kick-bass.mp3');
                kik.play();
                break;
            case 'SN':
                var sn = new Audio('./Samples/snare.mp3');
                sn.play();
                break;
            case 'HH': 
            let hh = new Audio('./Samples/crash.mp3');
            hh.play();
            
            default:
                break;
        }
        flash(fieldLetter);
}); 

document.addEventListener('keydown', function(e){
    console.log('keydown:',e);
    
    makesound(e);
    flash(e);
});

function makesound(e){
switch (e.key) {
        case "a":
            console.log('kik');
            var kik = new Audio('./Samples/kick-bass.mp3');
            kik.play();
            break;
        case 's':
            console.log('sn');
            var sn = new Audio('./Samples/snare.mp3');
            sn.play();
            break;
        case 'd': 
            console.log('hh');
        let hh = new Audio('./Samples/crash.mp3');
        hh.play();
        
        default:
            break;
    }
};

function flash(currentKey){
    if(typeof currentKey === 'string'){
        document.querySelector('.'+ currentKey).classList.add('pressed');
        setTimeout(function(){
            document.querySelector('.'+ currentKey).classList.remove('pressed');
        }, 100);
    } else {
        document.querySelector('.'+ currentKey.key).classList.add('pressed');
        setTimeout(function(){
            document.querySelector('.'+ currentKey.key).classList.remove('pressed');
        }, 100);
    };

}