import React, { useState } from 'react';
import { Button } from './Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';

// ---------------------------------------------------------------------------
// CONFIGURAÇÃO DO N8N
// Substitua a URL abaixo pelo seu Webhook de Produção do n8n
// Exemplo: 'https://seu-n8n.com/webhook/form-high-contorno'
// ---------------------------------------------------------------------------
const N8N_WEBHOOK_URL = 'https://n8n.agenteeven.com.br/webhook/ee1480e1-c885-4c3f-a7ff-97e4237f9c6a';

export const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Landing Page High Contorno',
          submittedAt: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '' }); // Limpa o formulário
      } else {
        throw new Error('Falha ao enviar dados para o n8n');
      }
    } catch (error) {
      console.error('Erro no envio:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-brand-gray p-8 text-center border border-white/20 h-full flex flex-col items-center justify-center min-h-[400px]">
        <div className="text-white mb-6">
          <CheckCircle2 size={64} strokeWidth={1} />
        </div>
        <h3 className="text-2xl text-white font-serif mb-4">Solicitação Recebida</h3>
        <p className="text-gray-300 font-light mb-8">
          Seus dados foram enviados com sucesso. Um de nossos consultores entrará em contato em breve.
        </p>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          Voltar
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-brand-black border border-white/10 p-8 md:p-12 relative z-10 h-full flex flex-col justify-center">
      <h3 className="text-3xl font-serif text-white mb-2">Agendar Apresentação</h3>
      <p className="text-gray-300 mb-8 text-sm font-light tracking-wide">
        Garanta prioridade na pré-venda e acesso à tabela exclusiva.
      </p>
      
      <div className="space-y-6">
        <div className="group">
          <label htmlFor="name" className="block text-xs uppercase tracking-widest text-white mb-2 font-medium">Nome Completo</label>
          <input 
            id="name"
            name="name"
            type="text" 
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/40 py-3 text-white focus:outline-none focus:border-white transition-all placeholder-gray-400 text-base"
            placeholder="Digite seu nome"
          />
        </div>
        <div className="group">
          <label htmlFor="email" className="block text-xs uppercase tracking-widest text-white mb-2 font-medium">E-mail</label>
          <input 
            id="email"
            name="email"
            type="email" 
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/40 py-3 text-white focus:outline-none focus:border-white transition-all placeholder-gray-400 text-base"
            placeholder="seu@email.com"
          />
        </div>
        <div className="group">
          <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-white mb-2 font-medium">Telefone</label>
          <input 
            id="phone"
            name="phone"
            type="tel" 
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/40 py-3 text-white focus:outline-none focus:border-white transition-all placeholder-gray-400 text-base"
            placeholder="(71) 99999-9999"
          />
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-400 text-sm mt-2 bg-red-900/20 p-3 rounded border border-red-900/50">
            <AlertCircle size={16} />
            <span>Erro ao enviar. Verifique sua conexão ou tente novamente.</span>
          </div>
        )}
        
        <div className="pt-6">
          <Button type="submit" fullWidth disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Enviando...' : 'Agendar Apresentação'}
          </Button>
        </div>
      </div>
    </form>
  );
};