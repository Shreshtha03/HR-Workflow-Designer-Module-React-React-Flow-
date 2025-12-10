import React, { useRef, useCallback } from 'react';
import { ReactFlowProvider } from 'reactflow';
import Sidebar from './Sidebar';
import { Layout, Button, Typography, Space, notification } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { simulateWorkflow } from '../api/mockApi';
import useWorkflowStore from '../store/useWorkflowStore';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

// Placeholder for the Canvas and Settings
// These will be passed as children or rendered directly
const MainLayout = ({ children }) => {
    const { nodes, edges } = useWorkflowStore();

    const handleRunSimulation = async () => {
        notification.info({ message: "Starting Simulation...", description: "Validating workflow logic." });

        try {
            const result = await simulateWorkflow({ nodes, edges });
            if (result.success) {
                notification.success({
                    message: "Simulation Successful",
                    description: result.message,
                    duration: 5
                });
            }
        } catch (error) {
            notification.error({
                message: "Simulation Failed",
                description: error.message
            });
        }
    };

    return (
        <Layout className="h-screen overflow-hidden">
            <Header className="bg-indigo-700 border-b border-indigo-800 px-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    </div>
                    <Title level={4} style={{ margin: 0, color: '#ffffff' }} className="text-white">HR Workflow Designer</Title>
                </div>
                <Space>
                    <Button
                        type="primary"
                        icon={<PlayCircleOutlined />}
                        className="bg-indigo-600 hover:bg-indigo-700 border-none"
                        onClick={handleRunSimulation}
                    >
                        Run Simulation
                    </Button>
                </Space>
            </Header>
            <Layout hasSider>
                {/* Sidebar is fixed width, non-collapsible for this prototype */}
                <Sidebar />

                <Content className="bg-slate-50 relative">
                    <ReactFlowProvider>
                        {children}
                    </ReactFlowProvider>
                </Content>

                {/* This will be the settings drawer area - potentially another Sider or Drawer component */}
            </Layout>
        </Layout>
    );
};

export default MainLayout;
