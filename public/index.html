<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Gerador de E-mail - Totalmente Funcional</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        
        .email-generator {
            padding: 30px;
            background: #f8f9fa;
            border-bottom: 2px solid #e9ecef;
        }
        
        .generator-controls {
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
            flex-wrap: wrap;
            align-items: center;
        }
        
        .btn {
            background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        
        .btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
        }
        
        .btn-success {
            background: linear-gradient(135deg, #27ae60 0%, #219a52 100%);
        }
        
        .btn-danger {
            background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        }
        
        .email-display {
            background: white;
            padding: 20px;
            border-radius: 8px;
            border: 2px solid #3498db;
            margin-top: 20px;
        }
        
        .email-address {
            font-family: monospace;
            font-size: 20px;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 10px;
        }
        
        .mailbox {
            padding: 30px;
        }
        
        .mailbox-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 15px;
        }
        
        .inbox {
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            max-height: 600px;
            overflow-y: auto;
        }
        
        .email-item {
            padding: 15px;
            border-bottom: 1px solid #eee;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        
        .email-item:hover {
            background: #f8f9fa;
        }
        
        .email-item.unread {
            background: #e3f2fd;
            font-weight: bold;
        }
        
        .email-subject {
            font-weight: bold;
            margin-bottom: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .email-preview {
            color: #666;
            font-size: 14px;
            margin-bottom: 5px;
        }
        
        .email-meta {
            font-size: 12px;
            color: #999;
            display: flex;
            justify-content: space-between;
        }
        
        .email-content {
            display: none;
            padding: 20px;
            background: #f8f9fa;
            border-top: 1px solid #ddd;
        }
        
        .empty-inbox {
            text-align: center;
            padding: 40px;
            color: #666;
        }
        
        .status-indicator {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 8px;
        }
        
        .status-online {
            background: #27ae60;
        }
        
        .status-offline {
            background: #e74c3c;
        }
        
        .loading {
            text-align: center;
            padding: 20px;
            color: #666;
        }
        
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: bold;
            z-index: 1000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification.success {
            background: #27ae60;
        }
        
        .notification.error {
            background: #e74c3c;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 Meu Gerador de E-mail Funcional</h1>
            <p>Caixas postais temporárias totalmente funcionais</p>
            <div style="margin-top: 10px;">
                <span class="status-indicator status-online" id="statusIndicator"></span>
                <span id="statusText">Conectado ao servidor</span>
            </div>
        </div>

        <div class="email-generator">
            <h2>🎯 Criar Nova Caixa Postal</h2>
            <div class="generator-controls">
                <button class="btn" onclick="createMailbox()">
                    🚀 Criar Novo E-mail
                </button>
                
                <button class="btn btn-success" onclick="testEmail()">
                    ✉️ Testar Recebimento
                </button>
                
                <button class="btn btn-danger" onclick="deleteMailbox()">
                    🗑️ Deletar Caixa Postal
                </button>
            </div>
            
            <div class="email-display" id="emailDisplay" style="display: none;">
                <div class="email-address" id="currentEmail"></div>
                <div class="email-meta">
                    <span>Caixa Postal ID: <span id="mailboxId"></span></span>
                    <span>Criada em: <span id="createdAt"></span></span>
                </div>
                <button class="btn" onclick="copyEmail()" style="margin-top: 10px;">📋 Copiar E-mail</button>
            </div>
        </div>

        <div class="mailbox">
            <div class="mailbox-header">
                <h2>📬 Caixa de Correio</h2>
                <div>
                    <button class="btn" onclick="refreshMailbox()">
                        🔄 Atualizar
                    </button>
                    <span style="margin-left: 15px; color: #666;">
                        Mensagens: <span id="messageCount">0</span>
                    </span>
                </div>
            </div>
            
            <div class="inbox" id="inbox">
                <div class="empty-inbox">
                    Nenhuma caixa postal ativa. Clique em "Criar Novo E-mail" para começar.
                </div>
            </div>
        </div>
    </div>

    <div class="notification" id="notification"></div>

    <script>
        const API_BASE = window.location.origin;
        let currentMailbox = null;

        // Função para mostrar notificações
        function showNotification(message, type = 'success') {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.className = `notification ${type}`;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Criar nova caixa postal
        async function createMailbox() {
            try {
                const response = await fetch(`${API_BASE}/api/create-mailbox`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                
                const data = await response.json();
                
                if (data.success) {
                    currentMailbox = {
                        id: data.mailboxId,
                        email: data.email
                    };
                    
                    document.getElementById('currentEmail').textContent = data.email;
                    document.getElementById('mailboxId').textContent = data.mailboxId;
                    document.getElementById('createdAt').textContent = new Date().toLocaleString();
                    document.getElementById('emailDisplay').style.display = 'block';
                    
                    showNotification('Caixa postal criada com sucesso!');
                    refreshMailbox();
                }
            } catch (error) {
                console.error('Erro ao criar caixa postal:', error);
                showNotification('Erro ao criar caixa postal', 'error');
            }
        }

        // Atualizar caixa postal
        async function refreshMailbox() {
            if (!currentMailbox) {
                return;
            }
            
            try {
                document.getElementById('inbox').innerHTML = '<div class="loading">Carregando e-mails...</div>';
                
                const response = await fetch(`${API_BASE}/api/mailbox/${currentMailbox.id}`);
                const data = await response.json();
                
                if (data.messages && data.messages.length > 0) {
                    displayEmails(data.messages);
                } else {
                    document.getElementById('inbox').innerHTML = `
                        <div class="empty-inbox">
                            📭 Nenhum e-mail recebido ainda.<br>
                            <small>Use o e-mail <strong>${currentMailbox.email}</strong> para receber mensagens</small>
                        </div>
                    `;
                }
                
                document.getElementById('messageCount').textContent = data.messages ? data.messages.length : 0;
            } catch (error) {
                console.error('Erro ao carregar e-mails:', error);
                showNotification('Erro ao carregar e-mails', 'error');
            }
        }

        // Exibir e-mails na interface
        function displayEmails(messages) {
            let inboxHTML = '';
            
            messages.forEach((message, index) => {
                const unreadClass = message.read ? '' : 'unread';
                const shortText = message.text ? message.text.substring(0, 100) + '...' : '';
                
                inboxHTML += `
                    <div class="email-item ${unreadClass}" onclick="showEmailContent(${index}, '${message.id}')">
                        <div class="email-subject">
                            ${message.subject}
                            ${!message.read ? '<span style="color: #3498db; font-size: 12px;">●</span>' : ''}
                        </div>
                        <div class="email-preview">${shortText}</div>
                        <div class="email-meta">
                            <span>De: ${message.from}</span>
                            <span>${new Date(message.receivedAt).toLocaleString()}</span>
                        </div>
                    </div>
                    <div class="email-content" id="emailContent${index}">
                        <div style="margin-bottom: 15px;">
                            <strong>De:</strong> ${message.from}<br>
                            <strong>Para:</strong> ${message.to}<br>
                            <strong>Assunto:</strong> ${message.subject}<br>
                            <strong>Data:</strong> ${new Date(message.receivedAt).toLocaleString()}
                        </div>
                        <div style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
                            ${message.html ? message.html : message.text.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                `;
            });
            
            document.getElementById('inbox').innerHTML = inboxHTML;
        }

        // Mostrar conteúdo do e-mail
        function showEmailContent(index, messageId) {
            // Esconde todos os conteúdos
            const allContents = document.querySelectorAll('.email-content');
            allContents.forEach(content => {
                content.style.display = 'none';
            });
            
            // Mostra o conteúdo clicado
            const content = document.getElementById(`emailContent${index}`);
            if (content) {
                content.style.display = 'block';
            }
            
            // Marca como lido
            markAsRead(messageId);
            
            // Remove a classe unread do item
            const emailItem = document.querySelectorAll('.email-item')[index];
            emailItem.classList.remove('unread');
        }

        // Marcar e-mail como lido
        async function markAsRead(messageId) {
            if (!currentMailbox) return;
            
            try {
                await fetch(`${API_BASE}/api/mark-read/${currentMailbox.id}/${messageId}`, {
                    method: 'POST'
                });
            } catch (error) {
                console.error('Erro ao marcar como lido:', error);
            }
        }

        // Copiar e-mail para área de transferência
        function copyEmail() {
            if (!currentMailbox) {
                showNotification('Crie um e-mail primeiro!', 'error');
                return;
            }
            
            navigator.clipboard.writeText(currentMailbox.email).then(() => {
                showNotification('E-mail copiado para a área de transferência!');
            });
        }

        // Testar recebimento de e-mail
        async function testEmail() {
            if (!currentMailbox) {
                showNotification('Crie um e-mail primeiro!', 'error');
                return;
            }
            
            try {
                const testEmail = {
                    to: currentMailbox.email,
                    from: 'test@exemplo.com',
                    subject: '📧 E-mail de Teste Recebido!',
                    text: `Parabéns! Seu gerador de e-mail está funcionando perfeitamente.\n\nEsta é uma mensagem de teste enviada para: ${currentMailbox.email}\n\nData: ${new Date().toLocaleString()}\n\nSeu sistema está pronto para receber e-mails!`,
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                            <h2 style="color: #3498db;">🎉 E-mail de Teste Recebido!</h2>
                            <p>Parabéns! Seu gerador de e-mail está funcionando perfeitamente.</p>
                            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0;">
                                <strong>Destinatário:</strong> ${currentMailbox.email}<br>
                                <strong>Data:</strong> ${new Date().toLocaleString()}
                            </div>
                            <p>Seu sistema está pronto para receber e-mails de qualquer aplicação!</p>
                            <hr>
                            <small style="color: #666;">Este é um e-mail de teste automático</small>
                        </div>
                    `
                };
                
                const response = await fetch(`${API_BASE}/api/receive-email`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(testEmail)
                });
                
                const data = await response.json();
                
                if (data.success) {
                    showNotification('E-mail de teste enviado! Verifique sua caixa postal.');
                    setTimeout(refreshMailbox, 1000);
                }
            } catch (error) {
                console.error('Erro ao enviar e-mail de teste:', error);
                showNotification('Erro ao enviar e-mail de teste', 'error');
            }
        }

        // Deletar caixa postal
        async function deleteMailbox() {
            if (!currentMailbox) {
                showNotification('Nenhuma caixa postal ativa', 'error');
                return;
            }
            
            if (confirm('Tem certeza que deseja deletar esta caixa postal? Todos os e-mails serão perdidos.')) {
                try {
                    const response = await fetch(`${API_BASE}/api/mailbox/${currentMailbox.id}`, {
                        method: 'DELETE'
                    });
                    
                    const data = await response.json();
                    
                    if (data.success) {
                        currentMailbox = null;
                        document.getElementById('emailDisplay').style.display = 'none';
                        document.getElementById('inbox').innerHTML = '<div class="empty-inbox">Caixa postal deletada. Crie uma nova para começar.</div>';
                        document.getElementById('messageCount').textContent = '0';
                        showNotification('Caixa postal deletada com sucesso');
                    }
                } catch (error) {
                    console.error('Erro ao deletar caixa postal:', error);
                    showNotification('Erro ao deletar caixa postal', 'error');
                }
            }
        }

        // Verificar status do servidor
        async function checkServerStatus() {
            try {
                await fetch(`${API_BASE}/api/create-mailbox`, { method: 'POST' });
                document.getElementById('statusIndicator').className = 'status-indicator status-online';
                document.getElementById('statusText').textContent = 'Conectado ao servidor';
            } catch (error) {
                document.getElementById('statusIndicator').className = 'status-indicator status-offline';
                document.getElementById('statusText').textContent = 'Servidor offline';
            }
        }

        // Atualizar automaticamente a cada 30 segundos
        setInterval(() => {
            if (currentMailbox) {
                refreshMailbox();
            }
        }, 30000);

        // Inicializar
        window.addEventListener('load', () => {
            checkServerStatus();
        });
    </script>
</body>
</html>
