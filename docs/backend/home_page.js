// Loads and displays the main surf spot stats table on the homepage.

document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('spot-stats-table');
  if (!container) return;

  // Fetch the spot stats table data
  fetch('fake_data/spot_stats_table.json')
    .then(res => res.json())
    .then(data => {
      // Build the HTML for the stats table
      let html = `
        <div class="spot-table">
          <div class="spot-table-header">
            <span class="spot-table-title">SPOT</span>
            ${data.days.map((d, i) => `<span class="spot-table-day">${d}<br><span class="spot-table-date">${data.dates[i]}</span></span>`).join('')}
          </div>
          ${data.spots.map(spot => `
            <div class="spot-table-row" data-spot="${encodeURIComponent(spot.name)}" style="cursor:pointer;">
              <span class="spot-table-spotname">${spot.name}</span>
              ${spot.stats.map(stat => `
                <span class="spot-table-stat">
                  <span class="spot-table-wave">${stat.wave}</span><br>
                  <span class="spot-table-temp">${stat.temp}</span>
                </span>
              `).join('')}
            </div>
          `).join('')}
        </div>
      `;
      container.innerHTML = html;

      // Add click listeners to each spot row to go to details page
      document.querySelectorAll('.spot-table-row').forEach(row => {
        row.addEventListener('click', function() {
          const spotName = this.getAttribute('data-spot');
          window.location.href = `spot_details.html?spot=${spotName}`;
        });
      });
    });
});