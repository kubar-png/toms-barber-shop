"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

// Minská 98, Brno-Žabovřesky · approx coords (uprav podle potřeby)
const SHOP_LAT = 49.207;
const SHOP_LON = 16.5832;

export function MapDark() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    let map: import("leaflet").Map | undefined;

    (async () => {
      const L = await import("leaflet");
      if (!ref.current) return;

      map = L.map(ref.current, {
        center: [SHOP_LAT, SHOP_LON],
        zoom: 16,
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: true,
        dragging: true,
      });

      // CartoDB Dark Matter — no labels = no street names, just clean geometry
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://carto.com/attributions" target="_blank" rel="noreferrer">CARTO</a> · <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OSM</a>',
        },
      ).addTo(map);

      // Brand pin — champagne dot with halo
      L.circleMarker([SHOP_LAT, SHOP_LON], {
        radius: 7,
        fillColor: "#E0C49C",
        color: "#070B14",
        weight: 2,
        fillOpacity: 1,
      })
        .addTo(map)
        .bindTooltip("Tom's Barbershop · Minská 98", {
          permanent: false,
          direction: "top",
          offset: [0, -8],
        });
    })();

    return () => {
      map?.remove();
    };
  }, []);

  return <div ref={ref} className="map-canvas" aria-label="Mapa — Minská 98, Brno-Žabovřesky" />;
}
