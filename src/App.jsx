import React, { useState } from 'react';

function App() {
  // 1. Estado para controlar os campos do formulário (Formulário Controlado)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  // 2. Estado para armazenar os dados que serão exibidos após o envio
  const [dadosEnviados, setDadosEnviados] = useState(null);

  // Função para lidar com a digitação nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que a página recarregue
    setDadosEnviados(formData); // Salva os dados atuais no estado de exibição
    
    // Opcional: Limpar os campos do formulário após o envio
    // setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <div style={styles.container}>
      <h2>Formulário de Contato</h2>
      
      {/* Formulário */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
            rows="4"
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>Enviar</button>
      </form>

      {/* Renderização condicional dos dados enviados */}
      {dadosEnviados && (
        <div style={styles.resultado}>
          <h3>Dados Enviados com Sucesso:</h3>
          <p><strong>Nome:</strong> {dadosEnviados.nome}</p>
          <p><strong>Email:</strong> {dadosEnviados.email}</p>
          <p><strong>Mensagem:</strong> {dadosEnviados.mensagem}</p>
        </div>
      )}
    </div>
  );
}

// Objeto de estilos básicos para deixar o app mais apresentável (opcional)
const styles = {
  container: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px'
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  resultado: {
    marginTop: '30px',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '5px'
  }
};

export default App;