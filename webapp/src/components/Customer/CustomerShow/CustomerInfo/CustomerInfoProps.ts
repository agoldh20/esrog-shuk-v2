import { DefaultProps } from '../../../../global';
import { CustomerType } from '../../../../slices/types';

export interface CustomerInfoProps extends DefaultProps {
  customer: CustomerType;
}
