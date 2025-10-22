const express = require('express');
const cors = require('cors');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Database
const mailboxes = new Map();
const emails = new Map();

function generateEmail() {
    const domains = ['tempinbox.com', 'quickmail.dev', 'instantinbox.net'];
    const randomId = Math.random().toString(36).substring(2, 10);
    const domain = domains[Math.floor(Math.random() * domains.length)];
    return randomId + '@' + domain;
}

// Rotas API
app.post('/api/create-mailbox', (req, res) => {
    const email = generateEmail();
    const mailboxId = uuidv4();
    
    const mailbox = {
        id: mailboxId,
        email: email,
        createdAt: new Date(),
        messages: []
    };
    
    mailboxes.set(mailboxId, mailbox);
    emails.set(email, mailboxId);
    
    res.json({ success: true, email: email, mailboxId: mailboxId });
});

app.post('/api/receive-email', (req, res) => {
    const { to, from, subject, text } = req.body;
    
    const mailboxId = emails.get(to);
    if (!mailboxId) return res.status(404).json({ error: 'Mailbox not found' });
    
    const mailbox = mailboxes.get(mailboxId);
    if (!mailbox) return res.status(404).json({ error: 'Mailbox not found' });
    
    const message = {
        id: uuidv4(),
        to: to,
        from: from,
        subject: subject,
        text: text,
        receivedAt: new Date(),
        read: false
    };
    
    mailbox.messages.push(message);
    res.json({ success: true });
});

app.get('/api/mailbox/:mailboxId', (req, res) => {
    const mailbox = mailboxes.get(req.params.mailboxId);
    if (!mailbox) return res.status(404).json({ error: 'Mailbox not found' });
    res.json({ email: mailbox.email, messages: mailbox.messages });
});

// Rota principal - CORRIGIDA
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia servidor
app.listen(PORT, '0.0.0.0', function() {
    console.log('Servidor rodando na porta ' + PORT);
});
