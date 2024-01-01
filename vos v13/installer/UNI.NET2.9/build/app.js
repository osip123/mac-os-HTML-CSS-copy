// imports

const app = document.getElementById('app')

const config = {
    version: '0',
    build: '0',
    title: 'App',
}

function App(){
    const appw = `
    <div class="dev__containner">
    <div class="header">
        <div class="buttons_grouo">
            <div class="ic__bt red"></div>
            <div class="ic__bt yellow"></div>
            <div class="ic__bt green"></div>
        </div>
        <p>
            App
        </p>
        <div class="tooper">

        </div>
    </div>
    <!-- эта область будет отражаться в #app -->
</div>
    `
}

function toWindow(){
    app.innerHTML = appw;
}