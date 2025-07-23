export const ROUTES = {
  HOME: '/',
  
  // Auth routes
  LOGIN: '/user/login',
  SIGNUP: '/user/signup',
  OTP: '/user/otp',
  
  // Lawyer routes
  LAWYER: {
    DASHBOARD: '/lawyer/dashboard',
    CASES: '/lawyer/cases',
    CASE_PROFILE: '/lawyer/caseprofile',
    CASE_DETAILS: '/lawyer/case/:caseId',
    NEW_CASE: '/lawyer/newcaseprofile',
    CALENDAR: '/lawyer/calendar',
    TIMELINE: '/lawyer/timeline',
    INCOMES: '/lawyer/incomes',
    DUE_PAYMENTS: '/lawyer/duepayments',
    CLIENTS: '/lawyer/clients',
    MESSAGES: '/lawyer/messages',
    ACCOUNT_USERS: '/lawyer/accountusers',
    ADD_JUNIOR: '/lawyer/addnewjunior',
    ADD_CLIENT: '/lawyer/:caseId/addnewclient'
  },
  
  // Junior routes
  JUNIOR: {
    DASHBOARD: '/junior/dashboard',
    CASES: '/junior/cases',
    TASKS: '/junior/tasks',
    MESSAGES: '/junior/messages',
    HEARINGS: '/junior/hearings'
  },
  
  // Client routes
  CLIENT: {
    DASHBOARD: '/client/dashboard',
    CASE_PROFILES: '/client/caseprofiles',
    CALENDAR: '/client/clientcalendar',
    SCHEDULE_MEETING: '/client/schedulemeeting'
  },
  
  // Admin routes
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    SYSTEM_SETTINGS: '/admin/systemsettings',
    PACKAGE_MANAGEMENT: '/admin/packagemanagement',
    USER_MANAGEMENT: '/admin/usermanagement',
    VIEW_MESSAGES: '/admin/viewmessages',
    VIEW_ANALYTICS: '/admin/viewanalytics'
  },
  
  // Common routes
  NOT_FOUND: '*',
  ACCEPT_INVITATION: '/accept-invitation/:token',
  CLIENT_INVITATION: '/invitation/:inviteToken'
};