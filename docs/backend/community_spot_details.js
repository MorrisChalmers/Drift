// Loads and displays the list of community surf spots on the community page.

document.addEventListener('DOMContentLoaded', function() {
  // Get the spot name from the URL
  const params = new URLSearchParams(window.location.search);
  const spotName = params.get('spot');
  const container = document.getElementById('community-spot-details');

  if (!spotName) {
    container.textContent = "No spot selected.";
    return;
  }

  // Fetch both the spot info and the group long description
  Promise.all([
    fetch('fake_data/surf_spots.json').then(res => res.json()),
    fetch('fake_data/community_groups.json').then(res => res.json())
  ]).then(([spots, groups]) => {
    // Find the spot and group objects by name
    const spot = spots.find(s => s.name === spotName);
    const group = groups.find(g => g.name === spotName);

    if (!spot) {
      container.textContent = "Spot not found.";
      return;
    }

    // Render the hero section and long description
    container.innerHTML = `
      <section class="spot-hero-section">
        ${spot.img ? `<img src="${spot.img}" alt="${spot.name}" class="spot-hero-img">` : ''}
        <div class="spot-hero-content">
          <h1 class="spot-hero-title">${spot.name}</h1>
          <div class="spot-hero-meta">
            <span class="spot-details-badge"><i class="fa fa-calendar"></i> ${spot.date || ''}</span>
            <span class="spot-details-badge"><i class="fa fa-users"></i> ${spot.members || ''}</span>
          </div>
          <div class="spot-hero-desc">${spot.desc || ''}</div>
        </div>
      </section>
      <section class="spot-longdesc-section">
        <h2>About this group</h2>
        <div class="spot-details-longdesc">
          ${group && group.long_desc ? group.long_desc : '<em>No further description available.</em>'}
        </div>
      </section>
    `;
  })
  .catch(err => {
    // Handle fetch or parsing errors
    console.error("Error loading community spot details:", err);
    const container = document.getElementById('community-spot-details');
    if (container) {
      container.textContent = "Error loading spot details.";
    }
  });

  // Join community form handler
  const joinForm = document.querySelector('.join-community-form');
  if (joinForm) {
    joinForm.addEventListener('submit', function(e) {
      e.preventDefault();
      if (this.checkValidity()) {
        alert("The group doesn't look for surfers right now");
      }
    });
  }
});