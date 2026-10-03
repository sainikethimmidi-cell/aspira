import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Placeholder from './pages/Placeholder'
import DashboardLayout from './layouts/DashboardLayout'
import StudentDashboard from './pages/student/Dashboard'
import Roadmap from './pages/student/Roadmap'
import Students from './pages/employee/Students'

const studentLinks = [
  'Dashboard', 'Placement', 'GATE', 'DSA', 'Aptitude', 'Communication',
  'Roadmap', 'Schedule', 'Companies', 'Mentor', 'Alumni', 'Interview Studio',
]
const employeeLinks = ['Dashboard', 'Students', 'Requests', 'Alumni', 'Resources', 'Analytics', 'Feedback']

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, '-')

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/student/login" element={<Login role="student" />} />
      <Route path="/employee/login" element={<Login role="employee" />} />
      <Route path="/student/register" element={<Register />} />

      <Route path="/student" element={<DashboardLayout title="Student" base="/student" links={studentLinks} />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="roadmap" element={<Roadmap />} />
        {studentLinks
          .filter((l) => !['Dashboard', 'Roadmap'].includes(l))
          .map((l) => (
            <Route key={l} path={slug(l)} element={<Placeholder title={l} />} />
          ))}
      </Route>

      <Route path="/employee" element={<DashboardLayout title="Employee" base="/employee" links={employeeLinks} />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="students" element={<Students />} />
        {employeeLinks
          .filter((l) => l !== 'Students')
          .map((l) => (
            <Route key={l} path={slug(l)} element={<Placeholder title={l} />} />
          ))}
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
