import React, { memo } from 'react';
import { Handle } from 'reactflow';
import { SafetyCertificateOutlined, TeamOutlined, ThunderboltOutlined } from '@ant-design/icons';

const ApprovalNode = ({ data }) => {
    return (
        <div className="px-4 py-3 shadow-lg rounded-2xl bg-white border-l-4 border-purple-500 min-w-[200px] hover:shadow-xl transition-shadow">
            <Handle type="target" position="left" />
            <Handle type="source" position="right" />

            <div className="flex items-center gap-2 mb-2">
                <SafetyCertificateOutlined className="text-purple-500 text-base" />
                <div className="font-semibold text-gray-800 text-sm">
                    {data.title || data.label || 'APPROVAL'}
                </div>
            </div>

            <div className="text-xs text-gray-600 space-y-1">
                <div className="flex items-center gap-1">
                    <TeamOutlined className="text-gray-400" />
                    <span>Role: {data.approverRole || 'Manager'}</span>
                </div>
                <div className="flex items-center gap-1">
                    <ThunderboltOutlined className="text-gray-400" />
                    <span>Threshold: {data.autoApproveThreshold ? `< ${data.autoApproveThreshold}` : 'Manual'}</span>
                </div>
            </div>
        </div>
    );
};

export default ApprovalNode;
