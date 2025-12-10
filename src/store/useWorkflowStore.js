import { create } from 'zustand';
import { applyNodeChanges, applyEdgeChanges } from 'reactflow';

const useWorkflowStore = create((set, get) => ({
    nodes: [],
    edges: [],

    onNodesChange: (changes) => {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        });
    },
    onEdgesChange: (changes) => {
        set({
            edges: applyEdgeChanges(changes, get().edges),
        });
    },
    setNodes: (nodes) => set({ nodes }),
    setEdges: (edges) => set({ edges }),

    hasStartNode: () => {
        return get().nodes.some((node) => node.type === 'start');
    },
}));

export default useWorkflowStore;
