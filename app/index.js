import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import rooms from '../data/rooms';

// Tela inicial do app - exibe resumo e acesso rapido
export default function Home() {
  const router = useRouter();
  const [stats, setStats] = useState({ total: 0, disponiveis: 0, ocupadas: 0 });
  const [loading, setLoading] = useState(true);

  // useEffect para simular carregamento de dados (Aula 04)
  useEffect(() => {
    // Simula um pequeno delay como se buscasse dados
    setTimeout(() => {
      const disponiveis = rooms.filter((r) => r.status === 'disponivel').length;
      const ocupadas = rooms.filter((r) => r.status === 'ocupada').length;
      setStats({ total: rooms.length, disponiveis, ocupadas });
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Ionicons name="school" size={48} color="#ED145B" />
        <Text style={styles.loadingText}>Carregando salas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Banner principal */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>FIAP Salas</Text>
        <Text style={styles.bannerSubtitle}>
          Consulte a disponibilidade de salas e laboratorios da FIAP em tempo real
        </Text>
      </View>

      {/* Cards de estatisticas */}
      <View style={styles.statsRow}>
        <View style={[styles.statCard, { backgroundColor: '#E8F5E9' }]}>
          <Text style={[styles.statNumber, { color: '#4CAF50' }]}>
            {stats.disponiveis}
          </Text>
          <Text style={styles.statLabel}>Disponiveis</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: '#FFEBEE' }]}>
          <Text style={[styles.statNumber, { color: '#F44336' }]}>
            {stats.ocupadas}
          </Text>
          <Text style={styles.statLabel}>Ocupadas</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: '#FDE8EF' }]}>
          <Text style={[styles.statNumber, { color: '#ED145B' }]}>
            {stats.total}
          </Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
      </View>

      {/* Botao de acesso rapido */}
      <TouchableOpacity
        style={styles.ctaButton}
        onPress={() => router.push('/salas')}
      >
        <Ionicons name="search" size={20} color="#fff" />
        <Text style={styles.ctaText}>Ver todas as salas</Text>
      </TouchableOpacity>

      {/* Info cards */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Como funciona?</Text>

        <View style={styles.infoCard}>
          <Ionicons name="eye-outline" size={24} color="#ED145B" />
          <View style={styles.infoTextArea}>
            <Text style={styles.infoCardTitle}>Consulte</Text>
            <Text style={styles.infoCardDesc}>
              Veja quais salas estao livres agora
            </Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Ionicons name="filter-outline" size={24} color="#ED145B" />
          <View style={styles.infoTextArea}>
            <Text style={styles.infoCardTitle}>Filtre</Text>
            <Text style={styles.infoCardDesc}>
              Filtre por andar para encontrar mais rapido
            </Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Ionicons name="time-outline" size={24} color="#ED145B" />
          <View style={styles.infoTextArea}>
            <Text style={styles.infoCardTitle}>Planeje</Text>
            <Text style={styles.infoCardDesc}>
              Veja a proxima aula agendada em cada sala
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F5',
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F5',
    gap: 12,
  },
  loadingText: {
    fontSize: 16,
    color: '#8E8E9A',
  },
  banner: {
    backgroundColor: '#ED145B',
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
  },
  bannerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#FFD1DC',
    lineHeight: 20,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  ctaButton: {
    backgroundColor: '#ED145B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 8,
    marginBottom: 24,
  },
  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoSection: {
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D2D3A',
    marginBottom: 12,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    gap: 12,
  },
  infoTextArea: {
    flex: 1,
  },
  infoCardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2D2D3A',
  },
  infoCardDesc: {
    fontSize: 12,
    color: '#8E8E9A',
    marginTop: 2,
  },
});
