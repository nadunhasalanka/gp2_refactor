// >> In a NEW file: services/caseService.js

// We still need the authenticatedFetch helper to make secure calls.
import { authenticatedFetch } from './authService';

/**
 * Creates a new case in the backend.
 * @param {object} caseFormData - The state object from your NewCaseProfile component's form.
 * @returns {Promise<string>} The UUID of the newly created case.
 */
export const createCase = async (caseFormData) => {
  // Transform payment status to match backend enum
  const mapPaymentStatus = (status) => {
    switch (status) {
      case 'Paid': return 'PAID_IN_FULL';
      case 'Partially Paid': return 'PARTIALLY_PAID';
      case 'Not Paid': return 'NOT_INVOICED';
      default: return 'NOT_INVOICED';
    }
  };

  // 1. Transform the frontend form state into the backend DTO structure.
  const createCaseRequest = {
    clientName: caseFormData.clientName,
    clientPhone: caseFormData.clientPhone,
    clientEmail: caseFormData.clientEmail,
    opposingPartyName: caseFormData.opposingParty,
    associatedJuniorId: caseFormData.junior || null, // Use null if no junior is selected
    caseNumber: caseFormData.caseNumber,
    court: caseFormData.court,
    initialHearingDate: caseFormData.date, // Assumes your form state uses 'date'
    description: caseFormData.description,
    caseType: caseFormData.caseType,
    agreedFee: parseFloat(caseFormData.agreedFee) || 0,
    paymentStatus: mapPaymentStatus(caseFormData.paymentStatus),
  };

  // 2. Make the authenticated API call to the POST /api/cases endpoint.
  // The authenticatedFetch function will handle adding the auth token.
  const response = await authenticatedFetch('/api/cases', {
    method: 'POST',
    body: JSON.stringify(createCaseRequest),
  });

  // Return the case ID from the response
  return response.id || response.caseId;
};

/**
 * Fetches a list of all junior lawyers in the current user's firm.
 * This is needed to populate the dropdown in the "Create Case" form.
 * @returns {Promise<Array<object>>} A list of junior user objects.
 */
export const getJuniorsForFirm = async () => {
  // We assume you will create a new endpoint for this on your backend.
  return await authenticatedFetch('/api/team/juniors');
};

/**
 * Fetches all cases accessible to the currently logged-in user.
 * @returns {Promise<Array<object>>} A list of case response DTOs.
 */
export const getMyCases = async () => {
    return await authenticatedFetch('/api/cases');
};

/**
 * Fetches the details of a single case by its ID.
 * @param {string} caseId - The UUID of the case.
 * @returns {Promise<object>} A single case response DTO.
 */
export const getCaseById = async (caseId) => {
    return await authenticatedFetch(`/api/cases/${caseId}`);
};

// You can add other case-related API functions here in the future,
// such as updateCase, archiveCase, addCaseMember, etc.

export const getHearingsForCase = async (caseId) => {
    return await authenticatedFetch(`/api/hearings/by-case/${caseId}`);
};

export const createHearing = async (caseId, hearingFormData) => {
    // Combine the date and time from the modal's form into a single
    // ISO 8601 formatted string, which is what the backend's Instant type expects.
    const hearingDateISO = new Date(
        `${hearingFormData.date}T${hearingFormData.time || '00:00:00'}`
    ).toISOString();

    const payload = {
        title: hearingFormData.label, // The modal uses 'label', backend expects 'title'
        hearingDate: hearingDateISO,
        location: hearingFormData.location,
        note: hearingFormData.note,
    };

    return await authenticatedFetch(`/api/hearings/for-case/${caseId}`, {
        method: 'POST',
        body: JSON.stringify(payload)
    });
};

/**
 * Updates an existing hearing.
 * @param {string} hearingId - The UUID of the hearing to update.
 * @param {object} hearingFormData - The data from the edit hearing form.
 * @returns {Promise<object>} The updated hearing DTO from the backend.
 */
export const updateHearing = async (hearingId, hearingFormData) => {
    // Format the date/time into an ISO string for the backend
    const hearingDateISO = new Date(
        `${hearingFormData.date}T${hearingFormData.time || '00:00:00'}`
    ).toISOString();

    const payload = {
        title: hearingFormData.label,
        hearingDate: hearingDateISO,
        location: hearingFormData.location,
        note: hearingFormData.note,
        status: hearingFormData.status,
    };

    return await authenticatedFetch(`/api/hearings/${hearingId}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
    });
};

/**
 * Deletes a hearing by its ID.
 * @param {string} hearingId - The UUID of the hearing to delete.
 */
export const deleteHearing = async (hearingId) => {
    return await authenticatedFetch(`/api/hearings/${hearingId}`, {
        method: 'DELETE'
    });
};