# Drift - Surf Intelligence Platform

![Drift Logo](assets/icons/logo.png)

## Overview
Drift is a mobile-first web application that delivers precise, real-time, and predictive surf intelligence for active surfers aged 16-45. Designed for both casual and professional users, Drift combines live data with forecasting technology to help users plan their surf sessions with confidence.

## Features
- **Interactive Surf Spot Map**: Explore surf spots worldwide with our interactive map interface
- **Real-time Surf Conditions**: Get up-to-date information on wave height, swell direction, and water temperature
- **Forecast Visualization**: View detailed charts for swell, temperature, and wind conditions
- **Community Integration**: Connect with local surf communities and groups
- **Inspirational Stories**: Read about surf adventures from around the world
- **Mobile Optimized**: Responsive design that works on all devices

## Screenshots
![Homepage](assets/screenshots/homepage.png)
![Surf Map](assets/screenshots/map.png)
![Spot Details](assets/screenshots/spot_details.png)

## Technical Stack
- HTML5, CSS3, JavaScript (ES6+)
- Chart.js for data visualization
- Leaflet.js for interactive mapping
- Responsive design with modern CSS features
- JSON-based data structures

## Project Structure
```
drift/
├── docs/               # Main application files
│   ├── assets/         # Images, icons, and other static assets
│   ├── backend/        # JavaScript for data handling
│   ├── fake_data/      # JSON data files for development
│   ├── styles/         # CSS stylesheets
│   └── *.html          # Page templates
└── README.md           # This file
```

## How to Use
1. Clone the repository:
   ```bash
   git clone https://github.com/MorrisChalmers/Drift.git
   ```

2. Navigate to the project directory:
   ```bash
   cd drift
   ```

3. If using npm for local development:
   ```bash
   npm install
   npm start
   ```

4. Alternatively, open the files directly in your browser:
   ```bash
   open docs/index.html
   ```

5. For development, you can use any local server like:
   ```bash
   npx http-server docs
   ```

## Deployment Guidelines
1. Commit all changes to your repository.

2. Build the application for production (if using build tools):
   ```bash
   npm run build
   ```

3. Deploy to your preferred hosting environment:
   - **Static hosting**: Upload the contents of the `docs` folder to any static hosting service (GitHub Pages, Netlify, Vercel)
   - **Azure Static Web Apps**: For Azure deployments, follow these steps:
     ```bash
     az staticwebapp create --name "drift-surf" --resource-group "myResourceGroup" --source "https://github.com/username/drift" --branch main --app-location "/docs"
     ```

4. Configure your environment variables if required:
   - Create a `.env` file for local development
   - Set environment variables in your hosting platform for production

## Browser Compatibility
Drift is compatible with:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest version)

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
For questions or support, please contact the development team at devs@driftsurf.example.com.