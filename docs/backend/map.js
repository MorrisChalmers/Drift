// Initializes and manages the interactive surf spots map.

document.addEventListener('DOMContentLoaded', async function() {
  // Initialize the Leaflet map
  const map = L.map('map', { zoomControl: false }).setView([0, 0], 4);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Define a custom surfboard marker icon. Could been in a css file, but kept inline for simplicity. 
  // This icon will be used for surf spots on the map.
  const surfIcon = L.icon({
    iconUrl: 'assets/icons/surfboard.png', 
    iconSize: [40, 40], 
    iconAnchor: [20, 40],
    popupAnchor: [0, -32]
  });

  // Load surf spots with coordinates from JSON
  const response = await fetch('fake_data/map.json');
  const spots = await response.json();

  // Add a marker for each spot with a popup
  spots.forEach(spot => {
    if (spot.lat && spot.lng) {
      L.marker([spot.lat, spot.lng], { icon: surfIcon })
        .addTo(map)
        .bindPopup(`
          <b>${spot.name}</b><br>
          ${spot.summary || ''}<br>
          <button onclick="window.location.href='spot_details.html?spot=${encodeURIComponent(spot.name)}'" style="margin-top:8px;padding:6px 16px;background:#36AAA0;color:#fff;border:none;border-radius:8px;cursor:pointer;">View Details</button>
        `);
    }
  });

  // Animate zoom to world view on load
  setTimeout(() => map.setView([0, 0], 4, { animate: true, duration: 1.2 }), 200);
});