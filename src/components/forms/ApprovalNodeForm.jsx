import React, { useEffect } from 'react';
import { Form, Input, Select, InputNumber } from 'antd';

const ApprovalNodeForm = ({ data, onChange }) => {
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
            <Form.Item label="Approval Title" name="title">
                <Input placeholder="e.g. Manager Approval" />
            </Form.Item>
            <Form.Item label="Approver Role" name="approverRole">
                <Select>
                    <Select.Option value="Manager">Manager</Select.Option>
                    <Select.Option value="HR Admin">HR Admin</Select.Option>
                    <Select.Option value="Director">Director</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Auto-Approve Threshold" name="autoApproveThreshold">
                <InputNumber className="w-full" placeholder="e.g. 5000" />
            </Form.Item>
        </Form>
    );
};

export default ApprovalNodeForm;
