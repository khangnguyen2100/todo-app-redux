import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import Todo from '../Todo';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions';

export default function TodoList() {
  const dispatch = useDispatch()
  const [inputTerm, setInputTerm] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleAddTodo = () => {
    dispatch(addTodo({
      id : uuid(),
      name : inputTerm,
      priority,
      completed : false
    }))
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' />
      </Col>

      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={inputTerm} onChange={(e) => setInputTerm(e.target.value)}/>

          <Select defaultValue="Medium" value={priority} onChange={setPriority}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>

            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>

            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>

          <Button type='primary' onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
