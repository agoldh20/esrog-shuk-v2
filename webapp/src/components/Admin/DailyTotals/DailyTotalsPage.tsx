import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useJwtHeaders } from '../../../hooks/useJwtHeaders';
import axios from 'axios';
import './DailyTotalsPage.scss';

interface TotalType {
  type: string;
  count?:number
  total?: number;
}

const DailyTotalsPage: FC = () => {
  const dispatch = useDispatch();
  const headers = useJwtHeaders();
  const [totals, setTotals] = useState<TotalType[]>([])
  const [date, setDate] = useState(new Date().toJSON().slice(0,10))

  useEffect(() => {
    axios.get(`/api/v1/admin/daily-totals?date=${date}`, headers).then(({ data }) => setTotals(data));
  }, [date]);
  
  const handleChange = (event) => {
    setDate(event.target.value);
  }

  const totalsCount = totals.map(total => total.count).reduce((accumulator, currentValue) => {
    return accumulator! + currentValue!;
  }, 0);

  const totalsAmount = totals.map(total => total.total).reduce((accumulator, currentValue) => {
    return accumulator! + currentValue!;
  }, 0);

  return (
    <div className="container daily-totals">
      <input type="date" value={date} onChange={handleChange}/>
      <table className="table">
        <tbody>
        { totals.map((total, index) => (
          <tr key={`totals-${index}`}>
            <td>{total.type}({total.count})</td>
            <td>${total.total || 0}</td>
          </tr>
        ))}
        <tr key="grand-total">
          <td><b>totals({totalsCount})</b></td>
          <td><b>${totalsAmount}</b></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DailyTotalsPage;
