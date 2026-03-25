import { View, Text, StyleSheet } from 'react-native';

// Componente reutilizavel para exibir o status de uma sala
export default function StatusBadge({ status }) {
  const getStatusInfo = () => {
    switch (status) {
      case 'disponivel':
        return { label: 'Disponivel', color: '#4CAF50', bg: '#E8F5E9' };
      case 'ocupada':
        return { label: 'Ocupada', color: '#F44336', bg: '#FFEBEE' };
      case 'manutencao':
        return { label: 'Manutencao', color: '#FF9800', bg: '#FFF3E0' };
      default:
        return { label: 'Indefinido', color: '#9E9E9E', bg: '#F5F5F5' };
    }
  };

  const info = getStatusInfo();

  return (
    <View style={[styles.badge, { backgroundColor: info.bg }]}>
      <View style={[styles.dot, { backgroundColor: info.color }]} />
      <Text style={[styles.text, { color: info.color }]}>{info.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
});
