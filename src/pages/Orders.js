import {
  GrindComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from '@syncfusion/ejs-react-grid';

import { ordersData, contexMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  return (
    <div>
      <Header category='page' title='Orders'></Header>
    </div>
  );
};

export default Orders;
