import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { StopOutlined } from '@ant-design/icons';

const EndNode = ({ data }) => {
    return (
        <div className="px-6 py-3 shadow-lg rounded-full bg-gradient-to-r from-red-400 to-red-500 border-2 border-red-600 min-w-[140px]">
            <Handle type="target" position="left" />
            <div className="flex items-center gap-2">
                <StopOutlined className="text-white text-lg" />
                <div className="text-white font-semibold text-sm">
                    {data.label || 'End Node'}
                </div>
            </div>
        </div>
    );
};

export default EndNode;
