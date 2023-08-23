import type { ILineData } from "./ILineData";
import type { IPieData } from "./IPieData";

export interface IDiagramStoreState {
    lineData: ILineData[],
    pieData: IPieData[],
}