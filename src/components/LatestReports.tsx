import '../styles/LatestReports.scss'

function LatestReports() {
  return (
    <section id="reports" className="reports">
      <div className="reports__container">
        <div className="reports__header">
          <h2 className="reports__header-title">Latest Reports</h2>
          <p className="reports__header-description">
            Real-time updates on ocean conditions, tsunami warnings, and community-submitted disaster reports from across the coastline.
          </p>
        </div>
        
        <div className="reports__grid">
          {/* Report Card 1 */}
          <div className="reports__card reports__card--danger">
            <div className="reports__card-header">
              <div className="reports__card-icon reports__card-icon--danger">ALERT</div>
              <div>
                <h3 className="reports__card-title reports__card-title--danger">High Tsunami Risk</h3>
                <p className="reports__card-time reports__card-time--danger">East Coast - 2 hours ago</p>
              </div>
            </div>
            <p className="reports__card-content">Seismic activity detected 150km offshore. Coastal evacuation protocols activated.</p>
          </div>
          
          {/* Report Card 2 */}
          <div className="reports__card reports__card--warning">
            <div className="reports__card-header">
              <div className="reports__card-icon reports__card-icon--warning">WARN</div>
              <div>
                <h3 className="reports__card-title reports__card-title--warning">Storm Surge Warning</h3>
                <p className="reports__card-time reports__card-time--warning">West Coast - 4 hours ago</p>
              </div>
            </div>
            <p className="reports__card-content">Cyclone approaching. High tide levels expected. Stay alert for updates.</p>
          </div>
          
          {/* Report Card 3 */}
          <div className="reports__card reports__card--success">
            <div className="reports__card-header">
              <div className="reports__card-icon reports__card-icon--success">SAFE</div>
              <div>
                <h3 className="reports__card-title reports__card-title--success">All Clear</h3>
                <p className="reports__card-time reports__card-time--success">South Coast - 1 hour ago</p>
              </div>
            </div>
            <p className="reports__card-content">Normal ocean conditions. No immediate threats detected in this region.</p>
          </div>
        </div>
        
        <div className="reports__view-all">
          <button className="reports__button">
            View All Reports
          </button>
        </div>
      </div>
    </section>
  )
}

export default LatestReports