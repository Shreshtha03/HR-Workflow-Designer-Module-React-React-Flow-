import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Spin } from 'antd';
import { fetchAutomations } from '../../api/mockApi';

const AutomatedNodeForm = ({ data, onChange }) => {
    const [form] = Form.useForm();
    const [automations, setAutomations] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadOptions = async () => {
            setLoading(true);
            const options = await fetchAutomations();
            setAutomations(options);
            setLoading(false);
        };
        loadOptions();
    }, []);

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
            <Form.Item label="Step Title" name="title">
                <Input placeholder="e.g. Send Email" />
            </Form.Item>
            <Form.Item label="Action Type" name="actionType">
                <Select
                    placeholder="Select Action"
                    loading={loading}
                    notFoundContent={loading ? <Spin size="small" /> : null}
                >
                    {automations.map(opt => (
                        <Select.Option key={opt.id} value={opt.label}>
                            {opt.label}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
        </Form>
    );
};

export default AutomatedNodeForm;
