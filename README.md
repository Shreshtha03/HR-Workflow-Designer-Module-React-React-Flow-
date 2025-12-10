# HR Workflow Designer 🚀

A powerful, modern, drag-and-drop workflow builder tailored for HR processes. Built with **React**, **React Flow**, and **Ant Design**.

![Status](https://img.shields.io/badge/Status-Completed-success)
![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-6.0-purple)

## 🌟 Features

### 1. **Visual Workflow Builder**
- **Drag & Drop Interface**: Easily drag nodes from the sidebar onto the infinite canvas.
- **Smart Connections**: Connect nodes with beautiful, legible, curriculum-style lines.
- **Modern UI**: Dark/Light mode compatible aesthetics with rounded nodes and smooth shadows.

### 2. **Custom Node Types**
- **🟢 Start Node**: The entry point of every workflow.
- **🔵 Task Node**: Represents a human task (Assignee, Due Date support).
- **🟣 Approval Node**: For manager reviews (Role-based, Auto-approve thresholds).
- **🟠 Automated Node**: System actions (fetches available options from a Mock API).
- **🔴 End Node**: The terminal point of the process.

### 3. **Real-Time Configuration**
- **Settings Drawer**: Click any node to open a dynamic settings panel.
- **Instant Updates**: Changes in the form (e.g., changing a task name) reflect immediately on the canvas node.

### 4. **Simulation & Validation**
- **Run Simulation**: Validates the workflow logic (e.g., checks for Start/End nodes).
- **Mock API**: Simulates backend fetching for automation options.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) (Vite)
- **Workflow Engine**: [React Flow (Carets)](https://reactflow.dev/)
- **UI Component Library**: [Ant Design (antd)](https://ant.design/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: Ant Design Icons

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shreshtha03/HR-Workflow-Designer-Module-React-React-Flow-.git
   cd hr-workflow-designer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📂 Project Structure

```
src/
├── api/             # Mock API services
├── components/      
│   ├── forms/       # Node configuration forms (Drawer content)
│   ├── nodes/       # Custom React Flow Node components
│   └── WorkflowCanvas.jsx  # Main canvas logic
├── layout/          # MainLayout, Sidebar, Header
├── store/           # Zustand store (Global state)
└── utils/           # Helper functions
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---
*Built with ❤️ by Shreshtha*
