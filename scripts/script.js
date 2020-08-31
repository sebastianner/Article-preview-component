var myWidth = window.innerWidth

function movile() {
    var profile = document.getElementById('profile')
    var shr = document.getElementById('share-links')
    var btn_1 = document.getElementById('btn-1')
    var btn_2 = document.getElementById('btn-2')
    btn_1.addEventListener('click', function(){
        if (myWidth){
            profile.classList.add('hidde')
            shr.classList.replace('hidde','show')
        }
    })
    btn_2.addEventListener('click', function(){
        if (myWidth){
            shr.classList.replace('show','hidde')
            profile.classList.remove('hidde')
        }
    })
}

function desktop() {
    
}

if(myWidth<768) {
    movile()
}else{
    desktop()
}