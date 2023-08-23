import type { IDiagramStoreState } from '@/types/IDiagramStoreState';
import type { ILineData } from '@/types/ILineData';
import type { IPieData } from '@/types/IPieData';
import axios from 'axios';
import { defineStore } from 'pinia';

export const useDiagramStore = defineStore('diagramStore', {
  state: (): IDiagramStoreState => ({
    lineData: [],
    pieData: [],
  }),
  getters: {
    pieDataLabels(): string[] {
      return this.pieData.map((dataItem: IPieData) => dataItem.Группа)
    },
    pieDataDatasetsData(): number[] {
      return this.pieData.map((dataItem: IPieData) => dataItem.Доля)
    },

    lineDataLabels(): string[] {
      return this.lineData.map((dataItem: ILineData) => new Date(dataItem.Дата).toDateString() )
    },
    lineDataDatasetsData(): number[] {
      return this.lineData.map((dataItem: ILineData) => dataItem.Процент)
    },
    
  },
  actions: {
    async getLineChartData () {
      const isSuccess = true;
      try {
        const resultLineData = await axios.get('https://run.mocky.io/v3/92a0a266-0321-4ff5-9993-b394d03ceee2');
        if (resultLineData) {
          this.lineData = resultLineData.data;
          return isSuccess;
        }

        return !isSuccess;
      } catch (err) {
        return !isSuccess;
      }
      
    },
    async getPieChartData () {
      const isSuccess = true;
      try {
        const resultPieData = await axios.get('https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047');
        if (resultPieData) {
          this.pieData = resultPieData.data;
          return isSuccess;
        }
        
        return !isSuccess;
      } catch (err) {
        return !isSuccess;
      }
    }
  },
});
