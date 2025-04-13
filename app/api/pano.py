from fastapi import APIRouter, Query
from fastapi.responses import HTMLResponse

# from app.schemas.pano import PanoInput
from app.core.config import GOOGLE_API_KEY


router = APIRouter(prefix='/pano', tags=['Панорама'])

@router.get("/streetview", response_class=HTMLResponse)
async def streetview(
        lat: float = Query(..., description="Latitude of the location"),
        lng: float = Query(..., description="Longitude of the location"),
        heading: float = Query(165, description="View heading (degrees)"),
        pitch: float = Query(0, description="View pitch (degrees)"),
        zoom: int = Query(1, description="Zoom level")
):
    html_content = f"""
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          html, body {{
            height: 100%;
            margin: 0;
            padding: 0;
          }}
          #pano {{
            height: 100%;
            width: 100%;
          }}
        </style>
        <script src="https://maps.googleapis.com/maps/api/js?key={GOOGLE_API_KEY}"></script>
      </head>
      <body>
        <div id="pano"></div>
        <script>
          function initialize() {{
            var panorama = new google.maps.StreetViewPanorama(
                document.getElementById('pano'), {{
                  position: {{ lat: {lat}, lng: {lng} }},
                  pov: {{
                    heading: {heading},
                    pitch: {pitch}
                  }},
                  zoom: {zoom}
                }}
            );
          }}
          window.onload = initialize;
        </script>
      </body>
    </html>
    """
    return HTMLResponse(content=html_content, status_code=200)
