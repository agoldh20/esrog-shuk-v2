import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { CustomerType } from '../../../slices/types';

const CustomerShowPage: FC = () => {
  const customer = useSelector<RootState, CustomerType>(state => state.customer)

  const formatPhone = (phoneNumber) => phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
  return (
    <div className="customer-show-page">
      <div>
        { `${customer.firstName} ${customer.lastName}` }
      </div>
      <div>
        { formatPhone(customer.phoneNumber) }
      </div>
    </div>
  )
}

export default CustomerShowPage;
