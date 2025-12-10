import React from 'react';
import { Drawer, Typography } from 'antd';
import StartNodeForm from './StartNodeForm';
import TaskNodeForm from './TaskNodeForm';
import ApprovalNodeForm from './ApprovalNodeForm';
import AutomatedNodeForm from './AutomatedNodeForm';
import EndNodeForm from './EndNodeForm';

const { Title } = Typography;

const NodeSettingsDrawer = ({ selectedNode, isOpen, onClose, onUpdateNode }) => {

    if (!selectedNode) return null;

    const renderForm = () => {
        const commonProps = {
            data: selectedNode.data,
            onChange: (newData) => onUpdateNode(selectedNode.id, newData)
        };

        switch (selectedNode.type) {
            case 'start':
                return <StartNodeForm {...commonProps} />;
            case 'task':
                return <TaskNodeForm {...commonProps} />;
            case 'approval':
                return <ApprovalNodeForm {...commonProps} />;
            case 'automated':
                return <AutomatedNodeForm {...commonProps} />;
            case 'end':
                return <EndNodeForm {...commonProps} />;
            default:
                return <div>No settings available for this node.</div>;
        }
    };

    return (
        <Drawer
            title="Node Settings"
            placement="right"
            onClose={onClose}
            open={isOpen}
            mask={false} // Allow interacting with canvas while open? Users choice. Usually mask is better for focus.
            width={320}
        >
            <div className="mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase">Selected Node Type</span>
                <Title level={5} className="!mt-0 capitalize">{selectedNode.type} Node</Title>
            </div>

            {renderForm()}
        </Drawer>
    );
};

export default NodeSettingsDrawer;
