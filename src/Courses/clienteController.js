const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar um novo cliente
exports.createCliente = async (req, res) => {
  try {
    const { name, lastName, cpf, address } = req.body;
    const newCliente = await prisma.cliente.create({
      data: { name, lastName, cpf, address },
    });
    res.json(newCliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar cliente' });
  }
};

// Listar todos os clientes
exports.getClientes = async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar clientes' });
  }
};

// Buscar cliente por ID
exports.getClienteById = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await prisma.cliente.findUnique({
      where: { id: parseInt(id) },
    });
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar cliente' });
  }
};

// Atualizar cliente
exports.updateCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastName, cpf, address } = req.body;
    const updatedCliente = await prisma.cliente.update({
      where: { id: parseInt(id) },
      data: { name, lastName, cpf, address },
    });
    res.json(updatedCliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar cliente' });
  }
};

// Deletar cliente
exports.deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.cliente.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Cliente deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar cliente' });
  }
};
