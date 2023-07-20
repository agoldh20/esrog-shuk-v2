import { CustomerType } from '../../../slices/types';
import { DefaultProps } from '../../../global';

export interface CustomerListProps extends DefaultProps {
  customerList: CustomerType[]
}
