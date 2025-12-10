import React, { useCallback, useRef } from 'react';
import ReactFlow, {
    Background,
    Controls,
    addEdge,
    MiniMap
} from 'reactflow';
import 'reactflow/dist/style.css';
import { v4 as uuidv4 } from 'uuid';
import useWorkflowStore from '../store/useWorkflowStore';
import { notification } from 'antd';

import { nodeTypes } from './nodes/nodeTypes';

const WorkflowCanvas = ({ onNodeClick }) => {
    const reactFlowWrapper = useRef(null);
    const { nodes, edges, onNodesChange, onEdgesChange, setNodes, setEdges } = useWorkflowStore();

    const onConnect = useCallback((params) => setEdges(addEdge(params, edges)), [edges, setEdges]);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            const type = event.dataTransfer.getData('application/reactflow');

            if (typeof type === 'undefined' || !type) {
                return;
            }

            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            // Simple projection
            const position = {
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            };

            const newNode = {
                id: uuidv4(),
                type,
                position,
                data: { label: `${type.charAt(0).toUpperCase() + type.slice(1)} Node` },
            };

            setNodes(nodes.concat(newNode));

            if (type === 'start') {
                notification.success({
                    message: "Start Node Added",
                    description: "You have added the entry point for the workflow."
                });
            }
        },
        [nodes, setNodes]
    );

    return (
        <div className="w-full h-full" ref={reactFlowWrapper}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onNodeClick={onNodeClick}
                nodeTypes={nodeTypes}
                connectionLineStyle={{ stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' }}
                defaultEdgeOptions={{
                    style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' },
                    markerEnd: { type: 'arrowclosed', color: '#3b82f6' },
                }}
                fitView
            >
                <Background color="#94a3b8" gap={20} variant="dots" size={1.5} style={{ backgroundColor: '#f8fafc' }} />
                <Controls />
                <MiniMap nodeColor="#3b82f6" maskColor="rgba(0,0,0,0.1)" />
            </ReactFlow>
        </div>
    );
};

export default WorkflowCanvas;
