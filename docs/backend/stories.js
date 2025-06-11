// Loads and displays the full content of a selected surf story.

function escapeHTML(str) {
  // Escape HTML special characters to prevent XSS
  return String(str).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;',
    '"': '&quot;', "'": '&#39;'
  })[char]);
}

document.addEventListener('DOMContentLoaded', async () => {
  // Get the story ID from the URL
  const params = new URLSearchParams(window.location.search);
  const storyId = params.get('story');
  if (!storyId) return;

  try {
    // Fetch stories data
    const response = await fetch('fake_data/stories.json');
    const stories = await response.json();
    // Find the story by ID
    const story = stories.find(s => s.id === storyId);

    // Get DOM elements for story display
    const titleEl = document.getElementById('story-title');
    const contentEl = document.getElementById('story-content');
    const authorEl = document.getElementById('story-author');
    const bannerEl = document.getElementById('story-banner');

    if (!story) {
      titleEl.textContent = "Story Not Found";
      return;
    }

    // Fill in story details
    titleEl.textContent = escapeHTML(story.title);
    contentEl.innerHTML = story.content;
    authorEl.textContent = story.author ? `By ${escapeHTML(story.author)}` : '';
    if (story.image) bannerEl.style.backgroundImage = `url('${story.image}')`;
  } catch (err) {
    console.error('Failed to load story:', err);
  }
});