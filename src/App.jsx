import React, { useState, useCallback } from 'react';
import 'reactflow/dist/style.css'; // Mandatory React Flow styles
import MainLayout from './layout/MainLayout';
import WorkflowCanvas from './components/WorkflowCanvas';
import NodeSettingsDrawer from './components/forms/NodeSettingsDrawer';
import useWorkflowStore from './store/useWorkflowStore';

function App() {
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Start with store logic
  const { nodes, setNodes } = useWorkflowStore();

  // We need to find the node object to pass to the drawer
  const selectedNode = nodes.find(n => n.id === selectedNodeId);

  const onNodeClick = useCallback((event, node) => {
    setSelectedNodeId(node.id);
    setDrawerOpen(true);
  }, []);

  const onDrawerClose = () => {
    setDrawerOpen(false);
    setSelectedNodeId(null);
  };

  const onUpdateNode = useCallback((nodeId, newData) => {
    setNodes(nodes.map((node) => {
      if (node.id === nodeId) {
        return { ...node, data: { ...node.data, ...newData } };
      }
      return node;
    }));
  }, [nodes, setNodes]);

  return (
    <MainLayout>
      <WorkflowCanvas
        onNodeClick={onNodeClick}
        nodes={nodes}
      />
      <NodeSettingsDrawer
        isOpen={drawerOpen}
        onClose={onDrawerClose}
        selectedNode={selectedNode}
        onUpdateNode={onUpdateNode}
      />
    </MainLayout>
  );
}

export default App;
