const API_URL = '/api/resumes';

export const saveResume = async (resumeData, existingId = null) => {
  const url = existingId ? `${API_URL}/${existingId}` : API_URL;
  const method = existingId ? 'PUT' : 'POST';

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resumeData),
  });

  if (!response.ok) {
    throw new Error('Failed to save resume');
  }

  return response.json();
};

export const fetchResume = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch resume');
  }
  return response.json();
};
