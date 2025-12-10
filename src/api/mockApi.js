export const fetchAutomations = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 'email', label: 'Send Welcome Email' },
                { id: 'slack', label: 'Send Slack Notification' },
                { id: 'pdf', label: 'Generate Offer Letter PDF' },
                { id: 'jira', label: 'Create Jira Ticket' },
            ]);
        }, 500); // 500ms delay
    });
};

export const simulateWorkflow = (workflowData) => {
    return new Promise((resolve, reject) => {
        console.log('Simulating Workflow:', workflowData);
        setTimeout(() => {
            // Basic Validation
            const hasStart = workflowData.nodes.some(n => n.type === 'start');
            const hasEnd = workflowData.nodes.some(n => n.type === 'end');

            if (!hasStart) {
                reject({ success: false, message: "Error: Missing Start Node" });
                return;
            }

            if (!hasEnd) {
                reject({ success: false, message: "Error: Missing End Node" });
                return;
            }

            resolve({ success: true, message: "Workflow simulated successfully! 🚀" });
        }, 1000); // 1s delay
    });
};
