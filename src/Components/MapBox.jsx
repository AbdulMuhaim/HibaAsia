import { useEffect, useRef  } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

const MapComponent = ({ mapId, longitude, latitude }) => {

  mapboxgl.accessToken = 'pk.eyJ1IjoibXVoYWltMjUiLCJhIjoiY2xua2dyMm5oMGwxYjJycnp1anFlaGQ2ZCJ9.YmYBTuY9ozBqujUmiUa-Kw';
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [longitude, latitude],
      zoom: 12, 
    });

    new mapboxgl.Marker({ color: 'teal' }).setLngLat([longitude, latitude]).addTo(map);
      
    return () => map.remove();
  }, [longitude, latitude]);

  return (
    <div className="relative w-full">
      <div id={mapId} ref={mapContainer} className="sm:h-[50vh] lg:h-64 xl:h-80 h-[35vh]"></div>
    </div>
  );
};

export default MapComponent

