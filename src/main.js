let html = document.querySelector('#html')
let style = document.querySelector('#style')
let str = `/*你好，我是前端小白

现在给大家画你笑脸

首先，画个圆脸*/

.face {
   
    border: 1px solid orange;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    background: yellow;
}

/*画两只眼睛*/

.left-eye {
    left: 20%;
}

.right-eye {
   
    right: 20%;
}

.eyes {
    position: absolute;
    border: 1px solid orange;
    top: 15%;
    width: 4rem;
    height: 6rem;
    border-radius:100%;
    background: #eee;
    overflow: hidden;
}

/*画两个眼球*/

.eye-ball {
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -1.9rem;
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 100%;
    background: #222;
}

/*画个嘴巴*/

.mouth {
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    width: 15rem;
    height: 15rem;
    border: 0.3rem solid transparent;
    border-bottom: 0.3rem solid orange;
}

笑脸画好了！！！
`


let n = 0
let str2 = ''
let step = () => {
    setTimeout(() => {
        if (str[n] === '\n') {
            str2 += '<br>'
        }
        else if (str[n] === ' ') {
            str2 += '&nbsp'
        }
        else if (str[n] === '/' && str[n + 1] === '*' || str[n] === '*' && str[n + 1] === '/') {
            str2 += ''
            n++
        }
        else {
            str2 += str[n]
        }
        html.innerHTML = str2
        style.innerHTML = str.substring(0, n)
        if (n < str.length - 1) {
            step()
            window.scrollTo(0, 99999)
            html.scrollTo(0, 99999)
        }
        n++
    }, 25)
}
step()

