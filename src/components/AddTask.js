import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import colors from "../data/Colors";

function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  const [day, setday] = useState("");
  const [reminder, setReminder] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();

    onAddTask({ text, day, reminder });

    setday("");
    setReminder(true);
    setText("");
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label
          className="text-default mb-1 text-center"
          style={{ fontSize: 14, color: colors.davysGray }}
        >
          Task
        </Form.Label>
        <Form.Control
          style={{ marginTop: 0 }}
          type="text"
          placeholder="eg. Pass by grocery store"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label
          className="mb-1"
          style={{ fontSize: 14, color: colors.davysGray }}
        >
          Day
        </Form.Label>
        <Form.Control
          style={{ marginTop: 0 }}
          type="text"
          placeholder="eg. 21st January, 2013"
          value={day}
          onChange={(e) => setday(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicCheckbox">
        <Form.Check
          style={{ fontSize: 12, color: colors.davysGray }}
          type="checkbox"
          label="Add reminder?"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="success" type="submit" size="sm">
          Add Task
        </Button>
      </div>
    </Form>
  );
}

export default AddTask;
