var btn_1 = document.getElementById('btn-1')
var btn_2 = document.getElementById('btn-2')
var share_icon = document.getElementById('share-icon')

function show() {
    btn_1.addEventListener('click',()=>{
        if (share_icon.style.visibility==='hidden') {
            share_icon.style.visibility = 'visible'
        }else{
            share_icon.style.visibility = 'hidden'
        }
    })
        btn_2.addEventListener('click',()=>{
            if (share_icon.style.visibility==='visible') {
                share_icon.style.visibility = 'hidden'
            }
    })
}

show()