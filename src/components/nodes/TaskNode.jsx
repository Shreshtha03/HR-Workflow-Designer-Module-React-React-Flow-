import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { CheckSquareOutlined, UserOutlined, CalendarOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const TaskNode = memo(({ data, selected }) => {
    return (
        <div className="px-4 py-3 shadow-lg rounded-2xl bg-white border-l-4 border-blue-500 min-w-[200px] hover:shadow-xl transition-shadow">
            <Handle type="target" position="left" />
            <Handle type="source" position="right" />

            <div className="flex items-center gap-2 mb-2">
                <CheckSquareOutlined className="text-blue-500 text-base" />
                <div className="font-semibold text-gray-800 text-sm">
                    {data.title || data.label || 'HUMAN TASK'}
                </div>
            </div>

            <div className="text-xs text-gray-600 space-y-1">
                {data.description && (
                    <div className="mb-2">{data.description}</div>
                )}
                <div className="flex items-center gap-1">
                    <UserOutlined className="text-gray-400" />
                    <span>{data.assignee || 'Unassigned'}</span>
                </div>
                <div className="flex items-center gap-1">
                    <CalendarOutlined className="text-gray-400" />
                    <span>{data.dueDate || 'No Due Date'}</span>
                </div>
            </div>
        </div>
    );
});

export default TaskNode;
