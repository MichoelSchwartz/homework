/* globals google*/
(async function () {
  'use strict';

  const defaultPosition = { lat: 40.096435526114426, lng: -74.22148623738576 };
  const { Map } = await google.maps.importLibrary('maps');
  const { DrawingManager } = await google.maps.importLibrary('drawing');
  let map = new Map(document.getElementById('map'), {
    zoom: 18,
    center: defaultPosition,
    mapId: 'DEMO_MAP_ID',
  });
  const drawingManager = new DrawingManager();
  drawingManager.setMap(map);

  const drawings = JSON.parse(localStorage.drawings || '[]');

  drawings.forEach(drawing => {
    switch (drawing.type) {
      case 'marker':
        new google.maps.Marker({
          map,
          position: drawing.position
        });
        break;
      case 'circle':
        new google.maps.Circle({
          map,
          center: drawing.center,
          radius: drawing.radius,
        });
        break;
      case 'polyline':
        new google.maps.Polyline({
          map,
          geodesic: true,
          path: drawing.path
        });
        break;
      case 'polygon':
        new google.maps.Polygon({
          map,
          path: drawing.path
        });
        break;
      case 'rectangle':
        new google.maps.Rectangle({
          map,
          bounds: drawing.bounds
        });
        break;
    }
  });

  drawingManager.addListener('markercomplete', overlay => {
    drawings.push({ type: 'marker', position: overlay.getPosition() });
    localStorage.drawings = JSON.stringify(drawings);
  });

  drawingManager.addListener('circlecomplete', overlay => {
    drawings.push({ type: 'circle', radius: overlay.getRadius(), center: overlay.getCenter() });
    localStorage.drawings = JSON.stringify(drawings);
  });

  drawingManager.addListener('polylinecomplete', overlay => {
    drawings.push({ type: 'polyline', path: overlay.getPath().getArray() });
    localStorage.drawings = JSON.stringify(drawings);
  });

  drawingManager.addListener('polygoncomplete', overlay => {
    drawings.push({ type: 'polygon', path: overlay.getPath().getArray() });
    localStorage.drawings = JSON.stringify(drawings);
  });

  drawingManager.addListener('rectanglecomplete', overlay => {
    drawings.push({ type: 'rectangle', bounds: overlay.getBounds() });
    localStorage.drawings = JSON.stringify(drawings);
  });
}());