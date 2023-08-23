<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useDiagramStore } from '@/stores/diagramStore';

  const router = useRouter();
  const diagranStore = useDiagramStore();

  const isErrorLoading = ref(false);

  onMounted(async ()=> {
    const isSuccesLoadingPieData = await diagranStore.getPieChartData();
    if (!isSuccesLoadingPieData) {
        isErrorLoading.value = true; 
        return;
    }
    
    const isSuccesLoadingLineData = await diagranStore.getLineChartData();
    if (!isSuccesLoadingLineData) {
        isErrorLoading.value = true; 
        return;
    }

    setTimeout(() => {
        isErrorLoading.value = false;
    }, 800);
})
</script>

<template>
  <nav class="nav">
    <button 
      class="nav_btn"
      @click="router.push('/diagram/pie')"
    >
      Go to Pie Diagram
    </button>
    <button 
      class="nav_btn"
      @click="router.push('/diagram/line')"
    >
      Go to Line Diagram
    </button>
  </nav>
  <div 
    v-if="isErrorLoading"
    class="error_msg"
  >
    An error detected, please try again later
  </div>
</template>

<style lang="scss">
.nav {
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 5%;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 7px;
}
.nav_btn {
  outline: none;
  border: none;
  border-radius: 7px;
  width: 40%;
  background: none;
  color: #fff;
  font-size: medium;
  font-family: 'Courier New', Courier, monospace;
}
.nav_btn:hover {
  background-color: #70a0af;
}
.error_msg {
  position: absolute;
  bottom: 30px;
  padding: 8px 18px;
  background-color: #dd2d4a;
  color: #fff;
  border-radius: 10px;
  font-size: small;
  font-family: 'Courier New', Courier, monospace;
}
</style>
