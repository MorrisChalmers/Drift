// Loads and displays detailed info and charts for a selected surf spot.

document.addEventListener('DOMContentLoaded', async function() {
  // Parse the spot name from the URL query string
  const params = new URLSearchParams(window.location.search);
  const spotName = params.get('spot');

  // Fetch the spot details JSON data
  const response = await fetch('fake_data/spot_details.json');
  const spots = await response.json();

  // Find the spot object by name
  const spot = spots.find(s => s.name === spotName);

  if (!spot) {
    document.getElementById('spot-title').textContent = "Spot Not Found";
    return;
  }

  // Populate the spot details in the DOM
  document.getElementById('spot-title').textContent = spot.name;
  document.getElementById('spot-summary').textContent = spot.summary || '';

  // Show location and flag image if available
  if (spot.location && spot.img) {
    document.getElementById('spot-location').innerHTML =
      `${spot.location} <img src="${spot.img}" alt="${spot.name} image" style="height:24px;vertical-align:middle;margin-left:8px;border-radius:4px;">`;
  } else {
    document.getElementById('spot-location').textContent = spot.location || '';
  }

  // Fill in other spot details
  document.getElementById('spot-recommendation').textContent = spot.recommendation || '';
  document.getElementById('spot-crowds').textContent = spot.crowds || '';
  document.getElementById('spot-facilities').textContent = spot.facilities || '';
  document.getElementById('spot-hazards').textContent = spot.hazards || '';
  document.getElementById('spot-local-tips').textContent = spot.local_tips || '';

  // Draw swell chart if data exists
  if (spot.swell_hourly && spot.swell_labels) {
    const ctx = document.getElementById('swell-graph').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: spot.swell_labels,
        datasets: [{
          label: 'Swell (m)',
          data: spot.swell_hourly,
          borderColor: '#36AAA0',
          backgroundColor: 'rgba(54,170,160,0.15)',
          tension: 0.3,
          pointRadius: 3,
          fill: true
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, title: { display: true, text: 'Meters' } },
          x: { title: { display: true, text: 'Time' } }
        }
      }
    });
  }

  // Draw temperature chart if data exists
  if (spot.temp_water && spot.temp_air && spot.temp_labels) {
    const ctx2 = document.getElementById('temp-graph').getContext('2d');
    new Chart(ctx2, {
      type: 'line',
      data: {
        labels: spot.temp_labels,
        datasets: [
          {
            label: 'Water Temp (°C)',
            data: spot.temp_water,
            borderColor: '#36AAA0',
            backgroundColor: 'rgba(54,170,160,0.10)',
            tension: 0.3,
            pointRadius: 3,
            fill: false
          },
          {
            label: 'Air Temp (°C)',
            data: spot.temp_air,
            borderColor: '#f7b267',
            backgroundColor: 'rgba(247,178,103,0.10)',
            tension: 0.3,
            pointRadius: 3,
            fill: false
          }
        ]
      },
      options: {
        plugins: { legend: { display: true } },
        scales: {
          y: { beginAtZero: false, title: { display: true, text: '°C' } },
          x: { title: { display: true, text: 'Time' } }
        }
      }
    });
  }

  // Draw wind chart if data exists
  if (spot.wind_offshore && spot.wind_onshore && spot.wind_labels) {
    const ctxWind = document.getElementById('wind-graph').getContext('2d');
    new Chart(ctxWind, {
      type: 'line',
      data: {
        labels: spot.wind_labels,
        datasets: [
          {
            label: 'Wind (km/h)',
            data: spot.wind_offshore,
            borderColor: '#36AAA0',
            backgroundColor: 'rgba(54,170,160,0.10)',
            tension: 0.3,
            pointRadius: 3,
            fill: false
          },
        ]
      },
      options: {
        plugins: { legend: { display: true } },
        scales: {
          y: { beginAtZero: true, title: { display: true, text: 'km/h' } },
          x: { title: { display: true, text: 'Time' } }
        }
      }
    });
  }
});