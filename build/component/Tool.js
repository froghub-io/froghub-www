Vue.component('t', {
    data: function () {
        return {
            operates: [
                {
                    key: "algorithm",
                    icon: "./static/img/navigation/algorithm.png",
                    label: "算法"
                },
                {
                    key: "dispatch",
                    icon: "./static/img/navigation/dispatch.png",
                    label: "调度"
                },
                {
                    key: "prover",
                    icon: "./static/img/navigation/prover.png",
                    label: "时空证明"
                },
                {
                    key: "cloudc2",
                    icon: "./static/img/navigation/cloudc2.png",
                    label: "Cloud C2"
                },
                {
                    key: "gas",
                    icon: "./static/img/navigation/gas.png",
                    label: "GAS"
                },
                {
                    key: "block",
                    icon: "./static/img/navigation/block.png",
                    label: "孤块"
                },
                {
                    key: "sector",
                    icon: "./static/img/navigation/sector.png",
                    label: "扇区修复"
                },
                {
                    key: "transfer",
                    icon: "./static/img/navigation/transfer.png",
                    label: "集群迁移"
                },
                {
                    key: "fpga",
                    icon: "./static/img/navigation/fpga.png",
                    label: "FPGA"
                },
                {
                    key: "monitor",
                    icon: "./static/img/navigation/monitor.png",
                    label: "全时监控"
                }
            ]
        }
    },
    methods: {
        onAnchor(key) {
            let top = document.getElementById(key).offsetTop;
            window.scrollTo({
                left: 0,
                top: top,
                behavior: "smooth"
            });
        }
    },
    template: `
     <div class="tool-content tool-box">
        <img class="tool-logo" src="./static/img/navigation/flogo.png" @click="onAnchor('app')">
        <div class="tool-content-block" v-for="item in operates" @click="onAnchor(item.key)">
            <img class="tool-content-icon" :src="item.icon">
            {{item.label}}
        </div>
    </div>
    `
})