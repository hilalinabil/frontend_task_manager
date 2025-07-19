# 📋 Task Tracker App

A modern, responsive React application for managing your daily tasks efficiently. Built with React hooks and modern CSS for a beautiful user experience.

## ✨ Features

- **Add Tasks**: Create new tasks with a simple input form
- **Edit Tasks**: Click the edit button to modify existing tasks
- **Delete Tasks**: Remove tasks you no longer need
- **Mark Complete**: Toggle task completion status with a checkbox
- **Filter Tasks**: View all tasks, active tasks, or completed tasks
- **Task Statistics**: See your progress with visual statistics
- **Local Storage**: Tasks are automatically saved to your browser
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone or download this project
2. Open your terminal and navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`.

### Building for Production

To create a production build:
```bash
npm run build
```

## 🎯 How to Use

1. **Adding Tasks**: Type your task in the input field and click "Add Task" or press Enter
2. **Completing Tasks**: Click the checkbox next to a task to mark it as complete
3. **Editing Tasks**: Click the edit button (✏️) to modify a task's text
4. **Deleting Tasks**: Click the delete button (🗑️) to remove a task
5. **Filtering**: Use the filter buttons to view different categories of tasks
6. **Viewing Stats**: Check the statistics cards to see your progress

## 🛠️ Built With

- **React 18** - Frontend framework
- **CSS3** - Modern styling with gradients and animations
- **Local Storage** - Data persistence
- **Responsive Design** - Mobile-first approach

## 📱 Features in Detail

### Task Management
- Create tasks with up to 200 characters
- Edit tasks inline with keyboard support (Enter to save, Escape to cancel)
- Delete tasks with confirmation
- Mark tasks as complete/incomplete

### Filtering System
- **All**: View all tasks
- **Active**: View only incomplete tasks
- **Completed**: View only completed tasks

### Statistics Dashboard
- Total number of tasks
- Number of completed tasks
- Number of active tasks
- Completion percentage with visual progress bar

### Data Persistence
- Tasks are automatically saved to browser's local storage
- Data persists between browser sessions
- No external database required

## 🎨 Design Features

- **Modern Gradient Background**: Beautiful purple gradient theme
- **Card-based Layout**: Clean, organized task cards
- **Smooth Animations**: Hover effects and transitions
- **Responsive Grid**: Adapts to different screen sizes
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 📁 Project Structure

```
src/
├── components/
│   ├── TaskForm.js          # Task input form
│   ├── TaskForm.css
│   ├── TaskList.js          # Task list container
│   ├── TaskList.css
│   ├── TaskItem.js          # Individual task component
│   ├── TaskItem.css
│   ├── TaskStats.js         # Statistics dashboard
│   └── TaskStats.css
├── App.js                   # Main application component
├── App.css                  # Main app styles
├── index.js                 # Application entry point
└── index.css                # Global styles
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Task Tracking!** 🎉 