import React, { memo } from 'react';
import { Handle } from 'reactflow';
import { RobotOutlined, CodeOutlined } from '@ant-design/icons';

const AutomatedNode = ({ data }) => {
    return (
        <div className="px-4 py-3 shadow-lg rounded-2xl bg-white border-l-4 border-orange-500 min-w-[200px] hover:shadow-xl transition-shadow">
            <Handle type="target" position="left" />
            <Handle type="source" position="right" />

            <div className="flex items-center gap-2 mb-2">
                <RobotOutlined className="text-orange-500 text-base" />
                <div className="font-semibold text-gray-800 text-sm">
                    {data.title || data.label || 'AUTOMATION'}
                </div>
            </div>

            <div className="text-xs text-gray-600 space-y-1">
                <div className="flex items-center gap-1">
                    <CodeOutlined className="text-gray-400" />
                    <span>{data.actionType || 'No Action Configured'}</span>
                </div>
            </div>
        </div>
    );
};

export default AutomatedNode;
