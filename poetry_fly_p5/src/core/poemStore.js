export async function loadPoemCollection(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load poem collection from ${url}`);
  }
  const data = await response.json();
  validatePoemCollection(data);
  return data;
}

function validatePoemCollection(data) {
  if (!data || typeof data !== 'object' || !Array.isArray(data.poems)) {
    throw new Error('Poem collection format is invalid');
  }
}
