import React, { useEffect } from 'react';
import { Form, Input, Switch } from 'antd';

const EndNodeForm = ({ data, onChange }) => {
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
            <Form.Item label="End Message" name="label">
                <Input placeholder="e.g. Workflow Completed" />
            </Form.Item>
            <Form.Item label="Show Summary?" name="showSummary" valuePropName="checked">
                <Switch />
            </Form.Item>
        </Form>
    );
};

export default EndNodeForm;
