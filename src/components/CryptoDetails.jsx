import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useGetCryptoDetailsQuery, useGetCryptosQuery } from '../services/cryptoApi';


const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data: cryptosList } = useGetCryptosQuery(100);
  const { timePeriod, setTimePeriod } = useState('7d');
  
  const { data, isFetching } = useGetCryptoDetailsQuery(cryptosList ? cryptosList.data.coins[coinId-1].uuid : coinId);

  console.log(data);

  return (
    <div>
      CryptoDetails {coinId}
    </div>
  )
}

export default CryptoDetails
