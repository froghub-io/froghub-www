Vue.component('h', {
    data: function () {
        return {

        }
    },
    methods: {
        onSolve() {
            window.open("https://github.com/froghub-io")
        },
        onCloudC2() {
            window.open("https://console.froghub.cn")
        }
    },
    template: `
     <div class="header-box">
         <div class="header">
             <div>
                <img class='flogo' src='./static/img/flogo.png'/>
                <img class='filfrog' src='./static/img/filfrog.png'/>
            </div>
            <div class="header-menu-group">
                <div class="header-menu" @click="onSolve">
                    <img class="header-menu-img" src="./static/img/menu-ico2.png">
                    <span>解决方案</span>
                </div>
                <div class="header-menu" @click="onCloudC2">
                    <img class="header-menu-img" src="./static/img/menu-ico.png">
                    <span>CloudC2</span>
                </div>
                <div style="margin-right: 12vw"/>
            </div>
        </div>
    </div>
    `
})