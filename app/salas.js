import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RoomCard from '../components/RoomCard';
import rooms from '../data/rooms';

// Tela de listagem de salas com filtro por andar
export default function Salas() {
  const [selectedFloor, setSelectedFloor] = useState(0); // 0 = todos
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Extrai os andares unicos dos dados
  const floors = [...new Set(rooms.map((r) => r.floor))].sort();

  // useEffect para filtrar salas quando o andar muda (Aula 04)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (selectedFloor === 0) {
        setFilteredRooms(rooms);
      } else {
        setFilteredRooms(rooms.filter((r) => r.floor === selectedFloor));
      }
      setLoading(false);
    }, 300);
  }, [selectedFloor]);

  const handleRoomPress = (room) => {
    if (selectedRoom && selectedRoom.id === room.id) {
      setSelectedRoom(null);
    } else {
      setSelectedRoom(room);
    }
  };

  return (
    <View style={styles.container}>
      {/* Filtros por andar */}
      <View style={styles.filterSection}>
        <Text style={styles.filterLabel}>Filtrar por andar:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterRow}>
            <TouchableOpacity
              style={[
                styles.filterButton,
                selectedFloor === 0 && styles.filterButtonActive,
              ]}
              onPress={() => setSelectedFloor(0)}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedFloor === 0 && styles.filterTextActive,
                ]}
              >
                Todos
              </Text>
            </TouchableOpacity>

            {floors.map((floor) => (
              <TouchableOpacity
                key={floor}
                style={[
                  styles.filterButton,
                  selectedFloor === floor && styles.filterButtonActive,
                ]}
                onPress={() => setSelectedFloor(floor)}
              >
                <Text
                  style={[
                    styles.filterText,
                    selectedFloor === floor && styles.filterTextActive,
                  ]}
                >
                  {floor}o Andar
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Contador de resultados */}
      <Text style={styles.resultCount}>
        {filteredRooms.length} sala{filteredRooms.length !== 1 ? 's' : ''} encontrada
        {filteredRooms.length !== 1 ? 's' : ''}
      </Text>

      {/* Lista de salas */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading ? (
          <View style={styles.emptyState}>
            <Ionicons name="hourglass-outline" size={40} color="#8E8E9A" />
            <Text style={styles.emptyText}>Carregando...</Text>
          </View>
        ) : filteredRooms.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="search-outline" size={40} color="#8E8E9A" />
            <Text style={styles.emptyText}>Nenhuma sala encontrada</Text>
            <Text style={styles.emptySubtext}>
              Tente selecionar outro andar
            </Text>
          </View>
        ) : (
          filteredRooms.map((room) => (
            <View key={room.id}>
              <RoomCard room={room} onPress={() => handleRoomPress(room)} />

              {/* Detalhes expandidos ao clicar */}
              {selectedRoom && selectedRoom.id === room.id && (
                <View style={styles.detailCard}>
                  <Text style={styles.detailTitle}>Detalhes da Sala</Text>

                  <View style={styles.detailRow}>
                    <Ionicons name="location-outline" size={18} color="#ED145B" />
                    <Text style={styles.detailText}>
                      {room.name} - {room.floor}o Andar
                    </Text>
                  </View>

                  <View style={styles.detailRow}>
                    <Ionicons name="people-outline" size={18} color="#ED145B" />
                    <Text style={styles.detailText}>
                      Capacidade: {room.capacity} pessoas
                    </Text>
                  </View>

                  <View style={styles.detailRow}>
                    <Ionicons name="bookmark-outline" size={18} color="#ED145B" />
                    <Text style={styles.detailText}>Tipo: {room.type}</Text>
                  </View>

                  {room.currentClass && (
                    <View style={styles.detailRow}>
                      <Ionicons name="book-outline" size={18} color="#F44336" />
                      <Text style={[styles.detailText, { color: '#F44336' }]}>
                        Em uso: {room.currentClass}
                      </Text>
                    </View>
                  )}

                  {room.nextClass && (
                    <View style={styles.detailRow}>
                      <Ionicons name="time-outline" size={18} color="#4CAF50" />
                      <Text style={[styles.detailText, { color: '#4CAF50' }]}>
                        Proxima: {room.nextClass}
                      </Text>
                    </View>
                  )}

                  {room.status === 'manutencao' && (
                    <View style={styles.warningBox}>
                      <Ionicons name="warning-outline" size={18} color="#FF9800" />
                      <Text style={styles.warningText}>
                        Esta sala esta em manutencao e nao pode ser utilizada no momento.
                      </Text>
                    </View>
                  )}
                </View>
              )}
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F5',
    padding: 16,
  },
  filterSection: {
    marginBottom: 12,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D2D3A',
    marginBottom: 8,
  },
  filterRow: {
    flexDirection: 'row',
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  filterButtonActive: {
    backgroundColor: '#ED145B',
    borderColor: '#ED145B',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  filterTextActive: {
    color: '#fff',
  },
  resultCount: {
    fontSize: 13,
    color: '#8E8E9A',
    marginBottom: 12,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    gap: 8,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8E8E9A',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#B0B0B0',
  },
  detailCard: {
    backgroundColor: '#FDE8EF',
    borderRadius: 12,
    padding: 16,
    marginTop: -4,
    marginBottom: 12,
    gap: 10,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ED145B',
    marginBottom: 4,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#2D2D3A',
  },
  warningBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FFF3E0',
    padding: 12,
    borderRadius: 8,
    marginTop: 4,
  },
  warningText: {
    flex: 1,
    fontSize: 13,
    color: '#E65100',
  },
});
