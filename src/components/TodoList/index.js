import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { v4 as uuid } from 'uuid';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Todo from '../Todo';
import { todoListRemainingSelector } from '../../redux/selector';
import todoListSlice from './todoListSlice';

export default function TodoList() {
  const dispatch = useDispatch()
  const input = useRef()

  const [inputTerm, setInputTerm] = useState('');
  const [priority, setPriority] = useState('Medium');

  const todoList = useSelector(todoListRemainingSelector)

  const handleAddTodo = () => {
    dispatch(todoListSlice.actions.addTodo({
      id : uuid(),
      name : inputTerm,
      priority,
      completed : false 
    }))

    setInputTerm('')
    setPriority('medium')
    input.current.focus()
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          todoList.map(todo => (
            <Todo key={todo.id} id={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} />
          ))
        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input ref={input} value={inputTerm} onChange={(e) => setInputTerm(e.target.value)}/>

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
