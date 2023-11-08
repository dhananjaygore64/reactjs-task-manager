import Header from './Header.js'
import Footer from './Footer.js'
import Tasks from './Tasks.js'
import AddTask from './AddTask'
import { useState } from 'react'


const Home = ()=>{
    const [tasks, setTasks] = useState([
        {
          id: 1,
          text: "Doctors Appointment",
          reminder: true,
          day: "1st Oct at 1PM"
        },
        {
          id: 2,
          text: "Office Meeting",
          reminder: true,
          day: "10th Oct at 5PM"
        },
        {
          id: 3,
          text: "Food Shopping",
          reminder: false,
          day: "11th Oct at 10 AM"
        }
      ]);
      const [showAdd, setShowAdd] = useState(false);
    
      const onDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
      }
    
      const onToggle = (id) => {
        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
      }
    
      const onAdd = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        task.id = id;
        setTasks([...tasks, task])
      }
    return(
        <div className="container">
            <Header title="Task Manager" onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} />
            {showAdd && <AddTask onAdd={onAdd} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} /> : "No Tasks to Show"}
            <Footer />
          </div>
    )
}

export default Home