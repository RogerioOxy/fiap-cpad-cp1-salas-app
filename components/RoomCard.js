import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StatusBadge from './StatusBadge';

// Componente reutilizavel para exibir informacoes de uma sala
export default function RoomCard({ room, onPress }) {
  const getIcon = () => {
    switch (room.type) {
      case 'Laboratorio':
        return 'desktop-outline';
      case 'Auditorio':
        return 'megaphone-outline';
      default:
        return 'school-outline';
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Ionicons name={getIcon()} size={24} color="#ED145B" />
        </View>
        <View style={styles.titleArea}>
          <Text style={styles.name}>{room.name}</Text>
          <Text style={styles.type}>{room.type}</Text>
        </View>
        <StatusBadge status={room.status} />
      </View>

      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Ionicons name="people-outline" size={16} color="#8E8E9A" />
          <Text style={styles.detailText}>{room.capacity} lugares</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="layers-outline" size={16} color="#8E8E9A" />
          <Text style={styles.detailText}>{room.floor}o andar</Text>
        </View>
      </View>

      {room.currentClass && (
        <View style={styles.classInfo}>
          <Ionicons name="book-outline" size={14} color="#F44336" />
          <Text style={styles.classText}>Agora: {room.currentClass}</Text>
        </View>
      )}

      {room.nextClass && room.status === 'disponivel' && (
        <View style={styles.classInfo}>
          <Ionicons name="time-outline" size={14} color="#4CAF50" />
          <Text style={[styles.classText, { color: '#4CAF50' }]}>
            Proxima: {room.nextClass}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FDE8EF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  titleArea: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D2D3A',
  },
  type: {
    fontSize: 12,
    color: '#8E8E9A',
    marginTop: 2,
  },
  details: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailText: {
    fontSize: 13,
    color: '#8E8E9A',
  },
  classInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F5',
  },
  classText: {
    fontSize: 13,
    color: '#F44336',
  },
});
