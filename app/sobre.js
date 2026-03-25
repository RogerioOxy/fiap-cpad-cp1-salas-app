import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Tela Sobre - informacoes do projeto e integrantes
export default function Sobre() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header do projeto */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Ionicons name="school" size={48} color="#ED145B" />
        </View>
        <Text style={styles.appName}>FIAP Salas</Text>
        <Text style={styles.version}>Versao 1.0.0</Text>
      </View>

      {/* Sobre o projeto */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre o Projeto</Text>
        <Text style={styles.description}>
          O FIAP Salas e um aplicativo mobile que permite aos alunos da FIAP
          consultarem a disponibilidade de salas de aula, laboratorios e
          auditorios em tempo real.
        </Text>
        <Text style={styles.description}>
          O problema: alunos frequentemente perdem tempo procurando salas livres
          para estudar ou reunir grupos. Com o FIAP Salas, basta abrir o app e
          ver quais espacos estao disponiveis.
        </Text>
      </View>

      {/* Funcionalidades */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Funcionalidades</Text>
        <View style={styles.featureItem}>
          <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
          <Text style={styles.featureText}>
            Visualizacao de salas disponiveis, ocupadas e em manutencao
          </Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
          <Text style={styles.featureText}>Filtro por andar</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
          <Text style={styles.featureText}>
            Detalhes de cada sala (capacidade, aula atual, proxima aula)
          </Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
          <Text style={styles.featureText}>
            Estatisticas de disponibilidade na tela inicial
          </Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
          <Text style={styles.featureText}>
            Navegacao intuitiva com abas inferiores
          </Text>
        </View>
      </View>

      {/* Tecnologias */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tecnologias Utilizadas</Text>
        <View style={styles.techRow}>
          <View style={styles.techBadge}>
            <Text style={styles.techText}>React Native</Text>
          </View>
          <View style={styles.techBadge}>
            <Text style={styles.techText}>Expo</Text>
          </View>
          <View style={styles.techBadge}>
            <Text style={styles.techText}>Expo Router</Text>
          </View>
        </View>
        <View style={styles.techRow}>
          <View style={styles.techBadge}>
            <Text style={styles.techText}>useState</Text>
          </View>
          <View style={styles.techBadge}>
            <Text style={styles.techText}>useEffect</Text>
          </View>
          <View style={styles.techBadge}>
            <Text style={styles.techText}>StyleSheet</Text>
          </View>
        </View>
      </View>

      {/* Integrantes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Integrantes do Grupo</Text>

        <View style={styles.memberCard}>
          <View style={styles.memberAvatar}>
            <Text style={styles.avatarText}>RD</Text>
          </View>
          <View style={styles.memberInfo}>
            <Text style={styles.memberName}>Rogerio Deligi Ferreira Filho</Text>
            <Text style={styles.memberRm}>RM561942</Text>
          </View>
        </View>

        <View style={styles.memberCard}>
          <View style={styles.memberAvatar}>
            <Text style={styles.avatarText}>MF</Text>
          </View>
          <View style={styles.memberInfo}>
            <Text style={styles.memberName}>Maria Fernanda Garavelli Dantas</Text>
            <Text style={styles.memberRm}>RM562686</Text>
          </View>
        </View>
      </View>

      {/* Disciplina */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informacoes Academicas</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Disciplina:</Text>
          <Text style={styles.infoValue}>Cross-Platform Application Development</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Professor:</Text>
          <Text style={styles.infoValue}>Hercules Ramos</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Curso:</Text>
          <Text style={styles.infoValue}>Ciencia da Computacao - 2o Ano</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Instituicao:</Text>
          <Text style={styles.infoValue}>FIAP</Text>
        </View>
      </View>

      {/* Link para FIAP */}
      <TouchableOpacity
        style={styles.linkButton}
        onPress={() => Linking.openURL('https://www.fiap.com.br')}
      >
        <Ionicons name="globe-outline" size={20} color="#fff" />
        <Text style={styles.linkText}>Visitar site da FIAP</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          FIAP - Checkpoint 1 - CPAD - 2026
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F5',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
    paddingTop: 10,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#FDE8EF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D2D3A',
  },
  version: {
    fontSize: 14,
    color: '#8E8E9A',
    marginTop: 4,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ED145B',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
    marginBottom: 8,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 8,
  },
  featureText: {
    flex: 1,
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  techRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 8,
  },
  techBadge: {
    backgroundColor: '#FDE8EF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  techText: {
    fontSize: 13,
    color: '#ED145B',
    fontWeight: '600',
  },
  memberCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F8F8FA',
    borderRadius: 10,
    marginBottom: 8,
    gap: 12,
  },
  memberAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#ED145B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D2D3A',
  },
  memberRm: {
    fontSize: 13,
    color: '#8E8E9A',
    marginTop: 2,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 8,
    gap: 4,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D2D3A',
  },
  infoValue: {
    flex: 1,
    fontSize: 14,
    color: '#555',
  },
  linkButton: {
    backgroundColor: '#ED145B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 12,
    gap: 8,
    marginBottom: 16,
  },
  linkText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  footerText: {
    fontSize: 12,
    color: '#B0B0B0',
  },
});
