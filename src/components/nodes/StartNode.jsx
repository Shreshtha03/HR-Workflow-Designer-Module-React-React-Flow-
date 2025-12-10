import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { PlayCircleOutlined } from '@ant-design/icons';

const StartNode = ({ data }) => {
    return (
        <div className="px-6 py-3 shadow-lg rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 border-2 border-emerald-600 min-w-[140px]">
            <Handle type="source" position="right" />
            <div className="flex items-center gap-2">
                <PlayCircleOutlined className="text-white text-lg" />
                <div className="text-white font-semibold text-sm">
                    {data.label || 'Start Node'}
                </div>
            </div>
        </div>
    );
};

export default StartNode;
