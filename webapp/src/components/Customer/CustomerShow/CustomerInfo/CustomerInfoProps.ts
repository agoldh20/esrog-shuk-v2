import { DefaultProps } from '../../../../global';
import { CustomerType } from '../../../../slices/customerSlice/customerSlice';

export interface CustomerInfoProps extends DefaultProps {
  customer: CustomerType;
}
