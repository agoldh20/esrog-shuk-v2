import { DefaultProps } from '../../../global';
import { CustomerType } from '../../../slices/customerSlice/customerSlice';

export interface CustomerListProps extends DefaultProps {
  customerList: CustomerType[]
}
