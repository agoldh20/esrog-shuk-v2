import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useJwtHeaders } from '../../../hooks/useJwtHeaders';
import axios from 'axios';

const DailyTotalsPage: FC = () => {
  const dispatch = useDispatch();
  const headers = useJwtHeaders();
  const [cash, setCash] = useState<any>();
  const [check, setCheck] = useState<any>();
  const [quickPay, setQuickPay] = useState<any>();
  const [other, setOther] = useState<any>();

  useEffect(() => {
    axios.get('/api/v1/admin/daily-totals', headers).then(({ data }) => {
      setCash(data.cash);
      setCheck(data.check);
      setQuickPay(data.quick_pay);
      setOther(data.other);
      console.log('=============>', data);
    });
  }, [cash]);

  return (
    <div className="daily-totals">
      <ul className="pull-left list-group">
        <li className="list-group-item">
          Cash({cash.count}): ${cash.total || 0}
        </li>
        <li className="list-group-item">
          Check({check.count}): ${check.total || 0}
        </li>
        <li className="list-group-item">
          Quick Pay({quickPay.count}): ${quickPay.total || 0}
        </li>
        <li className="list-group-item">
          Other({other.count}): ${other.total || 0}
        </li>
        <li className="list-group-item">
          <b>
            Total({cash.count + quickPay.count + check.count + other.count}): $
            {cash.total || 0 + quickPay.total || 0 + check.total || 0 + other.total || 0}
          </b>
        </li>
      </ul>
    </div>
  );
};

export default DailyTotalsPage;
