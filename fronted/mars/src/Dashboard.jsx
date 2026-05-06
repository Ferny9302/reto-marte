import React from 'react';
import { RobotList } from './components/RobotList';
import { EstadisticasPanel } from './components/EstadisticasPanel';
import { MapaMarte } from './components/MapaMarte';
import { GenerateRutaModal } from './components/GenerateRutaModal';
import { CreateRobotModal } from './components/CreateRobotModal';
import teamLogo from './assets/logo.ico';

function Dashboard() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [robotModalOpen, setRobotModalOpen] = React.useState(false);
  const [generatedRoute, setGeneratedRoute] = React.useState(null);
  const [routeStatus, setRouteStatus] = React.useState('idle');
  const [selectedRouteId, setSelectedRouteId] = React.useState(null);
  const [robotsRefreshToken, setRobotsRefreshToken] = React.useState(0);
  const [activeSection, setActiveSection] = React.useState('dashboard');
  const [activeMap, setActiveMap] = React.useState('mars');
  const [iaLoading, setIaLoading] = React.useState(false);

  const triggerIA = async () => {
    try {
      setIaLoading(true);
      const { apiService } = await import('./services/api');
      const data = await apiService.remediarIA(activeMap);
      
      if (data.rutas && data.rutas.length > 0) {
        setGeneratedRoute(data.rutas[0]);
        setRouteStatus('planificada');
      }

      alert('IA de Remediación activada: Se han asignado rutas a los robots disponibles para limpiar las zonas tóxicas.');
      // Force map refresh
      setRobotsRefreshToken(v => v + 1);
    } catch (err) {
      alert(err.message);
    } finally {
      setIaLoading(false);
    }
  };

  const dashboardRef = React.useRef(null);
  const mapSectionRef = React.useRef(null);
  const robotsRef = React.useRef(null);
  const simulationRef = React.useRef(null);
  const configRef = React.useRef(null);

  const scrollToSection = (section) => {
    setActiveSection(section);
    const map = {
      dashboard: dashboardRef,
      mapa: mapSectionRef,
      robots: robotsRef,
      simulacion: simulationRef,
      configuracion: configRef,
    }[section];

    if (map && map.current) {
      map.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="shell">
      <div className="mission-layout">
        <main className="content">
          <header className="topbar panel" ref={dashboardRef}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <h1 style={{ margin: 0, fontSize: '1.6rem', color: '#ff8a2b', fontWeight: '800', letterSpacing: '1px' }}>MARS MATRIX</h1>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'radial-gradient(circle at 50% 50%, #0d131f 0%, #06090f 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #ff6a10', boxShadow: '0 0 15px rgba(255, 106, 16, 0.4), inset 0 0 10px rgba(255, 106, 16, 0.2)' }}>
                  <img src={teamLogo} alt="Logo de Mars Matrix" style={{ borderRadius: '50%', width: '60px', height: '60px', objectFit: 'contain', filter: 'drop-shadow(0 0 5px rgba(255, 106, 16, 0.5))' }} />
                </div>
              </div>
              <div style={{ borderLeft: '1px solid #2f3746', paddingLeft: '20px' }}>
                <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#fff' }}>Gemelo Digital de Remediacion</h2>
                <p style={{ margin: '2px 0 0', fontSize: '0.8rem', color: '#aaa' }}>Control de red biologica y monitoreo de mision</p>
              </div>
            </div>
            <div className="topbar-actions">
              <button 
                className="btn-primary" 
                onClick={triggerIA} 
                disabled={iaLoading} 
                style={{ background: '#ff3a5d', color: '#fff', fontWeight: 'bold', border: '1px solid #ff708c', boxShadow: '0 0 10px rgba(255,58,93,0.5)' }}
              >
                {iaLoading ? 'Ejecutando...' : 'Activar IA Remediación'}
              </button>
              <button className="btn-primary" onClick={() => setModalOpen(true)}>Generar Ruta</button>
              <button className="btn-soft" type="button" onClick={() => setRobotModalOpen(true)}>Agregar Robot</button>
              <span className="sol-tag">SOL 341</span>
            </div>
          </header>

          <section className="main-grid">
            <article className="map-panel panel" ref={mapSectionRef}>
              <MapaMarte
                activeMap={activeMap}
                setActiveMap={setActiveMap}
                generatedRoute={generatedRoute}
                routeStatus={routeStatus}
                onRouteCompleted={() => setRouteStatus('completada')}
                onRouteSelected={setSelectedRouteId}
                refreshToken={robotsRefreshToken}
              />
            </article>

            <aside className="right-column">
              <section className="panel kpi-panel">
                <h3>
                  Simulacion IA y Gemelo Digital
                  <span style={{ fontSize: '0.8em', color: '#ff8a2b', marginLeft: '8px' }}>
                    {selectedRouteId ? `(Ruta #${selectedRouteId})` : '(Global)'}
                  </span>
                </h3>
                <EstadisticasPanel selectedRouteId={selectedRouteId} />
              </section>

              <section className="panel info-panel" ref={simulationRef}>
                <h3>Estado de Mision</h3>
                <ul>
                  <li>
                    <span>Estado del sistema</span>
                    <strong className="online">Online</strong>
                  </li>
                  <li>
                    <span>Version</span>
                    <strong>v1.1.0</strong>
                  </li>
                  <li>
                    <span>Algoritmo</span>
                    <strong>A* + cobertura zigzag</strong>
                  </li>
                </ul>
              </section>
            </aside>
          </section>

          <section className="panel robots-panel" ref={robotsRef}>
            <RobotList
              onCreateRobot={() => setRobotModalOpen(true)}
              onShowRoutes={() => scrollToSection('robots')}
              onShowRouteMap={() => scrollToSection('mapa')}
              refreshToken={robotsRefreshToken}
            />
          </section>

          <section className="panel info-panel" ref={configRef}>
            <h3>Configuracion</h3>
            <p className="state-msg">Aqui puedes ajustar la mision, los mapas y la simulacion. Por ahora la accion visible es navegar a los bloques principales.</p>
          </section>
        </main>
        <GenerateRutaModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onGenerated={(ruta) => {
            setGeneratedRoute(ruta);
            setRouteStatus('planificada');
          }}
        />
        <CreateRobotModal
          open={robotModalOpen}
          onClose={() => setRobotModalOpen(false)}
          onCreated={() => {
            setRobotsRefreshToken((value) => value + 1);
            scrollToSection('robots');
          }}
        />
      </div>
    </div>
  );
}

export default Dashboard;
