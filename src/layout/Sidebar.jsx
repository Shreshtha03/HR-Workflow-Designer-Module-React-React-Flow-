import React from 'react';
import { Card, Tooltip } from 'antd';
import {
    PlayCircleOutlined,
    CheckSquareOutlined,
    SafetyCertificateOutlined,
    RobotOutlined,
    StopOutlined
} from '@ant-design/icons';
import useWorkflowStore from '../store/useWorkflowStore';

const Sidebar = () => {
    const hasStartNode = useWorkflowStore((state) => state.hasStartNode());

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside className="w-64 h-full bg-slate-50 border-r border-slate-200 p-4 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-slate-700 mb-2">Workflow Nodes</h2>

            <div className="space-y-3">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Entry & Exit</div>

                <Tooltip title={hasStartNode ? "Only one Start Node allowed" : "Drag to add Entry Point"}>
                    <div
                        className={`p-3 bg-white rounded-lg shadow-sm border border-green-200 flex items-center gap-3 cursor-grab hover:shadow-md transition-all ${hasStartNode ? 'opacity-50 cursor-not-allowed grayscale' : ''}`}
                        onDragStart={(event) => !hasStartNode && onDragStart(event, 'start')}
                        draggable={!hasStartNode}
                    >
                        <PlayCircleOutlined className="text-green-500 text-lg" />
                        <span className="font-medium text-slate-700">Start Node</span>
                    </div>
                </Tooltip>

                <div
                    className="p-3 bg-white rounded-lg shadow-sm border border-red-200 flex items-center gap-3 cursor-grab hover:shadow-md transition-all"
                    onDragStart={(event) => onDragStart(event, 'end')}
                    draggable
                >
                    <StopOutlined className="text-red-500 text-lg" />
                    <span className="font-medium text-slate-700">End Node</span>
                </div>

                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-4">Actions</div>

                <div
                    className="p-3 bg-white rounded-lg shadow-sm border border-blue-200 flex items-center gap-3 cursor-grab hover:shadow-md transition-all"
                    onDragStart={(event) => onDragStart(event, 'task')}
                    draggable
                >
                    <CheckSquareOutlined className="text-blue-500 text-lg" />
                    <div>
                        <span className="block font-medium text-slate-700">Task Node</span>
                        <span className="text-[10px] text-slate-400 block">Human Action</span>
                    </div>
                </div>

                <div
                    className="p-3 bg-white rounded-lg shadow-sm border border-purple-200 flex items-center gap-3 cursor-grab hover:shadow-md transition-all"
                    onDragStart={(event) => onDragStart(event, 'approval')}
                    draggable
                >
                    <SafetyCertificateOutlined className="text-purple-500 text-lg" />
                    <div>
                        <span className="block font-medium text-slate-700">Approval</span>
                        <span className="text-[10px] text-slate-400 block">Manager Review</span>
                    </div>
                </div>

                <div
                    className="p-3 bg-white rounded-lg shadow-sm border border-orange-200 flex items-center gap-3 cursor-grab hover:shadow-md transition-all"
                    onDragStart={(event) => onDragStart(event, 'automated')}
                    draggable
                >
                    <RobotOutlined className="text-orange-500 text-lg" />
                    <div>
                        <span className="block font-medium text-slate-700">Automated</span>
                        <span className="text-[10px] text-slate-400 block">System Action</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
