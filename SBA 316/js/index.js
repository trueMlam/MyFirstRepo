function valid_sel() {
    let n = document.getElementById('nums').checked;
    let u = document.getElementById('upper').checked;
    let l = document.getElementById('lower').checked;
    let s = document.getElementById('syms').checked;

    if (n || u || l || s) return true
    else return false
}

function rnd_char(chars) {
    var code = Math.floor(Math.random() * chars.length)
    return chars[code]
}

function gen_pw(opts, len) {
    var res = ''
    for (let i=0; i < len; i++) {
        var rnd = rnd_char(opts)
        res += rnd
    }
    return res
}

function get_opts() {
    var opts = ''
    let nums = '0123456789', upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let syms = '%*)?@#$~'

    if (document.getElementById('nums').checked) opts += nums
    if (document.getElementById('upper').checked) opts += upper
    if (document.getElementById('lower').checked) opts += lower
    if (document.getElementById('syms').checked) opts += syms
    
    return opts
}

function gen_pws() {
    var valid = valid_sel()
    if (!valid) { 
        alert('select at least 1 option.')
        return
    }

    let len = parseInt(document.getElementById('len').value)
    if (isNaN(len) || len < 1) {
        alert('length must be at least 1.')
        return
    }

    var opts = get_opts()
    let pwlist = document.getElementById('pwlist')
    while (pwlist.firstChild) pwlist.removeChild(pwlist.firstChild)

    let frag = document.createDocumentFragment()

    for (var i=0; i<12; i++) {
        var pw = gen_pw(opts, len)
        var item = document.createElement('li')
        item.textContent = pw
        frag.appendChild(item)
    }

    pwlist.appendChild(frag)

    setTimeout(function() {
        document.getElementById('pwresult').classList.remove('hidden')
    }, 400)
}

function nav_siblings() {
    let first_check = document.getElementById('nums')
    let parent = first_check.parentNode
    let next = parent.nextElementSibling
    console.log('next sibling:', next.textContent)
}

document.getElementById('genbtn').addEventListener('click', gen_pws)
document.getElementById('genbtn').addEventListener('click', nav_siblings)

document.getElementById('len').addEventListener('input', function() {
    let len = document.getElementById('len').value
    if (len < 1) alert('length must be at least 1')
})