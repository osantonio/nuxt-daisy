<template>
    <div class="max-h-screen">
        <v-chart class="chart" :option="option" />
    </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent
]);

export default defineComponent({
    name: "HelloWorld",
    components: {
        VChart
    },
    provide: {
        [THEME_KEY]: "light"
    },
    setup() {
        const option = ref({
            title: {
                text: "Traffic Sources",
                left: "center"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: "horizontal",
                bottom: "bottom",
                data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
            },
            series: [
                {
                    name: "Fuentes de tráfico",
                    type: "pie",
                    radius: "60%",
                    center: ["50%", "50%"],
                    data: [
                        { value: 335, name: "Direct" },
                        { value: 310, name: "Email" },
                        { value: 234, name: "Ad Networks" },
                        { value: 135, name: "Video Ads" },
                        { value: 1548, name: "Search Engines" }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)"
                        }
                    }
                }
            ]
        });

        return { option };
    }
});
</script>

<style scoped>
.chart {
    display: flex;
    height: 500px;
}
</style>