import { HeadCell } from './HeadCell.interface';
export interface CustomTableProps {
    rows: any[];
    headCells: HeadCell[];
     permission:number;
     managerCells:HeadCell[];
}