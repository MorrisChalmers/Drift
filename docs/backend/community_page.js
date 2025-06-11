// Loads and displays the list of community surf spots on the community page.


document.addEventListener('DOMContentLoaded', function() {
  const list = document.getElementById('surf-spot-list');
  if (!list) return;

  // Fetch the surf spots for the community cards
  fetch('fake_data/surf_spots.json')
    .then(res => res.json())
    .then(spots => {
      spots.forEach(spot => {
        // Create a card for each spot
        const card = document.createElement('div');
        card.className = 'spot-details-container';
        card.style.cursor = 'pointer';
        // Clicking the card navigates to the spot details page
        card.onclick = () => {
          window.location.href = `community_spot_details.html?spot=${encodeURIComponent(spot.name)}`;
        };
        // Fill in card content
        card.innerHTML = `
          ${spot.img ? `<img src="${spot.img}" alt="${spot.name}" class="spot-details-img">` : ''}
          <div class="spot-details-title">${spot.name || ''}</div>
          <div class="spot-details-meta">
            <span class="spot-details-badge"><i class="fa fa-calendar"></i> ${spot.date || ''}</span>
            <span class="spot-details-badge"><i class="fa fa-users"></i> ${spot.members || ''}</span>
          </div>
          <div class="spot-details-desc">${spot.desc || ''}</div>
        `;
        list.appendChild(card);
      });
    });
});

