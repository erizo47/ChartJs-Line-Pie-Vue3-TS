<script setup lang="ts">
import { useDiagramStore } from '@/stores/diagramStore';
import { Pie } from 'vue-chartjs'

import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)

const diagramStore = useDiagramStore();

const chartData = {
        labels: diagramStore.pieDataLabels,
        datasets: [ { 
            data: diagramStore.pieDataDatasetsData,
            backgroundColor: ['#a8b4a5', '#725d68', '#9d6a89', '#ee92c2', '#efbc9b'],
        } ]
      }

const chartOptions = {
        maintainAspectRatio: false,
      }

</script>

<template>
    <div>
        <Pie
            id="pie-chart-id"
            :options="chartOptions"
            :data="chartData"
        />
    </div>
  
</template>

<style lang="scss">

</style>
