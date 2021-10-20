/* tslint:disable */
/* eslint-disable */
import { Employe } from './employe';
export interface EmployePagedData {
  currentPage?: number;
  data?: null | Array<Employe>;
  totalPages?: number;
}
