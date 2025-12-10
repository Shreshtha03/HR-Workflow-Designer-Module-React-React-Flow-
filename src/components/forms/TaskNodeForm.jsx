import React, { useEffect } from 'react';
import { Form, Input, DatePicker } from 'antd';
import dayjs from 'dayjs';

const TaskNodeForm = ({ data, onChange }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        // Handle date conversion for Ant Design DatePicker
        const formData = {
            ...data,
            dueDate: data.dueDate ? dayjs(data.dueDate) : null
        };
        form.setFieldsValue(formData);
    }, [data, form]);

    const handleChange = (changedValues) => {
        const formattedValues = { ...changedValues };
        if (changedValues.dueDate) {
            formattedValues.dueDate = changedValues.dueDate.toISOString();
        }
        onChange({ ...data, ...formattedValues });
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onValuesChange={handleChange}
        >
            <Form.Item label="Task Title" name="title">
                <Input placeholder="e.g. Verify Documents" />
            </Form.Item>
            <Form.Item label="Description" name="description">
                <Input.TextArea rows={3} />
            </Form.Item>
            <Form.Item label="Assignee" name="assignee">
                <Input placeholder="e.g. John Doe" />
            </Form.Item>
            <Form.Item label="Due Date" name="dueDate">
                <DatePicker className="w-full" />
            </Form.Item>
        </Form>
    );
};

export default TaskNodeForm;
