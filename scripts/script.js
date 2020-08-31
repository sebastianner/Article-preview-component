var myWidth = window.innerWidth
var profile = document.getElementById('profile')
var shr_mvl = document.getElementById('share-movile')
var shr_dkt = document.getElementById('share-desktop')
var btn_1_svg = document.getElementById('btn-1-svg')
var btn_1 = document.getElementById('btn-1')
var btn_2 = document.getElementById('btn-2')

function movile() {
    btn_1.addEventListener('click', ()=>{
            profile.classList.add('hide')
            shr_mvl.classList.replace('hide','show')
    })
    btn_2.addEventListener('click', function(){
            shr_mvl.classList.replace('show','hide')
            profile.classList.remove('hide')
    })
}

function desktop() {
    btn_1.addEventListener('click',()=>{
        if (shr_dkt.style.display==='none') {
            shr_dkt.style.display = 'flex'
        }else{
            shr_dkt.style.display = 'none'
        }
    })
}

if (myWidth<935) {
    movile()
} else {
    desktop()
}