import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './components/protected/ProtectedRoute';
import { ROUTES } from './constants/routes';

import Home from './pages/Common/Home';
import Dashboard from './pages/Lawyer/Dashboard';

import Timeline from './pages/Lawyer/Timeline';
import Incomes from './pages/Lawyer/Incomes';
import AddClient from './pages/Lawyer/AddNewClient';
import Clients from './pages/Lawyer/Clients';
import ScheduleMeeting from './pages/Client/ScheduleMeeting';
import Lawyercalander from './pages/Lawyer/Lawyercalender';
import UserSignUp from './pages/Common/UserSignUp';
import UserLogin from './pages/Common/UserLogin';
import Messages from './pages/Lawyer/AllMessages';
import CaseProfiles from './pages/Lawyer/CaseProfile';
import CaseDetails from './pages/Lawyer/CaseDetails';
import NewCaseProfile from './pages/Lawyer/NewCaseProfile';
import Cases from './pages/Lawyer/Cases';
import DuePayments from './pages/Lawyer/DuePayments';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AddJunior from './pages/Lawyer/AddNewJunior';
import SystemSettings from './pages/Admin/SystemSettings';
import PackageManagement from './pages/Admin/PackageManagement';
import NotFoundPage from './pages/Common/404';
import JuniorDashboard from './pages/JuniorLawyer/JuniorDashboard';
import AssignedCases from './pages/JuniorLawyer/AssignedCases';
import Tasks from './pages/JuniorLawyer/Tasks';
import JuniorMessages from './pages/JuniorLawyer/JuniorMessages';
import JuniorHearings from './pages/JuniorLawyer/JuniorHearing';
import AccountUsers from './pages/Lawyer/AccountUsers';
import UserManagement from './pages/Admin/UserManagement';
import ViewMessages from './pages/Admin/ViewMessages';
import AdminAnalytics from './pages/Admin/ViewAnalytics';
import ClientDashboard from './pages/Client/Clientdashboard';
import Clientcaseprofiles from './pages/Client/Clientcaseprofiles';
import ClientCalendar from './pages/Client/Clientcalendar';
import AcceptInvitationPage from './pages/Common/AcceptInvitationPage';
import ClientInvitation from './pages/Client/ClientInvitation';
import UserOTP from './pages/Common/UserOTP';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>


          {/* Public Routes */}
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<UserLogin />} />
          <Route path={ROUTES.SIGNUP} element={<UserSignUp />} />
          <Route path={ROUTES.OTP} element={<UserOTP />} />
          <Route path={ROUTES.ACCEPT_INVITATION} element={<AcceptInvitationPage />} />
          <Route path={ROUTES.CLIENT_INVITATION} element={<ClientInvitation />} />
          
          {/* Lawyer Routes */}
          <Route path={ROUTES.LAWYER.DASHBOARD} element={
            <ProtectedRoute allowedRoles={['LAWYER']}>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.LAWYER.CASE_PROFILE} element={
            <ProtectedRoute allowedRoles={['LAWYER']}>
              <CaseProfiles />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.LAWYER.CASE_DETAILS} element={
            <ProtectedRoute allowedRoles={['LAWYER']}>
              <CaseDetails />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.LAWYER.NEW_CASE} element={
            <ProtectedRoute allowedRoles={['LAWYER']}>
              <NewCaseProfile />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.LAWYER.CASES} element={
            <ProtectedRoute allowedRoles={['LAWYER']}>
              <Cases />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.LAWYER.CALENDAR} element={
            <ProtectedRoute allowedRoles={['LAWYER']}>
              <Lawyercalander />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.LAWYER.TIMELINE} element={
            <ProtectedRoute allowedRoles={['LAWYER']}>
              <Timeline />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.LAWYER.INCOMES} element={
            <ProtectedRoute allowedRoles={['LAWYER']}>
              <Incomes />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.LAWYER.DUE_PAYMENTS} element={
            <ProtectedRoute allowedRoles={['LAWYER']}>
              <DuePayments />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.LAWYER.CLIENTS} element={
            <ProtectedRoute allowedRoles={['LAWYER']}>
              <Clients />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.LAWYER.MESSAGES} element={
            <ProtectedRoute allowedRoles={['LAWYER']}>
              <Messages />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.LAWYER.ACCOUNT_USERS} element={
            <ProtectedRoute allowedRoles={['LAWYER']}>
              <AccountUsers />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.LAWYER.ADD_JUNIOR} element={
            <ProtectedRoute allowedRoles={['LAWYER']}>
              <AddJunior />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.LAWYER.ADD_CLIENT} element={
            <ProtectedRoute allowedRoles={['LAWYER']}>
              <AddClient />
            </ProtectedRoute>
          } />
          
          {/* Junior Lawyer Routes */}
          <Route path={ROUTES.JUNIOR.DASHBOARD} element={
            <ProtectedRoute allowedRoles={['JUNIOR']}>
              <JuniorDashboard />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.JUNIOR.CASES} element={
            <ProtectedRoute allowedRoles={['JUNIOR']}>
              <AssignedCases />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.JUNIOR.TASKS} element={
            <ProtectedRoute allowedRoles={['JUNIOR']}>
              <Tasks />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.JUNIOR.MESSAGES} element={
            <ProtectedRoute allowedRoles={['JUNIOR']}>
              <JuniorMessages />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.JUNIOR.HEARINGS} element={
            <ProtectedRoute allowedRoles={['JUNIOR']}>
              <JuniorHearings />
            </ProtectedRoute>
          } />
          
          {/* Client Routes */}
          <Route path={ROUTES.CLIENT.DASHBOARD} element={
            <ProtectedRoute allowedRoles={['CLIENT']}>
              <ClientDashboard />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.CLIENT.CASE_PROFILES} element={
            <ProtectedRoute allowedRoles={['CLIENT']}>
              <Clientcaseprofiles />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.CLIENT.CALENDAR} element={
            <ProtectedRoute allowedRoles={['CLIENT']}>
              <ClientCalendar />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.CLIENT.SCHEDULE_MEETING} element={
            <ProtectedRoute allowedRoles={['CLIENT']}>
              <ScheduleMeeting />
            </ProtectedRoute>
          } />
          
          {/* Admin Routes */}
          <Route path={ROUTES.ADMIN.DASHBOARD} element={
            <ProtectedRoute allowedRoles={['ADMIN']}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.ADMIN.SYSTEM_SETTINGS} element={
            <ProtectedRoute allowedRoles={['ADMIN']}>
              <SystemSettings />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.ADMIN.PACKAGE_MANAGEMENT} element={
            <ProtectedRoute allowedRoles={['ADMIN']}>
              <PackageManagement />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.ADMIN.USER_MANAGEMENT} element={
            <ProtectedRoute allowedRoles={['ADMIN']}>
              <UserManagement />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.ADMIN.VIEW_MESSAGES} element={
            <ProtectedRoute allowedRoles={['ADMIN']}>
              <ViewMessages />
            </ProtectedRoute>
          } />
          <Route path={ROUTES.ADMIN.VIEW_ANALYTICS} element={
            <ProtectedRoute allowedRoles={['ADMIN']}>
              <AdminAnalytics />
            </ProtectedRoute>
          } />
          
          {/* 404 Route */}
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />

        </Routes>
      </div>
    </Router>
  );
}
