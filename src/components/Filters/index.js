import { Col, Row, Input, Typography, Radio, Select, Tag, Checkbox } from 'antd';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import filtersSlice from './filtersSlice';
const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch()
  const [searchtermFilter, setSearchtermFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState([]);
  
  useEffect(() => {
    dispatch(filtersSlice.actions.searchFilterAction(searchtermFilter))
  }, [searchtermFilter]);

  useEffect(() => {
    dispatch(filtersSlice.actions.statusFilterAction(statusFilter))
  }, [statusFilter]); 

  useEffect(() => {
    dispatch(filtersSlice.actions.priorityFilterAction(priorityFilter))
  }, [priorityFilter]);

  return (
    <Row justify='center'>
      {/* Search */}
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchtermFilter} onChange={(e) => setSearchtermFilter(e.target.value)} />
      </Col>
      {/* Filter By Status */}
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>

        <Radio.Group value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      {/* Filter By Priority */}
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
           Filter By Priority
        </Typography.Paragraph>

        <Checkbox.Group onChange={setPriorityFilter} value={priorityFilter}>
          <Checkbox value='High' label='High'  style={{color : 'red'}}>High</Checkbox>
          <Checkbox value='Medium' label='Medium' style={{color : 'blue'}}>Medium</Checkbox>
          <Checkbox value='Low' label='Low' style={{color : 'gray'}}>Low</Checkbox>
        </Checkbox.Group>
      </Col>
    </Row>
  );
}
