import React, { useEffect } from 'react';
import { Form, Input } from 'antd';

const StartNodeForm = ({ data, onChange }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue(data);
    }, [data, form]);

    const handleChange = (changedValues) => {
        onChange({ ...data, ...changedValues });
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onValuesChange={handleChange}
        >
            <Form.Item label="Process Name" name="label">
                <Input placeholder="e.g. Employee Onboarding" />
            </Form.Item>
            <Form.Item label="Metadata (Key-Value)" name="metadata">
                <Input.TextArea placeholder="JSON or details" />
            </Form.Item>
        </Form>
    );
};

export default StartNodeForm;
