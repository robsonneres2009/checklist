import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { ContainerMap, Title } from "./index.styled";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "leaflet/dist/leaflet.css";
import { ChecklistContext } from "@/contexts/ChecklistContext";

interface Props {
  onChange: (values: { lat: string; lng: string }) => void;
  showNameFarm?: boolean;
}

export default function Map({ onChange, showNameFarm = false }: Props) {
  const { geolocaltion, setGeolocaltion, checklist } =
    useContext(ChecklistContext);
  const [isWindowAvailable, setIsWindowAvailable] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsWindowAvailable(true);
    }
  }, []);

  useEffect(() => {
    if (isWindowAvailable) {
      // aqui você pode fazer qualquer ação necessária quando o window estiver disponível,
      // como buscar dados da API ou atualizar o estado do componente
    }
  }, [isWindowAvailable]);

  let center = {
    lat: checklist.location.latitude || geolocaltion.lat || -27.6157733,
    lng: checklist.location.longitude || geolocaltion.lng || -48.6276491,
  };

  function DraggableMarker() {
    const [draggable, setDraggable] = useState(false);
    const [position, setPosition] = useState(center);
    const markerRef = useRef(null);
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker: any = markerRef.current;
          if (marker != null) {
            const newPosition = {
              lat: marker?._latlng?.lat || 0,
              lng: marker?._latlng?.lng || 0,
            };
            setPosition(newPosition);
            setGeolocaltion(newPosition);
            onChange(newPosition);
          }
        },
      }),
      []
    );
    const toggleDraggable = useCallback(() => {
      !showNameFarm && setDraggable((d) => !d);
    }, []);

    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
      >
        <Popup minWidth={90}>
          {showNameFarm ? (
            <span onClick={toggleDraggable}>{checklist.farmer.name}</span>
          ) : (
            <span onClick={toggleDraggable}>
              {draggable
                ? "Arraste para selecionar"
                : "Click aqui para mover o cursor"}
            </span>
          )}
        </Popup>
      </Marker>
    );
  }

  return isWindowAvailable ? (
    <ContainerMap>
      <Title>Localização da fazenda:</Title>
      <MapContainer
        center={
          center?.lat !== "" ? center : { lat: -27.6157733, lng: -48.6276491 }
        }
        zoom={13}
        scrollWheelZoom={false}
        className="Container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DraggableMarker />
      </MapContainer>
    </ContainerMap>
  ) : null;
}
